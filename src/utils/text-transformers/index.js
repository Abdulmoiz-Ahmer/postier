export const transformToUppercase = function (string) {
  return string.toUpperCase;
};

export const transformToLowercase = function (string) {
  return string.toLowerCase;
};

export const transformToCapitalized = function (string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};
