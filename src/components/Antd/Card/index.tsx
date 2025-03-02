import ShareRenderIf from "@components/RenderIf";
import { cn } from "@core/utils/cn";
import { Card, CardProps } from "antd";
import React from "react";
import { AntSkeleton } from "../Skeleton";
import B2BSpin from "../Spin";

type SkeletonLoading = {
  loading?: boolean;
  height?: number | string | "table";
};

type B2BCardProps = CardProps & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  extra?: React.ReactNode;
  children?: React.ReactNode;
  headerClassName?: string;
  bodyClassName?: string;
  formCard?: boolean;
  skeletonLoading?: SkeletonLoading;
  chartCard?: boolean;
};

function AntCard({
  title,
  extra,
  children,
  description,
  headerClassName,
  bodyClassName,
  formCard,
  skeletonLoading,
  chartCard,
  ...props
}: B2BCardProps) {
  return (
    <div className={props.className}>
      <AntSkeleton.Node
        loading={skeletonLoading?.loading ?? false}
        height={skeletonLoading?.height === "table" ? 600 : skeletonLoading?.height}
      >
        <B2BSpin spinning={props?.loading ?? false}>
          <Card
            {...props}
            loading={false}
            variant="borderless"
            className={cn("rounded-lg !shadow-card")}
            styles={{
              header: {
                padding: 0,
              },
              body: {
                padding: 0,
              },
              ...props.styles,
            }}
          >
            <ShareRenderIf ifTrue={title || extra}>
              <section className={cn("flex flex-row items-center justify-between px-5 pt-4", headerClassName)}>
                <div>
                  <strong className="text-lg leading-none">{title}</strong>
                  <span className="block text-sm text-gray">{description}</span>
                </div>
                {extra}
              </section>
            </ShareRenderIf>

            <ShareRenderIf ifTrue={children}>
              <section className={cn("px-5 py-4", formCard && "pb-1", chartCard && "pt-0", bodyClassName)}>
                {children}
              </section>
            </ShareRenderIf>
          </Card>
        </B2BSpin>
      </AntSkeleton.Node>
    </div>
  );
}

export default AntCard;
