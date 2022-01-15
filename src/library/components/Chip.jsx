import Chip from '@mui/material/Chip';
// import '../App.css';

function Ds_Chip(props) {
    return (
      <Chip label={props.label||"-76%"} size="small" style={{backgroundColor:'#ECF6F6',color: '#2592AA'}}/>
    ) 
}

export default Ds_Chip;