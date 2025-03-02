import { Tag } from "antd";
import { TagProps } from "antd/lib";

type B2BTagProps = TagProps & {
  color?: "primary" | TagProps["color"];
  // Add custom props here
};

function AntTag({ ...props }: B2BTagProps) {
  return (
    <Tag
      {...props}
      color={props?.color === "primary" ? "#212b36" : props?.color}
      bordered={false}
      className="m-0 h-[24px] rounded-[6px] px-[6px] text-[12px] font-bold leading-[22px]"
    />
  );
}

export default AntTag;
