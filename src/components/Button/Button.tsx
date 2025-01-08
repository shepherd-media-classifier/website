import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode | (string | JSX.Element)[];
  variant?: "accent" | "default" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "default" }) => {
  const variantClasses: Record<string, string> = {
    default: "button-default",
    accent: "button-accent",
    secondary: "button-secondary",
  };

  const className = variantClasses[variant] || variantClasses.default;

  return <button className={className}>{children}</button>;
};

export default Button;
