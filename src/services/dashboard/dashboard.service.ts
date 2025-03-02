import { generate } from "@core/utils/generate";
import { empByYearData } from "./data/empByYear";
import { revenueByYearData } from "./data/revenueByYear";
import { RevenueByYearInput } from "./models/input.model";
import { EmpByYearDto, RevenueByYearDto } from "./models/output.model";

async function getRevenueByYear(params: RevenueByYearInput): Promise<RevenueByYearDto[]> {
  await generate.delay(500);

  return revenueByYearData.filter((item) => item.year >= params.startYear && item.year <= params.endYear);
}

async function getEmpByMonth(): Promise<EmpByYearDto[]> {
  await generate.delay(500);

  return empByYearData;
}

export const dashboardService = {
  getRevenueByYear,
  getEmpByMonth,
};
