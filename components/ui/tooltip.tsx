'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

// --------------- Context ---------------
interface TooltipContextType {
  open: boolean;
  setOpen: (v: boolean) => void;
  content: React.ReactNode;
}
const TooltipContext = React.createContext<TooltipContextType>({
  open: false,
  setOpen: () => {},
  content: null,
});

// --------------- TooltipProvider ---------------
function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

// --------------- Tooltip (Root) ---------------
function Tooltip({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState<React.ReactNode>(null);
  return (
    <TooltipContext.Provider value={{ open, setOpen, content }}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && (child as React.ReactElement<{ _setContent?: (c: React.ReactNode) => void }>).props._setContent !== undefined) {
          return React.cloneElement(child as React.ReactElement<{ _setContent: (c: React.ReactNode) => void }>, { _setContent: setContent });
        }
        return child;
      })}
    </TooltipContext.Provider>
  );
}

// --------------- TooltipTrigger ---------------
const TooltipTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ children, asChild, ...props }, ref) => {
  const { setOpen } = React.useContext(TooltipContext);

  const handlers = {
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false),
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<typeof handlers>, handlers);
  }

  return (
    <button ref={ref} type="button" {...handlers} {...props}>
      {children}
    </button>
  );
});
TooltipTrigger.displayName = 'TooltipTrigger';

// --------------- TooltipContent ---------------
const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { side?: 'top' | 'bottom' | 'left' | 'right' }
>(({ className, children, side = 'top', ...props }, ref) => {
  const { open } = React.useContext(TooltipContext);
  if (!open) return null;
  return (
    <div
      ref={ref}
      role="tooltip"
      className={cn(
        'absolute z-50 overflow-hidden rounded-md border border-border bg-popover px-3 py-1.5 text-xs text-popover-foreground shadow-md',
        side === 'top' && '-top-9 left-1/2 -translate-x-1/2',
        side === 'bottom' && 'top-full left-1/2 -translate-x-1/2 mt-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
TooltipContent.displayName = 'TooltipContent';

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
