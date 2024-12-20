import React from "react";
type IconProps = {
  width?: number;
  height?: number;
};
function PlayIcon({ width, height }: IconProps) {
  return (
    <div>
      <svg
        width={width ? width : "10"}
        height={height ? height : "12"}
        viewBox="0 0 10 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.57084 5.14251C9.21818 5.53091 9.21818 6.46909 8.57084 6.85749L1.5145 11.0913C0.847972 11.4912 4.72364e-07 11.0111 5.0634e-07 10.2338L8.76472e-07 1.76619C9.10448e-07 0.988895 0.847972 0.508782 1.5145 0.908697L8.57084 5.14251Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export default PlayIcon;
