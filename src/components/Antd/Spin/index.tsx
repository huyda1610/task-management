import { Spin } from "antd";
import React from "react";

type B2BSpinProps = {
  spinning?: boolean;
  className?: string;
  children?: React.ReactNode;
};

function AntSpin({ className, spinning, children }: B2BSpinProps) {
  return (
    <Spin spinning={spinning} className={className}>
      {children}
    </Spin>
  );
}

export default React.memo(AntSpin);
