export function getTickets(accountId) {
  let tickets = [];
  for (let i = 1; i < 30; i++) {
    tickets.push({
      id: "54e6f9ec6b59431303a801e72a238ebc291142bcc35eefec6d7526b2bebe7ae8",
      title:
        "Event " +
        i +
        " dsasfasjdfkdsahjgklhdfsajkflasdjklfhdjsaklhfdsjkalfhdsajkfnadsjkl",
      description: "Event " + i + " description",
      date: new Date(2023, 8, 31),
      venue: "Event " + i + " venue vfasdfsagjfsdkagnfkdjsngkjfds",
    });
  }
  return tickets;
}
