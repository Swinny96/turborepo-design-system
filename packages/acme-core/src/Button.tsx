import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className="btn btn-primary">{props.children}</button>;
}

Button.displayName = "Button";
