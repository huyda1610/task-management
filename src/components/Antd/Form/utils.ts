import { PLACEHOLDER_KEY } from "@core/constant";

export const formGetPlaceholder = (placeholder: any, prefix: string): string | undefined => {
  if (typeof placeholder === "string" && placeholder?.includes(PLACEHOLDER_KEY)) {
    return placeholder.replaceAll(PLACEHOLDER_KEY, prefix + " ");
  }

  return placeholder;
};
