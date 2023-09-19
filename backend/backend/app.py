import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import secrets

from .types.models import EventImage, EventRequest, GenerateTicketsRequest, Ticket

events = {}
event_tickets = {}
event_images = {}

user_tickets = {}
user_events = {}

app = FastAPI()
origins = [
    "*",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/events/image")
async def post_event_image(image: EventImage):
    id = image.id()
    event_images[id] = image
    return {"id": id}

@app.get("/events/image/{id}")
async def get_event_image(id):
    if id in event_images:
        return event_images[id]
    else:
        raise HTTPException(status_code = 404, detail = "Image not found")

@app.post("/events/event/publish")
async def publish_event(req: EventRequest):
    event_id = req.event.id()
    user_events.setdefault(req.stakeAddress, set()).add(event_id)
    events[event_id] = req.event

@app.get("/events/user/{stakeAddress}")
async def get_user_events(stakeAddress: str):
    if stakeAddress in user_events:
        events_ids = user_events[stakeAddress]
        res = []
        for id in events_ids:
            event = events[id]
            res.append(event) 
        return res
    else:
        raise HTTPException(status_code = 404, detail = "User events not found")

@app.get("/events/event/{id}")
async def get_event(id: str):
    if id in events:
        return events[id]
    else:
        raise HTTPException(status_code = 404, detail = "Event not found")

@app.post("/events/tickets/generate")
async def generate_tickets(req: GenerateTicketsRequest):
    if req.ticketsAmount > 0:
        event_id = req.event.id()
        event_tickets_ = event_tickets.setdefault(event_id, [])
        user_tickets_ = user_tickets.setdefault(req.stakeAddress, [])
        cur_tickets_amount = len(event_tickets_)
        for i in range(0, req.ticketsAmount):
            ticket = Ticket(event_id, i + cur_tickets_amount)
            event_tickets_.append(ticket)
            user_tickets_.append(ticket)

@app.get("/events/tickets/user/{stakeAddress}")
async def get_tickets(stakeAddress: str):
    if stakeAddress in user_tickets:
        tickets = user_tickets[stakeAddress]
        return tickets
    else:
        raise HTTPException(status_code = 404, detail = "User tickets not found")


def main():
    uvicorn.run("backend.app:app", host="0.0.0.0", port=8000, reload=True)
