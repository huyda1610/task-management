export {}; // This makes the file a module

declare global {
  interface Array<T> {
    removeDuplicate(): T[];
    removeDuplicateByKey(duplicateKey: string): T[];
  }
}

Array.prototype.removeDuplicate = function <T>(): T[] {
  return this.filter((item, index) => this.indexOf(item) === index);
};

Array.prototype.removeDuplicateByKey = function <T, K extends keyof T>(duplicateKey: K): T[] {
  return this.filter((option, index, self) => {
    return index === self.findIndex((t) => t[duplicateKey] === option[duplicateKey]);
  });
};

export {};
