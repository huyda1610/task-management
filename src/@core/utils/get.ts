const tableId = (page: number, fetch: number, index: number): number => (page - 1) * fetch + index + 1;

const getAvatarTitle = (userName: string): string => {
  const nameParts = userName.split(" ");
  const lastName = nameParts.pop();
  return lastName ? lastName[0] : "";
};

export const get = {
  tableId,
  getAvatarTitle,
};
