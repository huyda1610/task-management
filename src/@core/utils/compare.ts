const string = (str1: string, str2: string, mode?: "equal" | "include") => {
  switch (mode) {
    case "include":
      return str1?.trim().toLowerCase().removeAccents().indexOf(str2?.trim().toLowerCase().removeAccents()) !== -1;
    case "equal":
    default:
      return str1?.trim().toLowerCase().removeAccents() === str2?.trim().toLowerCase().removeAccents();
  }
};

export const compare = {
  string,
};
