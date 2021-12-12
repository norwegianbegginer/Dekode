// Dependencies scoped imports
import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// Project scoped imports
import BreadCrumbsBox from '../../components/BreadCrumbsBox';
import ImgBoxWithCard from '../../components/ImgBoxWithCard';
import PersonCard from '../../components/PersonCard';
import CustomCarousel from '../../components/Carousel';
import PersonImg from '../../assets/kreated-media-0fN7Fxv1eWA-unsplash 1.jpg';
import OceanImg from '../../assets/ocean.jpg';

// Module scoped imports
import { useTrans } from './trans';
import {
  StyledRoot,
  StyledPageTitle,
  StyledContainer,
  StyledTxt,
  StyledButtonWrapper,
  StyledSectionTitle,
  StyledPageSubTitle,
  StyledBtnTxt,
} from './styles';
import { PurpleCirclesPageProps } from './types';

/**
 * @description Purple circles page with purple circles. Description to extend.
 *
 * API:
 *
 * - [PurpleCirclesPage API](https://github.com/norwegianbegginer/Dekode/tree/master/src/components/PurpleCirclesPage)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const PurpleCirclesPage = ({
  sx,
  classes,
  ...rootProps
}: PurpleCirclesPageProps) => {
  const translated = useTrans();

  return (
    <Box>
      <BreadCrumbsBox />
      <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
        <Container maxWidth="lg">
          <StyledPageTitle variant="h1">{translated.title}</StyledPageTitle>
          <StyledPageSubTitle variant="h2">
            {translated.subTitle}
          </StyledPageSubTitle>

          <StyledContainer maxWidth="sm">
            <PersonCard
              imgUrl={PersonImg}
              title="Jane Doe"
              subtitle="Projectmanager Dekode – 5 min read – 2 june"
            />
            <StyledTxt variant="h4" variantMapping={{ h4: `p` }} mt={6}>
              {translated.pAboveImg}
            </StyledTxt>
          </StyledContainer>
        </Container>

        <ImgBoxWithCard
          imgUrl={OceanImg}
          imgAlt="Ocean"
          boxTxt="“The process of making the dye was long, difficult and expensive”"
        />
        <Container maxWidth="lg">
          <StyledContainer maxWidth="sm">
            <Typography variant="body2" mt={3} mb={6}>
              {translated.imgDescription}
            </Typography>
            <StyledTxt variant="h4" variantMapping={{ h4: `p` }}>
              {translated.pBelowImg}
            </StyledTxt>
            <StyledSectionTitle variant="h2">
              {translated.resultTitle}
            </StyledSectionTitle>
            <StyledTxt variant="h4" variantMapping={{ h4: `p` }}>
              {translated.resultText}
            </StyledTxt>
          </StyledContainer>
        </Container>
        <CustomCarousel />

        <Container maxWidth="lg">
          <StyledContainer maxWidth="sm">
            <StyledSectionTitle variant="h2">Teft?</StyledSectionTitle>
            <StyledTxt variant="h4" variantMapping={{ h4: `p` }}>
              {translated.teftText}
            </StyledTxt>
            <StyledButtonWrapper>
              <Button component={Link} to="/" variant="outlined">
                <StyledBtnTxt>{translated.btnTxt}</StyledBtnTxt>
              </Button>
            </StyledButtonWrapper>
          </StyledContainer>
        </Container>
      </StyledRoot>
    </Box>
  );
};

export default PurpleCirclesPage;
