from dataclasses import dataclass
from datetime import datetime
from typing import Optional
import hashlib

@dataclass
class EventImage:
    image: str

    def id(self):
        return hashlib.sha256(self.image.encode('utf-8')).hexdigest()

@dataclass
class Event:
    title: str
    startDate: datetime
    endDate: datetime
    location: str
    website: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None

    def id(self):
        return hashlib.sha256(repr(self).encode('utf-8')).hexdigest()

@dataclass
class EventRequest:
    stakeAddress: str
    event: Event

@dataclass
class GenerateTicketsRequest:
    stakeAddress: str
    ticketsAmount: int
    event: Event

@dataclass
class Ticket:
    id: str
    event_id: str

    def __init__(self, event_id: str, index: int):
        self.event_id = event_id
        self.id = hashlib.sha256(f"{event_id}:{index}".encode('utf-8')).hexdigest()