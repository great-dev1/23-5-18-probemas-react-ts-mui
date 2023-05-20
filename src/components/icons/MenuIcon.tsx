import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const MenuIcon: FC<Props> = (props) => {
  const { className, color, width, height } = props;

  return (
    <svg
      className={clsx("menu-icon", { [className ?? ""]: className })}
      width={width ?? 32}
      height={height ?? 32}
      viewBox="0 0 32 32"
      fill={color ?? "#ffffff"}
    >
      <path
        d="M4.75 9H27.25M4.75 16H27.25M4.75 23H27.25"
        stroke={color ?? "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MenuIcon;
