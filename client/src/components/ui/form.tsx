// src/components/ui/form.tsx
import React from "react";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export const Form = ({ children, ...props }: FormProps) => (
  <form {...props}>{children}</form>
);

interface CommonProps {
  children: React.ReactNode;
  className?: string;
}

export const FormField = ({ children, className }: CommonProps) => (
  <div className={`space-y-1 ${className ?? ""}`}>{children}</div>
);

export const FormItem = ({ children, className }: CommonProps) => (
  <div className={`space-y-2 ${className ?? ""}`}>{children}</div>
);

export const FormLabel = ({ children, className }: CommonProps) => (
  <label
    className={`block text-sm font-medium text-gray-700 ${className ?? ""}`}
  >
    {children}
  </label>
);

export const FormControl = ({ children, className }: CommonProps) => (
  <div className={className ?? ""}>{children}</div>
);

export const FormMessage = ({
  children,
  className,
}: CommonProps & { children?: React.ReactNode }) => (
  <p className={`text-sm text-red-600 ${className ?? ""}`}>{children}</p>
);
