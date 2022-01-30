import Chip from '@mui/material/Chip';
import Theme from "../styleHelpers/customTheme";

function Ds_Chip(props) {
    return (
      <Chip label={props.label} size="small" style={{backgroundColor:Theme.Colors.chipBackground,color: Theme.Colors.primary}}/>
    ) 
}

export default Ds_Chip;