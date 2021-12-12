// Dependencies scoped imports
import React from 'react';
import Carousel from 'react-material-ui-carousel';

// Project scoped imports
import NextIcon from '../../assets/icons/Forward.svg';
import PrevIcon from '../../assets/icons/back.svg';
import CaruseleItem from '../CaruseleItem';

// Module scoped imports
import { useTrans } from './trans';
import {
  StyledCarouselWrapper,
  StyledChunkWrapper,
  StyledRoot,
  StyledSwipeableWrapper,
} from './styles';
import { CustomCarouselProps } from './types';
import { CAROUSELE_ITEMS, chunkedCaruseleItems } from './constants';

/* const useStyles = makeStyles(styles); */
/**
 * @description Carousel component.
 *
 * API:
 *
 * - [Carousel API](https://github.com/norwegianbegginer/Dekode/tree/master/src/components/Carousel)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const CustomCarousel = ({ sx, ...rootProps }: CustomCarouselProps) => {
  const translated = useTrans();

  return (
    <StyledRoot sx={sx} {...rootProps}>
      <StyledCarouselWrapper maxWidth="lg">
        <Carousel
          navButtonsAlwaysVisible
          indicators={false}
          animation="slide"
          autoPlay={false}
          NextIcon={<img src={NextIcon} alt="" />}
          PrevIcon={<img src={PrevIcon} alt="" />}
          navButtonsProps={{
            style: {
              backgroundColor: `#fff`,
            },
          }}
        >
          {chunkedCaruseleItems.map((chunk, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <StyledChunkWrapper key={index}>
              {chunk?.map((item) => (
                <CaruseleItem item={item} />
              ))}
            </StyledChunkWrapper>
          ))}
        </Carousel>
      </StyledCarouselWrapper>
      <StyledSwipeableWrapper>
        {CAROUSELE_ITEMS.map((item) => (
          <CaruseleItem item={item} />
        ))}
      </StyledSwipeableWrapper>
    </StyledRoot>
  );
};

export default CustomCarousel;
