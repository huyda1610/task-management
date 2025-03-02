import { DEFAULT_DATE_FORMAT } from "@core/constant";
import { regex } from "@core/utils/regex";
import dayjs from "dayjs";

export {}; // This makes the file a module

declare global {
  interface String {
    toDateFormat(format?: string): string;
    removeAccents(): string;
  }
}

String.prototype.toDateFormat = function (this: string, format: string = DEFAULT_DATE_FORMAT): string {
  if (!this) return "";

  return dayjs(this).local().format(format);
};

String.prototype.removeAccents = function (this: string): string {
  if (!this) return "";

  return this.normalize("NFD") // Decompose characters into base + diacritics
    .replace(regex.accent, "") // Remove all diacritic marks
    .normalize("NFC");
};
