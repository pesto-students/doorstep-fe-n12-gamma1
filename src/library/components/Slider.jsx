import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Theme from '../styleHelpers/customTheme';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from "@mui/material/InputLabel";

function valuetext(value) {
  return `${value} INR`;
}

const minDistance = 0;

export default function MinimumDistanceSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  let inputStyle= {
    width : "90px",
    height: "42px",
    /* color: grey; */
    background: "#F9F9F9",
    border: "1px solid #EBEBEB",
    borderRadius: "12px",
    textAlign: "center",
  }

  let minInputStyle= {...inputStyle};
  minInputStyle.float = "left";
  minInputStyle.marginRight = "14px";

  let maxInputStyle= {...inputStyle};
  maxInputStyle.float = "right";
  maxInputStyle.marginLeft = "14px";


  let onMinChange = (event)=>{
    setValue((value)=>{
      let a = [...value];
      a[0] = Number(event.target.value);
      if(Number(event.target.value)>a[1]){
        a[0] = a[1];
      }
      return a;
    })
  }


  let onMaxChange = (event)=>{
    setValue((value)=>{
      let a = [...value]
      a[1] = Number(event.target.value);
      if(Number(event.target.value)<a[0]){
        a[1] = a[0];
      }
      return a;
    })
  }

  return (
    // <Box sx={{ width: 251 }}>
    //   <Slider
    //     getAriaLabel={() => 'Minimum distance'}
    //     value={value}
    //     onChange={handleChange1}
    //     valueLabelDisplay="auto"
    //     getAriaValueText={valuetext}
    //     disableSwap
    //     sx={{
    //       color: Theme.Colors.primary
    //     }}
    //   />
    //   <div style={{marginTop:"16px"}}>
    //     <div style={{height:"30px"}}>
    //     <label style={{float:"left", fontWeight: 'bold'}}>Min</label>
    //     <label style={{marginLeft: "65px", fontWeight: 'bold'}}>Max</label>
    //     {/* <input type="number" placeholder="Min" style={minInputStyle} value={value[0]} onChange={onMinChange}/> */}
    //     </div>
    //   <div>
    //   <input type="number" placeholder="Min" style={minInputStyle} value={value[0]} onChange={onMinChange}/>
    //   <div style={{display: "inline", height: "42px"}}>
    //     <p style={{    textAlign: "center", display: "inline",lineHeight: "42px", width: "2px"}}>-</p>
    //     </div>
    //   <input type="number" placeholder="Max" style={maxInputStyle} value={value[1]} onChange={onMaxChange}/>
    //   </div>
    //   </div>
    // </Box>
    <Grid container rowSpacing={1}>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{fontWeight:'bold'}}>Price</Typography>
      </Grid>

      <Grid item xs={9}>
        <Slider
          getAriaLabel={() => 'Minimum distance'}
          value={value}
          onChange={handleChange1}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
          sx={{
            color: Theme.Colors.primary
          }}
        />
      </Grid>
      <Grid item xs={9}>
          <Grid container>
            <Grid item xs={5}>
              <InputLabel><Typography variant="p" sx={{fontWeight:'bold', color:'black'}}>Min</Typography></InputLabel>
              <OutlinedInput type="number"  value={value[0]} onChange={onMinChange} sx={{borderRadius:'14px', textAlign:'center', background: "#F9F9F9" }}/>
            </Grid>
            <Grid item xs={2} sx={{display:'flex', flexDirection: 'column', justifyContent: 'center'}} fullwidth={1}>
              <Typography variant="p" sx={{fontWeight:'bold', textAlign:'center'}} fullwidth={1}>-</Typography>
            </Grid>
            <Grid item xs={5}>
            <InputLabel><Typography variant="p" sx={{fontWeight:'bold', color:'black'}}>Max</Typography></InputLabel>
              <OutlinedInput type="number" value={value[1]} onChange={onMaxChange} sx={{borderRadius:'14px', textAlign:'center', background: "#F9F9F9"}}/>
            </Grid>
          </Grid>
      </Grid>



    </Grid>
  );
}