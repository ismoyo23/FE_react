interface ImageProps {
  type: "small" | "medium" | "large" | "custom";
  name: string;
  classname: any;
}

/**
 * Primary UI component for user interaction
 */
export const Image = ({
  type = "small",
  name,
  classname,
  ...props
}: ImageProps) => {
  let css = [];
  switch (type) {
    case "large":
      css.push("w-[260px]", "h-[290px]");
      break;

    case "medium":
      css.push("w-[170px]", "h-[170px]");
      break;

    case "small":
      css.push("w-[120px]", "h-[120px]");
      break;

    case "custom":
      css.push(classname);
      break;

    default:
      break;
  }
  return (
    <img className={css.join(" ")} src={require(`../../assets/img/${name}`)} />
  );
};
