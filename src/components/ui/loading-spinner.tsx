import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = { sm: "w-5 h-5", md: "w-8 h-8", lg: "w-12 h-12" };

const LoadingSpinner = ({ className, size = "md" }: Props) => (
  <div className={cn("flex items-center justify-center", className)}>
    <div className={cn("border-2 border-muted border-t-primary rounded-full animate-spin", sizeMap[size])} />
  </div>
);

export default LoadingSpinner;
