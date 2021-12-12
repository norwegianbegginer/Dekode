// Dependencies scoped imports
import React from 'react';
import { Menu, MenuItem } from '@mui/material';

// Project scoped imports
import { useLitteraMethods } from '../../config.littera';

// Module scoped imports
import { useTrans } from './trans';
import { StyledTxt } from './styles';
import { LanguageSelectorProps } from './types';

/**
 * @description Component that provides page language change funcionality.
 *
 * API:
 *
 * - [LanguageSelector API](https://github.com/norwegianbegginer/Dekode/tree/master/src/components/LanguageSelector)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const LanguageSelector = ({ sx, classes }: LanguageSelectorProps) => {
  const translated = useTrans();
  const { setLocale } = useLitteraMethods();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<any>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (e: any) => {
    setAnchorEl(null);
  };

  const handleItemClick = (e: any) => {
    setLocale(e.target.getAttribute(`value`));
    setAnchorEl(null);
  };

  return (
    <>
      <StyledTxt
        sx={sx}
        className={classes?.root}
        variant="body2"
        onClick={handleClick}
      >
        Language: {translated.language}
      </StyledTxt>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': `button`,
        }}
      >
        <MenuItem onClick={handleItemClick} value="no_NO">
          Norsk
        </MenuItem>
        <MenuItem onClick={handleItemClick} value="en_US">
          English
        </MenuItem>
        <MenuItem onClick={handleItemClick} value="pl_PL">
          Polski
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSelector;
