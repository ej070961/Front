type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const TickIcon = ({ width, height, color }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 13 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.0965 0.390037L3.9365 7.30004L2.0365 5.27004C1.6865 4.94004 1.1365 4.92004 0.736504 5.20004C0.346504 5.49004 0.236503 6.00004 0.476503 6.41004L2.7265 10.07C2.9465 10.41 3.3265 10.62 3.7565 10.62C4.1665 10.62 4.5565 10.41 4.7765 10.07C5.1365 9.60004 12.0065 1.41004 12.0065 1.41004C12.9065 0.490037 11.8165 -0.319963 11.0965 0.380037V0.390037Z"
      fill={color}
    />
  </svg>
);

export default TickIcon;
