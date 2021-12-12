export const createArrayFromPath = (path: string) =>
  path.split(`/`).filter(Boolean);

export const isLast = (arrLength: number, index: number) =>
  index === arrLength - 1;
