/**
 *
 * @param path Pathname from useLocation hook.
 * @returns Array of pathnames.
 */
export const createArrayFromPath = (path: string) =>
  path.split(`/`).filter(Boolean);

/**
 *
 * @param arrLength Length of array.
 * @param index Current index.
 * @returns
 */
export const isLast = (arrLength: number, index: number) =>
  index === arrLength - 1;
