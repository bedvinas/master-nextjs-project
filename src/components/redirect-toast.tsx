"use client";

import { consumeCookieByKey } from "@/actions/cookies";
import { useEffect } from "react";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

const RedirectToast = () => {
  // Alternatively instead of using pathname as dependency in useEffect, we can use template.tsx which rerenders on navigation by default
  // But template.tsx has issues (06.07.2025) and does not rerender as on nested routes
  const pathname = usePathname();
  useEffect(() => {
    const showCookieToast = async () => {
      const message = await consumeCookieByKey("toast");
      if (message) {
        toast.success(message);
      }
    };

    showCookieToast();
  }, [pathname]);

  return null;
};

export { RedirectToast };
