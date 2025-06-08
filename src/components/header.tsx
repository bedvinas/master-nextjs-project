import { homePath, ticketsPath } from "@/paths";
import { LucideKanban } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ThemeSwitcher } from "./theme/theme-switcher";

const Header = () => {
  return (
    <nav className="supports-backdrop-blur:bg-background/60 bg-background/95 backdrop-blur w-full fixed left-0 right-0 top-0 z-20 flex justify-between py-2.5 px-5 border-b">
      <div className="flex align-items gap-x-2">
        <Link
          href={homePath()}
          className={buttonVariants({ variant: "ghost" })}
        >
          <LucideKanban />
          <h1 className="text-lg font-semibold">TicketBounty</h1>
        </Link>
      </div>
      <div className="flex align-items gap-x-2">
        <ThemeSwitcher />
        <Link
          href={ticketsPath()}
          className={buttonVariants({ variant: "default" })}
        >
          Tickets
        </Link>
      </div>
    </nav>
  );
};
export { Header };
