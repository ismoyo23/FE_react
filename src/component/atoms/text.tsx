import React from "react";
interface TextProps {
  type: "small" | "medium" | "large";
  label: string;
  styles: any[];
}

/**
 * Primary UI component for user interaction
 */
export const Text = ({
  type = "small",
  label,
  styles,
  ...props
}: TextProps) => {
  let css = styles;
  switch (type) {
    case "large":
      css.push("text-[80px]");
      break;

    case "medium":
      css.push("text-[20px]");
      break;

    case "small":
      css.push("text-[10px]");
      break;

    default:
      break;
  }
  return <p className={css.join(" ")}>{label}</p>;
};
