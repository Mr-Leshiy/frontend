from dataclasses import dataclass
from datetime import datetime

@dataclass
class TicketInfo:
    id: str
    title: str
    date: datetime

