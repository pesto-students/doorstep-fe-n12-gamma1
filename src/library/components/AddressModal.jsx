import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import AddressFrom from './AddressForm';
import Portal from '@mui/material/Portal';
import Button from '@mui/material/Button';
import Theme from "../styleHelpers/customTheme";

export default function ClickAway() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: 'fixed',
    width: 200,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };  

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        <Button variant="contained" onClick={handleClick} sx={{backgroundColor:`${Theme.Colors.primary || '#2592AA'} `}}>
          + Add New Address
        </Button>
        {open ? (
          //<Portal>
            <Box>
              <AddressFrom/>
            </Box>
          //</Portal>

        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
