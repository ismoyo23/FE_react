import React from "react";
interface ButtonProps {
  type?: "small-primary" | "medium-primary" | "large-primary" | "custom";
  label: any;
  classname: any;
  textColor: any;
  action: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = "small-primary",
  label,
  classname,
  textColor = "white",
  action,
  ...props
}: ButtonProps) => {
  let css = [];
  switch (type) {
    case "large-primary":
      css.push("bg-blue-700 ", "h-[70px]", "w-[170px]", "rounded");
      break;

    case "medium-primary":
      css.push("bg-blue-700 ", "h-[50px]", "w-[150px]", "rounded");
      break;

    case "small-primary":
      css.push("bg-blue-700 ", "h-[40px]", "w-[130px]", "rounded");
      break;

    case "custom":
      css.push(classname);
      break;

    default:
      break;
  }
  return (
    <button type="button" onClick={action} className={css.join(" ")} {...props}>
      <p className={`font-medium font-[16px] text-[${textColor}]`}>{label}</p>
    </button>
  );
};
