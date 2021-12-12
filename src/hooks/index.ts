import { useLocation } from 'react-router-dom';
import { createArrayFromPath } from '../utils/helpers';
import { TBreadcrumbObj } from './types';

export const useBreadCrumbs = () => {
  const { pathname } = useLocation();
  const paths = createArrayFromPath(pathname);
  const breadCrumbsArray: TBreadcrumbObj[] = [];

  paths.reduce((acc, crumb) => {
    const name = crumb.replace(`-`, ` `);
    // eslint-disable-next-line no-param-reassign
    acc += `/${crumb}`;
    breadCrumbsArray.push({ name, path: acc });
    return acc;
  }, ``);

  return breadCrumbsArray;
};
