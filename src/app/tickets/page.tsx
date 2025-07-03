// "use client";

import { Suspense } from "react";
import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { CardCompact } from "@/components/card-compact";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";
import { RedirectToast } from "@/components/redirect-toast";

// force dynamic rendering to avoid full route cache:
// export const dynamic = "force-dynamic";

// take advantage of ISR - keep static rendering, regenerate after revalidate expires.
// export const revalidate = 5;

const TicketsPage = () => {
  // Client component version:
  //  - Need to remove async from the component function declaration and add "use client" directive
  // const [tickets, setTickets] = useState<Ticket[]>([]);

  // useEffect(() => {
  //   const fetchTickets = async () => {
  //     const result = await getTcikets();
  //     setTickets(result);
  //   };
  //   fetchTickets();
  // }, []);

  return (
    <>
      <div className="flex-1 flex flex-col gap-y-8">
        <Heading title="Tickets" description="All your tickets at one place" />
        {/* Configuration over Composition: */}
        <CardCompact
          title="Create Ticket"
          description="A new ticket will be created"
          className="w-full max-w-[420px] self-center"
          content={<TicketUpsertForm />}
        />
        {/* Composition over Configuration: */}
        {/* <Card className="w-full max-w-[420px] self-center">
        <CardHeader>
          <CardTitle>Create Ticket</CardTitle>
          <CardDescription>A new ticket will be created</CardDescription>
        </CardHeader>
        <CardContent>
          <TicketCreateForm />
        </CardContent>
      </Card> */}
        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
      </div>
      <RedirectToast />
    </>
  );
};

export default TicketsPage;
