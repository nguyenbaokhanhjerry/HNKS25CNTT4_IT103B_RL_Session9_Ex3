let rooms = [
  {
    roomId: "P101",
    roomType: "Standard",
    pricePerNight: 1000000,
    status: "VACANT",
  },
  {
    roomId: "P102",
    roomType: "Deluxe",
    pricePerNight: 2000000,
    status: "VACANT",
  },
  {
    roomId: "P103",
    roomType: "Standard",
    pricePerNight: 1500000,
    status: "VACANT",
  },
];
console.log("DANH SÁCH PHÒNG BAN ĐẦU");
console.table(rooms);
let newRoom = {
  roomId: "P104",
  roomType: "VIP Suite",
  pricePerNight: 3500000,
  status: "VACANT",
};
rooms.push(newRoom);
console.log("DANH SÁCH SAU KHI THÊM P104");
console.table(rooms);
for (let i = 0; i < rooms.length; i++) {
  if (rooms[i].roomId === "P101") {
    rooms[i].status = "OCCUPIED";
  }
}
console.log("DANH SÁCH SAU KHI CẬP NHẬT P101");
console.table(rooms);
for (let i = 0; i < rooms.length; i++) {
  if (rooms[i].roomId === "P103") {
    rooms.splice(i, 1);
    break;
  }
}
console.log("DANH SÁCH SAU KHI XÓA P103");
console.table(rooms);
