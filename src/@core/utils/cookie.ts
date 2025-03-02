function set(name: string, value: string, days?: number) {
  let expires = "";
  if (days !== undefined) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  } else {
    // If dayjs is empty, the cookie will be stored indefinitely
    expires = "";
  }
  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/`;
}

function get(name: string): string | null {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

function remove(name: string) {
  // Setting the expiration date to the past will delete the cookie
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

export const cookie = {
  set,
  get,
  remove,
};
