// Dependencies scoped imports
import React from 'react';
import { Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

// Project scoped imports
import Logo from '../Logo';
import SocialMedia from '../SocialMedia';
import LanguageSelector from '../LanguageSelector';

// Module scoped imports
import { useTrans } from './trans';
import {
  StyledLinkBoxesWrapper,
  StyledLeftLinksWrapper,
  StyledRightLinksWrapper,
  StyledLinkTxt,
  StyledRoot,
  StyledTxt,
  StyledMainWrapper,
  StyledWrapper,
  StyledLinksWrapper,
} from './styles';
import { FooterProps } from './types';
import { company, websideMapLeft, websideMapRight } from './constants';

/**
 * @description Footer component with company details, webside map and socialMedia links.
 *
 * API:
 *
 * - [Footer API](https://github.com/norwegianbegginer/Dekode/tree/master/src/components/Footer)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const Footer = ({ sx, classes, ...rootProps }: FooterProps) => {
  const translated = useTrans();

  return (
    <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
      <Container maxWidth="lg">
        <Logo />
        <StyledMainWrapper>
          <StyledWrapper>
            <Box>
              <Box mb={8}>
                <StyledTxt variant="body2">{company.name}</StyledTxt>
                <StyledTxt variant="body2">{`${translated.phone}: ${company.phone}`}</StyledTxt>
                <StyledTxt variant="body2">{`${translated.email}: ${company.email}`}</StyledTxt>
              </Box>
              <Box>
                <StyledTxt variant="body2">{company.address}</StyledTxt>
                <StyledTxt variant="body2">{company.postAdress}</StyledTxt>
              </Box>
            </Box>
          </StyledWrapper>
          <StyledLinkBoxesWrapper>
            <StyledLeftLinksWrapper>
              {websideMapLeft.map((el) => (
                <Box key={el.name} mb={3}>
                  <Link to={el.path}>
                    <StyledLinkTxt variant="body2">{el.name}</StyledLinkTxt>
                  </Link>
                </Box>
              ))}
            </StyledLeftLinksWrapper>
            <StyledRightLinksWrapper>
              <StyledLinksWrapper>
                {websideMapRight.map((el) => (
                  <Box key={el.name} mb={3}>
                    <Link to={el.path}>
                      <StyledLinkTxt variant="body2">{el.name}</StyledLinkTxt>
                    </Link>
                  </Box>
                ))}
                <LanguageSelector />
              </StyledLinksWrapper>
              <SocialMedia />
            </StyledRightLinksWrapper>
          </StyledLinkBoxesWrapper>
        </StyledMainWrapper>
      </Container>
    </StyledRoot>
  );
};

export default Footer;
