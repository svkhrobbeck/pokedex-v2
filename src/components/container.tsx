import { FC } from "react";
import cx from "classnames";

import { IChildren } from "@/helpers/interfaces";

interface ContainerProps extends IChildren {
  type?: "default" | "mini" | "custom" | "fluid";
  className?: string;
}

const Container: FC<ContainerProps> = ({ type = "default", className, children }) => {
  const typeCls =
    type === "default" ? "max-w-[1280px]" : type === "mini" ? "max-w-[1024px]" : type === "custom" ? "" : "max-w-full";

  return <div className={cx("w-full px-3 sm:px-5 mx-auto", typeCls, className)}>{children}</div>;
};

export default Container;
