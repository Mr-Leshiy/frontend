from dataclasses import dataclass
from datetime import datetime
from typing import Optional

@dataclass
class EventImage:
    image: str

@dataclass
class Event:
    title: str
    startDate: datetime
    endDate: datetime
    location: str
    website: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None