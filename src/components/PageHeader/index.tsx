import { LeftOutlined } from "@ant-design/icons";
import AntBreadcrumb from "@components/Antd/Breadcrumb";
import { AntBreadcrumbProps } from "@components/Antd/Breadcrumb/type";
import ShareRenderIf from "@components/RenderIf";
import useTitle from "@hooks/useTitle";
import React from "react";
import { Link } from "react-router-dom";

export type ShareHeaderProps = {
  title: string;
  breadcrumb?: AntBreadcrumbProps;
  hrefBack?: string;
  extra?: React.ReactNode;
};

function ShareHeader({ title, breadcrumb, hrefBack = "", extra }: ShareHeaderProps) {
  useTitle(title);

  return (
    <article className="mb-10 flex flex-row items-center justify-between">
      <section className="flex flex-col gap-2">
        <ShareRenderIf ifTrue={hrefBack}>
          <Link
            to={hrefBack}
            type="text"
            style={{ margin: "0 0 12px 0", padding: "6px 0px 8px", border: "none" }}
            className="text-textPrimary flex w-[fit-content] flex-row items-center gap-2 transition-all duration-200 ease-in-out"
          >
            <LeftOutlined style={{ width: "16px", height: "16px" }} />
            <span className="text-[14px] font-bold">Quay lại</span>
          </Link>
        </ShareRenderIf>
        <h4 className="text-2xl font-bold text-black">{title}</h4>

        {breadcrumb && (
          <AntBreadcrumb
            items={breadcrumb.items}
            separator={
              <div className="m-0 flex h-full w-full items-center justify-center p-0">
                <span className="m-0 flex h-1 w-1 rounded-[50%] bg-[#919EAB] p-0"></span>
              </div>
            }
          />
        )}
      </section>
      {extra}
    </article>
  );
}

export default ShareHeader;
