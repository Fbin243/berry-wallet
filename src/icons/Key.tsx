import { FC } from "react";

import { IconProps } from "./types";

export const KeyIcon: FC<IconProps> = ({ size = 20, color = "#267578" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0108 14.601C17.4248 14.601 17.7608 14.265 17.7608 13.851V11.999C17.7608 11.585 17.4248 11.249 17.0108 11.249H11.3188C10.9948 10.182 10.0128 9.39802 8.84076 9.39802C7.40676 9.39802 6.23976 10.565 6.23976 11.999C6.23976 13.434 7.40676 14.601 8.84076 14.601C10.0128 14.601 10.9948 13.817 11.3188 12.749H13.4308V13.851C13.4308 14.265 13.7668 14.601 14.1808 14.601C14.5948 14.601 14.9308 14.265 14.9308 13.851V12.749H16.2608V13.851C16.2608 14.265 16.5968 14.601 17.0108 14.601ZM7.66576 1.99902H16.3348C19.7228 1.99902 21.9998 4.37702 21.9998 7.91602V16.083C21.9998 19.622 19.7228 21.999 16.3338 21.999H7.66576C4.27676 21.999 1.99976 19.622 1.99976 16.083V7.91602C1.99976 4.37702 4.27676 1.99902 7.66576 1.99902ZM7.73886 11.9999C7.73886 11.3919 8.23386 10.8979 8.84086 10.8979C9.44786 10.8979 9.94286 11.3919 9.94286 11.9999C9.94286 12.6069 9.44786 13.1009 8.84086 13.1009C8.23386 13.1009 7.73886 12.6069 7.73886 11.9999Z"
        fill={color}
      />
    </svg>
  );
};

export default KeyIcon;
