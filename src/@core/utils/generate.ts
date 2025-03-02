const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const code = () => {
  const prefix = "T-";

  let digits = "";
  for (let i = 0; i < 8; i++) {
    const randomDigit = Math.floor(Math.random() * 10); // Sinh số ngẫu nhiên từ 0-9
    digits += randomDigit;
  }

  const randomCode = prefix + digits;

  return randomCode;
};

export const generate = {
  delay,
  code,
};
