import type { SVGProps } from "react";

export function SolarMenuDotsSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m14 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></path>
      <path fill="currentColor" d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0" opacity={0.5}></path>
    </svg>
  );
}
