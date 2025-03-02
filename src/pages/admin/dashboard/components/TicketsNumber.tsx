import AntCard from "@components/Antd/Card";
import { ShareIcon } from "@components/Svg";
import { cn } from "@core/utils/cn";

import CountUp from "react-countup";

const TicketsNumber = () => {
  const data = [
    {
      label: "Doanh thu",
      value: 3000,
      icon: <ShareIcon.SolarHandMoney className="h-[36px] w-[36px] text-primary" />,
      bgClassName: "from-primary to-primary/0",
    },
    {
      label: "Chi tiêu",
      value: 1500,
      icon: <ShareIcon.SolarCourseDown className="h-[36px] w-[36px] text-error" />,
      bgClassName: "from-error to-error/0",
    },
    {
      label: "Nhân viên",
      value: 300,
      icon: <ShareIcon.SolarUsersGroup className="h-[36px] w-[36px] text-success" />,
      bgClassName: "from-success to-success/0",
    },
    {
      label: "Sản phẩm",
      value: 700,
      icon: <ShareIcon.SolarLayer className="h-[36px] w-[36px] text-warning" />,
      bgClassName: "from-warning to-warning/0",
    },
  ];

  return (
    <section className={cn("grid grid-cols-1 justify-center gap-6 md:grid-cols-2 xl:grid-cols-4")}>
      {data.map((item, index) => (
        <AntCard
          bodyClassName="p-0 relative z-0 flex h-[118px] w-full flex-col justify-between overflow-hidden p-6"
          key={item.label}
          skeletonLoading={{
            height: 118,
            loading: false,
          }}
        >
          <div className="flex items-center justify-between">
            <CountUp
              className="text-3xl font-black"
              start={1}
              end={item.value}
              formattingFn={(value) => {
                if (index === 0 || index === 1) return value.toCurrencyFormat() + "M";
                return value.toString();
              }}
            />
            {item.icon}
          </div>
          <strong className="text-gray">{item.label}</strong>

          <div className="absolute right-[-104px] top-[-44px] z-[-1]">
            <div
              className={cn(
                "h-[160px] w-[160px] rotate-[40deg] rounded-3xl bg-gradient-to-r opacity-[.12]",
                item.bgClassName,
              )}
            ></div>
          </div>
        </AntCard>
      ))}
    </section>
  );
};

export default TicketsNumber;
