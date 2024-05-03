import { FC } from "react";
import { IconProps } from "./types";

export const PaperPlusIcon: FC<IconProps> = ({ size = 20, color = "#267578" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5818 11.73H12.3955C12.8253 11.73 13.1817 11.4 13.1817 10.99C13.1817 10.57 12.8253 10.24 12.3955 10.24H10.5818V8.50999C10.5818 8.09999 10.2359 7.76999 9.80605 7.76999C9.37623 7.76999 9.0198 8.09999 9.0198 8.50999V10.24H7.21665C6.78683 10.24 6.4304 10.57 6.4304 10.99C6.4304 11.4 6.78683 11.73 7.21665 11.73H9.0198V13.46C9.0198 13.87 9.37623 14.2 9.80605 14.2C10.2359 14.2 10.5818 13.87 10.5818 13.46V11.73ZM17.7697 7.02561C18.0161 7.02292 18.2845 7.02 18.5282 7.02C18.7903 7.02 19 7.22 19 7.47V15.51C19 17.99 16.8928 20 14.2825 20H5.94817C3.22248 20 1 17.89 1 15.29V4.51C1 2.03 3.11765 0 5.72801 0H11.3261C11.5987 0 11.8084 0.21 11.8084 0.46V3.68C11.8084 5.51 13.3914 7.01 15.3098 7.02C15.758 7.02 16.153 7.02316 16.4987 7.02593C16.7677 7.02809 17.0068 7.03 17.2178 7.03C17.3671 7.03 17.5605 7.02789 17.7697 7.02561ZM18.0576 5.56619C17.1959 5.56919 16.1801 5.56619 15.4494 5.55919C14.2899 5.55919 13.3349 4.64819 13.3349 3.54219V0.906192C13.3349 0.475192 13.8832 0.261192 14.1966 0.572192C14.7637 1.13465 15.5429 1.90771 16.3187 2.67734C17.0931 3.4457 17.8642 4.21064 18.4172 4.75919C18.7233 5.06219 18.499 5.56519 18.0576 5.56619Z"
        fill={color}
      />
    </svg>
  );
};

export default PaperPlusIcon;
