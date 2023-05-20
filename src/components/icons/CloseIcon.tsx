import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const CloseIcon: FC<Props> = (props) => {
  const { className, color, width, height } = props;

  return (
    <svg
      className={clsx("close-icon", { [className ?? ""]: className })}
      width={width ?? 18}
      height={height ?? 18}
      viewBox="0 0 18 18"
      fill={color ?? "#ffffff"}
    >
      <line
        x1="1.06072"
        y1="1.00012"
        x2="16.9706"
        y2="16.91"
        stroke={color ?? "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="1.00006"
        y1="16.9102"
        x2="16.91"
        y2="1.00026"
        stroke={color ?? "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CloseIcon;
