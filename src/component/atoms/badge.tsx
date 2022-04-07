import React from "react";
interface BadgeProps {
  type?: "primary" | "secondary" | "danger" | "info";
  label: any;
}

/**
 * Primary UI component for user interaction
 */
export const Badge = ({ type = "primary", label, ...props }: BadgeProps) => {
  let css = [];
  switch (type) {
    case "primary":
      css.push("bg-sky-500/100", "h-[23px]", "w-[120px]", "rounded");
      break;

    case "secondary":
      css.push("bg-[#d6d6c2]", "h-[23px]", "w-[140px]", "rounded");
      break;

    case "danger":
      css.push("bg-[red]", "h-[23px]", "w-[140px]", "rounded");
      break;

    case "info":
      css.push("bg-[#00ffff]", "h-[23px]", "w-[140px]", "rounded");
      break;

    default:
      break;
  }
  return (
    <div className={css.join(" ")} {...props}>
      <p className={` text-[white] text-center font-normal`}>{label}</p>
    </div>
  );
};
