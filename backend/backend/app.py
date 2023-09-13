import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import secrets
import hashlib

from .types.models import EventImage

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

@app.post("/events")
async def submit_event():
    pass

@app.post("/events/image")
async def post_event_image(image: EventImage):
    id = hashlib.sha256(image.image_file.encode('utf-8')).hexdigest()
    event_images[id] = image
    return {"id": id}

@app.get("/events/image/{id}")
async def post_event_image(id):
    return event_images[id]


def main():
    uvicorn.run("backend.app:app", host="0.0.0.0", port=8000, reload=True)
