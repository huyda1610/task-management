import { Rule } from "antd/lib/form";
import { regex } from "../regex";

const required = (message?: string, required: boolean = true): Rule => {
  return {
    required: required,
    message: message ?? "Dữ liệu không được để trống!",
  };
};

const requiredWithWhitespace = (message?: string): Rule => {
  return {
    required: true,
    message: message ?? "Dữ liệu không được để trống!",
    whitespace: true,
  };
};

const max = (max: number = 0, message?: string): Rule => {
  return {
    message: message ?? `Dữ liệu không được lớn hơn ${max}!`,
    validator: (_, value) => {
      if (value && value > max) {
        return Promise.reject(new Error(message ?? `Dữ liệu không được lớn hơn ${max}!`));
      }

      return Promise.resolve();
    },
  };
};

const min = (min: number = 0, message?: string): Rule => {
  return {
    message: message ?? `Dữ liệu không được nhỏ hơn ${min}!`,
    validator: (_, value) => {
      if (value && value < min) {
        return Promise.reject(new Error(message ?? `Dữ liệu không được nhỏ hơn ${min}!`));
      }

      return Promise.resolve();
    },
  };
};

const maxLength = (max: number = 0, message?: string): Rule => {
  return {
    max: max,
    message: message ?? `Dữ liệu không được dài quá ${max} ký tự!`,
  };
};

const minLength = (min: number = 1, message?: string): Rule => {
  return {
    min: min,
    message: message ?? `Dữ liệu không được ngắn hơn ${min} ký tự!`,
  };
};

const numberOnly = (message?: string): Rule => {
  return {
    pattern: regex.number,
    message: message ?? "Dữ liệu phải là số!",
  };
};

const phoneNumber = (message?: string): Rule => {
  return {
    pattern: regex.phoneNumber, // 10-13 số, có thể nhập tuỳ ý
    message: message ?? "Số điện thoại phải từ 10-13 số!",
  };
};

const email = (message?: string): Rule => {
  return {
    type: "email",
    message: message ?? "Email không hợp lệ!",
  };
};

const fptEmail = (message?: string): Rule => {
  return {
    type: "email",
    message: message ?? "Email không thuộc FPT group!",
    validator: (_, value) => {
      if (Array.isArray(value) && value.length === 0) {
        return Promise.resolve();
      }

      if (!regex.fptEmail.test(value)) {
        return Promise.reject();
      }

      return Promise.resolve();
    },
  };
};

const url = (message?: string): Rule => {
  return {
    pattern: regex.url,
    message: message ?? "Đường dẫn không hợp lệ!",
  };
};

export const rule = {
  required,
  maxLength,
  minLength,
  requiredWithWhitespace,
  numberOnly,
  phoneNumber,
  email,
  fptEmail,
  url,
  max,
  min,
};
