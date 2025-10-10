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
                               href
}: CustomButtonProps) {
  const differentClasses = isWhite
    ? "border-2 border-main-blue text-main-blue bg-white hover:bg-faint"
    : "bg-main-blue hover:bg-blue-700 text-white";

  return (
    <a
        href={href}
        className={`md:px-5 px-3 py-2 md:text-md rounded-md shadow-md font-semibold hover:cursor-pointer transition duration-300 w-fit ${differentClasses}`}
        onClick={onClick}
    >
      {children}
    </a>
  );
}
