import uvicorn
from fastapi import FastAPI
from datetime import datetime
import secrets

from .types.models import TicketInfo

app = FastAPI()


@app.get("/event/tickets/{account_id}")
async def get_tickets(account_id: str):
    tickets = []
    for i in range(0, 30):
        tickets.append(TicketInfo(secrets.token_hex(32), f"Ticket {i}", datetime(2023, 8, 31)))
    return tickets


def main():
    uvicorn.run("backend.app:app", host="0.0.0.0", port=8000, reload=True)
