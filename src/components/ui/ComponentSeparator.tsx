"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Component separator for spacing between major sections
function ComponentSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex w-full items-center justify-center py-20", className)} {...props}>
      <div className="flex items-center justify-center space-x-4">
        {/* Left line */}
        <div className="to-primary/20 h-0.5 w-24 bg-linear-to-r from-transparent" />

        {/* Center decorative element */}
        <div className="relative flex items-center justify-center">
          {/* Outer circle */}
          <div className="border-primary/20 bg-background flex h-12 w-12 items-center justify-center rounded-full border-2 shadow-lg">
            {/* Inner circles */}
            <div className="bg-primary/10 flex h-6 w-6 items-center justify-center rounded-full">
              <div className="bg-primary/30 h-2 w-2 rounded-full" />
            </div>
          </div>

          {/* Corner dots */}
          <div className="bg-primary/40 absolute -top-1 -left-1 h-1 w-1 rounded-full" />
          <div className="bg-primary/40 absolute -top-1 -right-1 h-1 w-1 rounded-full" />
          <div className="bg-primary/40 absolute -bottom-1 -left-1 h-1 w-1 rounded-full" />
          <div className="bg-primary/40 absolute -right-1 -bottom-1 h-1 w-1 rounded-full" />
        </div>

        {/* Right line */}
        <div className="to-primary/20 h-0.5 w-24 bg-linear-to-l from-transparent" />
      </div>
    </div>
  );
}

export { ComponentSeparator };
