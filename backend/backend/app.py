import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import secrets
import hashlib

from .types.models import EventImage, Event

state = {}
event_images = {}

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

@app.post("/events/publish")
async def publish_event(event: Event):
    print(event)

@app.post("/events/image")
async def post_event_image(image: EventImage):
    id = hashlib.sha256(image.image.encode('utf-8')).hexdigest()
    event_images[id] = image
    return {"id": id}

@app.get("/events/image/{id}")
async def post_event_image(id):
    if id in event_images:
        return event_images[id]
    else:
        raise HTTPException(status_code = 404, detail = "Image not found")


def main():
    uvicorn.run("backend.app:app", host="0.0.0.0", port=8000, reload=True)
