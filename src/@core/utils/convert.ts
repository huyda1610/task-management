import dayjs, { Dayjs } from "dayjs";
import { validation } from "./validation";

function stringTrim(value: any): any {
  if (typeof value === "string") return value.trim();

  return value;
}

function parseDate(date: string | number | dayjs.Dayjs | Date | null | undefined): string | null {
  if (!date) return null;

  // If it's already a Dayjs object, return it
  if (dayjs.isDayjs(date)) {
    return date.toISOString();
  }

  // For other types, create new dayjs instance
  const parsedDate = dayjs(date);
  return parsedDate.isValid() ? parsedDate.toISOString() : null;
}

function setDate(date: string | null | undefined): Dayjs | null {
  if (!date) return null;

  return dayjs(date);
}

type GroupByPropertyType = {
  key: string | number;
  options: any;
};

const groupByProperty = (array: any[], property: string): GroupByPropertyType[] => {
  const arrayTrim = array.map((item) => ({
    ...item,
    [property]: typeof item[property] === "string" ? item[property]?.trim() : item[property],
  }));
  return Object.entries(
    arrayTrim.reduce((memo: any[], x) => {
      // Group initialization
      if (!memo[x[property]]) {
        memo[x[property]] = [];
      }
      // Grouping
      memo[x[property]].push(x);
      return memo;
    }, {}),
  ).map(([key, options]) => ({ key, options }));
};

type ObjectWithStrings = {
  [key: string]: string | ObjectWithStrings | any[];
};
function trimStringsInObject<T extends ObjectWithStrings>(obj: T): T {
  const trimmed = { ...obj };

  for (const key in trimmed) {
    const value = trimmed[key];

    if (typeof value === "string") {
      // Trim string values
      trimmed[key] = value.trim() as T[Extract<keyof T, string>];
    } else if (dayjs.isDayjs(value)) {
      trimmed[key] = value.toISOString() as T[Extract<keyof T, string>];
    } else if (Array.isArray(value)) {
      // Handle arrays recursively
      trimmed[key] = value.map((item) => {
        if (typeof item === "string") return item.trim();
        if (validation.isObject(item)) return trimStringsInObject(item);
        return item;
      }) as T[Extract<keyof T, string>];
    } else if (validation.isObject(value)) {
      // Handle nested objects recursively
      trimmed[key] = trimStringsInObject(value) as T[Extract<keyof T, string>];
    }
  }

  return trimmed;
}

export const convert = {
  stringTrim,
  parseDate,
  groupByProperty,
  trimStringsInObject,
  setDate,
};
