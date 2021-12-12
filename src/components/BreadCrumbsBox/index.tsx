// Dependencies scoped imports
import React from 'react';
import { Container } from '@mui/material';

// Project scoped imports
import { isLast } from '../../utils/helpers';
import { useBreadCrumbs } from '../../hooks';
import ForwardIcon from '../../assets/icons/Forward.svg';

// Module scoped imports
import {
  StyledRoot,
  StyledBreadcrumbs,
  StyledLink,
  StyledRootTxt,
  StyledTxt,
} from './styles';
import { BreadCrumbsBoxProps } from './types';

/**
 * @description BreadCrumbs wrapper with logic. To extend.
 *
 * API:
 *
 * - [BreadCrumbsBox API](https://github.com/norwegianbegginer/Dekode/tree/master/src/components/BreadCrumbsBox)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const BreadCrumbsBox = ({ sx, classes, ...rootProps }: BreadCrumbsBoxProps) => {
  const breadCrumbs = useBreadCrumbs();

  return (
    <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
      <Container maxWidth="lg">
        <StyledBreadcrumbs separator={<img src={ForwardIcon} alt="" />}>
          <StyledLink to="/">
            <StyledRootTxt variant="h4" variantMapping={{ h4: `p` }}>
              teft
            </StyledRootTxt>
          </StyledLink>
          {breadCrumbs.map((breadCrumb, i, arr) =>
            !isLast(arr.length, i) ? (
              <StyledLink key={breadCrumb.name} to={breadCrumb.path}>
                <StyledTxt
                  color="primary"
                  variant="h4"
                  variantMapping={{ h4: `p` }}
                >
                  {breadCrumb.name}
                </StyledTxt>
              </StyledLink>
            ) : (
              <StyledTxt
                key={breadCrumb.name}
                variant="h4"
                variantMapping={{ h4: `p` }}
              >
                {breadCrumb.name}
              </StyledTxt>
            ),
          )}
        </StyledBreadcrumbs>
      </Container>
    </StyledRoot>
  );
};

export default BreadCrumbsBox;
