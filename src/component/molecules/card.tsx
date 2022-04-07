import React, { useEffect } from "react";
import "../../index.css";
import { Badge } from "../atoms/badge";
import { Text } from "../atoms/text";
import { Button } from "../atoms/button";

interface CardProps {
  type?: "primary" | "default";
  description: string;
  name: string;
  createdAt: string;
}
export let Card = ({
  type = "default",
  description,
  name,
  createdAt,
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
        <div className="mt-[10px]">
          <div className="h-[70px]">
            <Text
              label="Pemain 1"
              type="medium"
              styles={[
                "text-gray-700",
                "text-base",
                "font-semibold",
                textColor,
              ]}
            />
            <Text
              label={"1,2,4,3"}
              type="small"
              styles={["text-gray-700", "text-base", textColor]}
            />
          </div>

          <div className="h-[70px]">
            <Text
              label="Pemain 2"
              type="medium"
              styles={[
                "text-gray-700",
                "text-base",
                "font-semibold",
                textColor,
              ]}
            />
            <Text
              label={"1,2,4,3"}
              type="small"
              styles={["text-gray-700", "text-base", "text-[gray]"]}
            />
          </div>

          <div className="h-[70px]">
            <Text
              label="Pemain 3"
              type="medium"
              styles={[
                "text-gray-700",
                "text-base",
                "font-semibold",
                textColor,
              ]}
            />
            <Text
              label={"1,2,4,3"}
              type="small"
              styles={["text-gray-700", "text-base", "text-[gray]"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
