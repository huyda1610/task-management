import { SVGProps } from "react";
import { SolarAddCircleSvg } from "./solar/add-circle";
import { SolarAltArrowSvg } from "./solar/alt-arrow";
import { SolarAltArrowDownLineSvg } from "./solar/alt-arrow-down-line";
import { SolarBook2Svg } from "./solar/book-2";
import { SolarChartSvg } from "./solar/chart";
import { SolarChart2Svg } from "./solar/chart-2";
import { SolarCheckCircleSvg } from "./solar/check-circle";
import { SolarClipboardListSvg } from "./solar/clipboard-list";
import { SolarCloseCircleSvg } from "./solar/close-circle";
import { SolarCourseDownSvg } from "./solar/course-down";
import { SolarHandMoneySvg } from "./solar/hand-money";
import { SolarLayersSvg } from "./solar/layer";
import { SolarMenuDotsSvg } from "./solar/menu-dot";
import { SolarPenSvg } from "./solar/pen";
import { SolarPenNewRoundSvg } from "./solar/pen-new-round";
import { SolarTrashBinTrashSvg } from "./solar/trash-bin";
import { SolarUsersGroupRoundedSvg } from "./solar/user-group";

export const ShareIcon = {
  SolarMenuDots: (props: SVGProps<SVGSVGElement>) => <SolarMenuDotsSvg {...props} />,
  SolarAltArrow: (props: SVGProps<SVGSVGElement>) => <SolarAltArrowSvg {...props} />,
  SolarAltArrowDownLine: (props: SVGProps<SVGSVGElement>) => <SolarAltArrowDownLineSvg {...props} />,
  SolarChart2: (props: SVGProps<SVGSVGElement>) => <SolarChart2Svg {...props} />,
  SolarBook2: (props: SVGProps<SVGSVGElement>) => <SolarBook2Svg {...props} />,
  SolarClipboardList: (props: SVGProps<SVGSVGElement>) => <SolarClipboardListSvg {...props} />,
  SolarTrashBinTrash: (props: SVGProps<SVGSVGElement>) => <SolarTrashBinTrashSvg {...props} />,
  SolarCheckCircle: (props: SVGProps<SVGSVGElement>) => <SolarCheckCircleSvg {...props} />,
  SolarCloseCircle: (props: SVGProps<SVGSVGElement>) => <SolarCloseCircleSvg {...props} />,
  SolarAddCircle: (props: SVGProps<SVGSVGElement>) => <SolarAddCircleSvg {...props} />,
  SolarPen: (props: SVGProps<SVGSVGElement>) => <SolarPenSvg {...props} />,
  SolarPenNewRound: (props: SVGProps<SVGSVGElement>) => <SolarPenNewRoundSvg {...props} />,
  SolarChart: (props: SVGProps<SVGSVGElement>) => <SolarChartSvg {...props} />,
  SolarLayer: (props: SVGProps<SVGSVGElement>) => <SolarLayersSvg {...props} />,
  SolarUsersGroup: (props: SVGProps<SVGSVGElement>) => <SolarUsersGroupRoundedSvg {...props} />,
  SolarHandMoney: (props: SVGProps<SVGSVGElement>) => <SolarHandMoneySvg {...props} />,
  SolarCourseDown: (props: SVGProps<SVGSVGElement>) => <SolarCourseDownSvg {...props} />,
};
