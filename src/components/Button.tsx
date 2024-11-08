import { cn } from "../utils/cn";

type ButtonProps = {
    className?: string;
    variant?: "button-white" | "button-dark-border" | "button-dark";
    children: React.ReactNode;
};

export const Button = ({ children, variant, className }: ButtonProps) => {
    return (
        <button className={cn("button", variant, className)}>{children}</button>
    );
};
