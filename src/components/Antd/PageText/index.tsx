import React from "react";

type ShareTextProps = {
  children?: React.ReactNode;
  currency?: boolean;
  percent?: boolean;
  className?: string;
};

const SharePageText = ({ children, currency, percent, className }: ShareTextProps) => {
  const renderChildren = () => {
    if (typeof children === "string" && currency) {
      return Number(children).toCurrencyFormat() + " VND";
    }

    if (typeof children === "number" && currency) {
      return children.toCurrencyFormat() + " VND";
    }

    return children;
  };

  if (!children) {
    return <span className="italic text-gray">---N/A---</span>;
  }

  return (
    <span className={className}>
      {renderChildren()}
      {percent && "%"}
    </span>
  );
};

export default SharePageText;
