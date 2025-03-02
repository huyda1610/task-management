type TableSpinProps = {
  className?: string;
};

function TableSpin({ className }: TableSpinProps) {
  return (
    <div className={`freeze-ui ${className}`} data-text=" " style={{ position: "absolute" }}>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  );
}

export default TableSpin;
