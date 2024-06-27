import type {Props} from "./types";

export function X({className, width = 24, height = 24}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
      viewBox="0 0 24 24"
    >
      <path d="M18 6L6 18"></path>
      <path d="M6 6L18 18"></path>
    </svg>
  );
}
