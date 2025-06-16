"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ticketPath } from "@/paths";
import Link from "next/link";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "@/generated/prisma";
import { LucideSquareArrowOutUpRight, LucideTrash } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { prisma } from "@/lib/prisma";
import { deleteTicket } from "../actions/delete-ticket";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  console.log("Where am I displayed? {TicketItem}");

  const detailButton = (
    <Button asChild variant="outline" size="icon">
      <Link href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  // How to use server action within a client component

  const handleDeleteTicket = async () => {
    await deleteTicket(ticket.id);
  };

  const deleteButton = (
    <Button onClick={handleDeleteTicket} variant="outline" size="icon">
      <LucideTrash className="h-4 w-4" />
    </Button>
  );

  return (
    <div
      className={clsx("w-full flex gap-x-1", {
        "max-w-[420px]": !isDetail,
        "max-w-[580px]": isDetail,
      })}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2 items-center">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <h3 className="truncate">{ticket.title}</h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p
            className={clsx("whitespace-break-spaces", {
              "line-clamp-3": !isDetail,
            })}
          >
            {ticket.content}
          </p>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-1">
        {isDetail ? deleteButton : detailButton}
      </div>
    </div>
  );
};

export { TicketItem };
