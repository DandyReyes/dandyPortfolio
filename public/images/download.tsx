import React from "react";
export default function DownloadIcon({
  fillColor = "#3333",
  strokeColor,
  size = 14,
}: {
  fillColor?: string;
  strokeColor: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 12.5C12.5 12.7652 12.3946 13.0196 12.2071 13.2071C12.0196 13.3946 11.7652 13.5 11.5 13.5H2.5C2.23478 13.5 1.98043 13.3946 1.79289 13.2071C1.60536 13.0196 1.5 12.7652 1.5 12.5V1.5C1.5 1.23478 1.60536 0.98043 1.79289 0.792893C1.98043 0.605357 2.23478 0.5 2.5 0.5H9L12.5 4V12.5Z"
        stroke={strokeColor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 8L7 10L5 8"
        stroke={strokeColor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7 10V4.5"
        stroke={strokeColor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
