import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

const tickets = [
  {
    title: "Ticket 1",
    content: "This is the first ticket from the database",
    status: "DONE" as const,
    deadline: new Date().toISOString().split("T")[0],
    bounty: 499, // $4.99
  },
  {
    title: "Ticket 2",
    content: "This is the second ticket from the database",
    status: "OPEN" as const,
    deadline: new Date().toISOString().split("T")[0],
    bounty: 399, // $3.99
  },
  {
    title: "Ticket 3",
    content: "This is the third ticket from the database",
    status: "IN_PROGRESS" as const,
    deadline: new Date().toISOString().split("T")[0],
    bounty: 599, // $5.99
  },
];

const seed = async () => {
  // for-of
  //   for (const ticket of tickets) {
  //     await prisma.ticket.create({
  //       data: ticket,
  //     });
  //   }

  // All promises at once
  //   const promises = tickets.map((ticket) => {
  //     prisma.ticket.create({
  //       data: ticket,
  //     });
  //   });
  //   await Promise.all(promises);

  // before seeding, delete old data:
  console.time("DB Seed");
  await prisma.ticket.deleteMany({});

  // built-in prisma method
  await prisma.ticket.createMany({
    data: tickets,
  });
  console.timeEnd("DB Seed");
};

seed();
