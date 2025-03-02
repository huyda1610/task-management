"use client";

import EmptySvg from "@components/Svg/custome/empty";
import { Empty } from "antd";
import { SVGProps } from "react";

const Table = (props: SVGProps<SVGSVGElement>) => {
  return (
    <Empty
      className={`m-0 flex h-[400px] w-full flex-col items-center justify-center gap-2 rounded-[16px] bg-[#919eab0a]`}
      image={<EmptySvg {...props} className="h-[160px] w-[160px]" />}
      description={<span className="text-[18px] font-bold text-gray-400">Không có dữ liệu!</span>}
    ></Empty>
  );
};

export const AntEmpty = {
  Table: (props: SVGProps<SVGSVGElement>) => <Table {...props} />,
};
