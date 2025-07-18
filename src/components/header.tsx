import { LucideKanban } from "lucide-react";
import Link from "next/link";
import { homePath, signInPath, signUpPath, ticketsPath } from "@/paths";
import { ThemeSwitcher } from "./theme/theme-switcher";
import { buttonVariants } from "./ui/button";

const Header = () => {
  const navItems = (
    <>
      <Link
        href={ticketsPath()}
        className={buttonVariants({ variant: "default" })}
      >
        Tickets
      </Link>
      <Link
        href={signUpPath()}
        className={buttonVariants({ variant: "outline" })}
      >
        Sign Up
      </Link>
      <Link
        href={signInPath()}
        className={buttonVariants({ variant: "outline" })}
      >
        Sign In
      </Link>
    </>
  );

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
        {navItems}
      </div>
    </nav>
  );
};
export { Header };
