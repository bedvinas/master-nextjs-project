"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { revalidatePath } from "next/cache";
import { setCookieByKey } from "@/actions/cookies";

export const deleteTicket = async (id: string) => {
  await prisma.ticket.delete({
    where: {
      id,
    },
  });
  // remove cache before we redirect back to tickets page (in order too see the updated data)
  revalidatePath(ticketsPath());
  setCookieByKey("toast", "Ticket Deleted");
  redirect(ticketsPath());
};
