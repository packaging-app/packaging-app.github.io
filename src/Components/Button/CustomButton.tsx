import { type ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  onClick?: () => void;
  isWhite?: boolean;
  href?: string;
}

export function CustomButton({
  children,
  isWhite,
  onClick,
  href,
}: CustomButtonProps) {
  const differentClasses = isWhite
    ? "border-2 bg-white hover:bg-faint"
    : "text-white";

  return (
    <div className="pt-2">
      <a
        href={href}
        className={`md:px-5 px-3 py-2 md:text-md rounded-md shadow-md font-semibold hover:cursor-pointer transition duration-300 w-fit ${differentClasses}`}
        style={
          isWhite
            ? { borderColor: "#2874fc", color: "#2874fc" }
            : { backgroundColor: "#2874fc" }
        }
        onClick={onClick}
      >
        {children}
      </a>
    </div>
  );
}
