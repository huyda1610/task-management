import { ReactNode } from "react";

type RenderIfProps = {
  ifTrue: boolean | any;
  children: ReactNode;
};

const ShareRenderIf = ({ ifTrue, children }: RenderIfProps) => {
  return ifTrue ? <>{children}</> : null;
};

export default ShareRenderIf;
