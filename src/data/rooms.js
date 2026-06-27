import deluxe from "../assets/rooms/deluxe.jpg";
import premium from "../assets/rooms/premium.jpg";
import suite from "../assets/rooms/suite.jpg";
import luxury from "../assets/rooms/luxury.jpg";
import family from "../assets/rooms/family.jpg";
import { LuX } from "react-icons/lu";


export const rooms = [
  // Resort 1
  {
    id: 1,
    resortId: 1,
    roomType: "Deluxe Room",
    price: 8999,
    image: deluxe,
    capacity: 2,
    availableRooms: 3,
  },
  {
    id: 2,
    resortId: 1,
    roomType: "Premium Room",
    price: 12999,
    image: premium,
    capacity: 3,
    availableRooms: 1,
  },
  
  {
    id: 3,
    resortId: 1,
    roomType: "Suite Room",
    price: 18999,
    image:suite,
    capacity: 4,
    availableRooms: 0,
  },

  // Resort 2
  {
    id: 4,
    resortId: 2,
    roomType: "Standard Room",
    price: 6999,
    image: family,
    capacity: 2,
    availableRooms: 3,
  },
  {
    id: 5,
    resortId: 2,
    roomType: "Deluxe Room",
    price: 9999,
    image: deluxe,
    capacity: 3,
    availableRooms: 0,
  },
  {
    id: 6,
    resortId: 2,
    roomType: "Family Room",
    price: 14999,
    image: family,
    capacity: 5,
    availableRooms: 2,
  },

  // Resort 3
  {
    id: 7,
    resortId: 3,
    roomType: "Deluxe Room",
    price: 8999,
    image: deluxe,
    capacity: 2,
    availableRooms: 1,
  },
  {
    id: 8,
    resortId: 3,
    roomType: "Premium Room",
    price: 13999,
    image: premium,
    capacity: 3,
    availableRooms: 1,
  },
  {
    id: 9,
    resortId: 3,
    roomType: "Suite Room",
    price: 19999,
    image: suite,
    capacity: 4,
    availableRooms: 0,
  },

  // Resort 4
  {
    id: 10,
    resortId: 4,
    roomType: "Standard Room",
    price: 6499,
    image: family,
    capacity: 2,
    availableRooms: 2,
  },
  {
    id: 11,
    resortId: 4,
    roomType: "Deluxe Room",
    price: 9499,
    image: deluxe,
    capacity: 3,
    availableRooms: 1,
  },
  {
    id: 12,
    resortId: 4,
    roomType: "Family Room",
    price: 13999,
    image: family,
    capacity: 5,
    availableRooms: 1,
  },

  // Resort 5
  {
    id: 13,
    resortId: 5,
    roomType: "Luxury Room",
    price: 15999,
    image: luxury,
    capacity: 2,
    availableRooms: 0,
  },
  {
    id: 14,
    resortId: 5,
    roomType: "Royal Suite",
    price: 24999,
    image: deluxe,
    capacity: 4,
    availableRooms: 0,
  },
  {
    id: 15,
    resortId: 5,
    roomType: "Presidential Suite",
    price: 34999,
    image: luxury,
    capacity: 6,
    availableRooms: 1,
  },

  // Resort 6
  {
    id: 16,
    resortId: 6,
    roomType: "Lake View Room",
    price: 8499,
    image: deluxe,
    capacity: 2,
    availableRooms: 0,
  },
  {
    id: 17,
    resortId: 6,
    roomType: "Premium Lake View",
    price: 11999,
    image: suite,
    capacity: 3,
    availableRooms: 1,
  },
  {
    id: 18,
    resortId: 6,
    roomType: "Family Suite",
    price: 16999,
    image: family,
    capacity: 5,
    availableRooms: 2,
  },

  // Resort 7
  {
    id: 19,
    resortId: 7,
    roomType: "Beach Room",
    price: 8999,
    image: luxury,
    capacity: 2,
    availableRooms: 2,
  },
  {
    id: 20,
    resortId: 7,
    roomType: "Ocean View Room",
    price: 12999,
    image: deluxe,
    capacity: 3,
    availableRooms: 0,
  },
  {
    id: 21,
    resortId: 7,
    roomType: "Beach Suite",
    price: 18999,
    image: suite,
    capacity: 4,
    availableRooms: 1,
  },

  // Resort 8
  {
    id: 22,
    resortId: 8,
    roomType: "Mountain Room",
    price: 9999,
    image: deluxe,
    capacity: 2,
    availableRooms: 1,
  },
  {
    id: 23,
    resortId: 8,
    roomType: "Premium Mountain View",
    price: 14999,
    image: luxury,
    capacity: 3,
    availableRooms: 2,
  },
  {
    id: 24,
    resortId: 8,
    roomType: "Snow Peak Suite",
    price: 21999,
    image: suite,
    capacity: 4,
    availableRooms: 0,
  },

  // Resort 9
  {
    id: 25,
    resortId: 9,
    roomType: "Forest Room",
    price: 7999,
    image: deluxe,
    capacity: 2,
    availableRooms: 3,
  },
  {
    id: 26,
    resortId: 9,
    roomType: "Nature View Room",
    price: 10999,
    image: luxury,
    capacity: 3,
    availableRooms: 2,
  },
  {
    id: 27,
    resortId: 9,
    roomType: "Forest Suite",
    price: 16999,
    image: suite,
    capacity: 4,
    availableRooms: 1,
  },

  // Resort 10
  {
    id: 28,
    resortId: 10,
    roomType: "Luxury Room",
    price: 17999,
    image: luxury,
    capacity: 2,
    availableRooms: 0,
  },
  {
    id: 29,
    resortId: 10,
    roomType: "Golden Suite",
    price: 25999,
    image: suite,
    capacity: 4,
    availableRooms: 3,
  },
  {
    id: 30,
    resortId: 10,
    roomType: "Presidential Suite",
    price: 39999,
    image: family,
    capacity: 6,
    availableRooms: 2,
  },
];