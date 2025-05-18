import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  // Simplified version that doesn't depend on next-themes
  return (
    <Sonner
      className="toaster group"
      theme="light"
      {...props} />
  );
}

export { Toaster }
