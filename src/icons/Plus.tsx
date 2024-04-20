import { FC } from "react";
import { IconProps } from "./types";

const PlusIcon: FC<IconProps> = ({ size = 20, color = "#267578" }) => {
  return (
    <svg width={size} height={(size * 22) / 21} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.63563 0.583439H15.3544C18.896 0.583439 20.9169 2.58344 20.9169 6.13552V15.8647C20.9169 19.3959 18.9065 21.4168 15.3648 21.4168H5.63563C2.08354 21.4168 0.0835419 19.3959 0.0835419 15.8647V6.13552C0.0835419 2.58344 2.08354 0.583439 5.63563 0.583439ZM11.3544 11.8647H14.3127C14.7919 11.8543 15.1773 11.4689 15.1773 10.9897C15.1773 10.5105 14.7919 10.1251 14.3127 10.1251H11.3544V7.18761C11.3544 6.70844 10.969 6.32302 10.4898 6.32302C10.0106 6.32302 9.62521 6.70844 9.62521 7.18761V10.1251H6.67729C6.44813 10.1251 6.22938 10.2189 6.06271 10.3751C5.90646 10.5418 5.81271 10.7595 5.81271 10.9897C5.81271 11.4689 6.19813 11.8543 6.67729 11.8647H9.62521V14.8126C9.62521 15.2918 10.0106 15.6772 10.4898 15.6772C10.969 15.6772 11.3544 15.2918 11.3544 14.8126V11.8647Z"
        fill={color}
      />
    </svg>
  );
};

export default PlusIcon;
