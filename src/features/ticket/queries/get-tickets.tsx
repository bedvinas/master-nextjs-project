import { initialTickets } from "@/data";
import { Ticket } from "@/features/ticket/types";

export const getTcikets = async (): Promise<Ticket[]> => {
  //return tickets

  //simulate server delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // test error fallback route:
  // throw new Error("Failed to fetch tickets");

  //simulate data comming from server
  return new Promise((resolve) => {
    resolve(initialTickets);
  });
};
