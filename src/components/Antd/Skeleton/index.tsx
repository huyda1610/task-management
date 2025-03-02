import { cn } from "@core/utils/cn";
import { Skeleton, SkeletonProps } from "antd";

type NodeProps = SkeletonProps & {
  height?: string | number;
};

export const AntSkeleton = {
  Node: ({ height, ...props }: NodeProps) => {
    if (props?.loading)
      return (
        <Skeleton.Node
          {...props}
          active
          className={cn("!w-full !rounded-2xl", props?.className)}
          style={{
            height: height ?? 160,
          }}
        >
          <></>
        </Skeleton.Node>
      );
    return props?.children;
  },
};
