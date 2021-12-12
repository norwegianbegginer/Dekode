import { useLocation } from 'react-router-dom';
import { createArrayFromPath } from '../utils/helpers';

type TBreadcrumbObj = {
  name: string;
  path: string;
};

export const useBreadCrumbs = () => {
  const { pathname } = useLocation();
  const paths = createArrayFromPath(pathname);
  const breadCrumbsArray: TBreadcrumbObj[] = [];

  paths.reduce((acc, crumb) => {
    const name = crumb.replace(`-`, ` `);
    breadCrumbsArray.push({ name, path: `${acc}/${crumb}` });
    // eslint-disable-next-line no-param-reassign
    acc += `/${crumb}`;
    return acc;
  }, ``);

  return breadCrumbsArray;
};
