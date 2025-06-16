// "use client";

import { Suspense } from "react";
import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";

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
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
