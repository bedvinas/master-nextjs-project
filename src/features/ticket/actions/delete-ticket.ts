"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { revalidatePath } from "next/cache";
import { setCookieByKey } from "@/actions/cookies";
import { fromErrorToActionState } from "@/components/form/utils/to-action-state";

export const deleteTicket = async (id: string) => {
  // artificial delay for testing:
  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    await prisma.ticket.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    return fromErrorToActionState(error);
  }
  // remove cache before we redirect back to tickets page (in order too see the updated data)
  revalidatePath(ticketsPath());
  await setCookieByKey("toast", "Ticket Deleted");
  redirect(ticketsPath());
};
