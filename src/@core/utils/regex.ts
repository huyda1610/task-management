const email = /^[a-zA-Z0-9.]*$/;
const accent = /[\u0300-\u036f]/g;
const phoneNumber = /^(?:\+?\d{1,3}[-.\s]?)?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
const url = /^https?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
const number = /^\d*$/;
const fptEmail = /^[a-zA-Z0-9.]+@(fpt\.com)$/;
const guid = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

export const regex = {
  email,
  url,
  phoneNumber,
  accent,
  number,
  fptEmail,
  guid,
};
