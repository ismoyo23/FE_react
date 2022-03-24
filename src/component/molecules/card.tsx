import "../../index.css";
import { Badge } from "../atoms/badge";
import { Text } from "../atoms/text";
import { Button } from "../atoms/button";
interface CardProps {
  type?: "primary" | "default";
  description: string;
  name: string;
  createdAt: string;
  detailTask: () => void;
  removeTask: () => void;
}
export let Card = ({
  type = "default",
  description,
  name,
  createdAt,
  detailTask,
  removeTask,
}: CardProps) => {
  let textColor = type == "primary" ? "text-[#FFFFFF]" : "text-[black]";
  let css = [];
  switch (type) {
    case "default":
      css.push(
        "mb-[10px]",
        "bg-[white]",
        "max-w-sm",
        " w-[270px]",
        "rounded",
        "overflow-hidden",
        "shadow-lg"
      );
      break;
    case "primary":
      css.push(
        "mb-[10px]",
        "bg-blue-500",
        "max-w-sm",
        " w-[270px]",
        "rounded",
        "overflow-hidden",
        "shadow-lg"
      );
      break;

    default:
      break;
  }

  return (
    <div className={css.join(" ")}>
      <div className="px-2 py-4">
        <Text
          label="Description:"
          type="medium"
          styles={["text-gray-700", "text-base", "font-semibold", textColor]}
        />
        <div className="mt-[10px]">
          <div className="h-[90px]">
            <Text
              label={description}
              type="small"
              styles={["text-gray-700", "text-base", textColor]}
            />
          </div>
          <Text
            label={createdAt}
            type="small"
            styles={["text-gray-700", "text-base", "text-[gray]"]}
          />
        </div>
      </div>
      <div className="px-6 pt-1 pb-2 mt-[10px] justify-between flex w-[270px]">
        <Badge type="primary" label={name} />

        <Button
          action={removeTask}
          type="custom"
          classname="bg-[red] h-[25px] w-[30px] rounded"
          textColor="white"
          label={<i className="fa fa-trash-o" aria-hidden="true"></i>}
        />

        <Button
          action={detailTask}
          type="custom"
          classname="bg-[#00ffff] h-[25px] w-[30px] rounded"
          textColor="white"
          label={<i className="fa fa-pencil-square-o" aria-hidden="true"></i>}
        />

        <Button
          action={() => alert("ok")}
          type="custom"
          classname="bg-[yellow] h-[25px] w-[30px] rounded"
          textColor="white"
          label={<i className="fa fa-check-square" aria-hidden="true"></i>}
        />
      </div>
    </div>
  );
};
