import { ReactNode, CSSProperties } from "react";
import { useInView } from "@/hooks/use-in-view";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

const FadeIn = ({ children, delay = 0, className = "", style }: FadeInProps) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
