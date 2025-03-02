import { cn } from "@core/utils/cn";
import { Button, ButtonProps, Tooltip, TooltipProps } from "antd";

export type B2BButtonProps = Omit<ButtonProps, "type"> & {
  tooltip?: TooltipProps;
  type?: "outline" | ButtonProps["type"];
};

function AntButton({ tooltip, ...props }: B2BButtonProps) {
  return (
    <Tooltip {...tooltip}>
      <Button
        {...props}
        type={props?.type === "outline" ? "default" : props?.type}
        className={cn(
          props?.type === "outline" && "border-primary text-primary transition-all hover:bg-primary-lighter",
          props?.className,
        )}
      />
    </Tooltip>
  );
}

export default AntButton;
