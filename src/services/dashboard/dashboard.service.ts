import { generate } from "@core/utils/generate";
import { revenueByYearData } from "./data/revenueByYear";
import { RevenueByYearInput } from "./models/input.model";
import { RevenueByYearDto } from "./models/output.model";

async function getRevenueByYear(params: RevenueByYearInput): Promise<RevenueByYearDto[]> {
  await generate.delay(500);

  return revenueByYearData.filter((item) => item.year >= params.startYear && item.year <= params.endYear);
}
export const dashboardService = {
  getRevenueByYear,
};
