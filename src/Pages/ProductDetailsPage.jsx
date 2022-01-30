import Grid from '@mui/material/Grid';
import Tabs from '../library/components/Tabs';
import Content from "../library/components/PDContent";
import Images from '../library/components/PDImages';
import Header from "./../library/components/Header";
import { useDispatch,useSelector } from "react-redux";
// import { cartActions } from "../../app/reducers/cartReducer";
import { useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';

export default function ProductDetailsPage(){
//     const dispatch = useDispatch();
//   let navigate = useNavigate();
  const data=useSelector(state => state);
  console.log("data",data)
  const productDetails=data.cartReducer.viewProduct
    return (
        <Container  justifyContent="center">
        <Grid container >
            <Grid  item xs={12}  >
                <Header/>
            </Grid>
            <Grid  item xs={12} >
                <Grid container columnSpacing={8} item xs zeroMinWidth>
                    <Grid item xs={12} sm={6}>
                        <Grid container rowSpacing={8}>
                            <Grid item>
                                <Content product={productDetails} />
                            </Grid>
                            <Grid item>
                                <Tabs/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}  style={{display:'flex', alignItems:'center', flexDirection: 'column'}}>
                        <Images item xs zeroMinWidth fullwidth={1}/>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
        </Container>
    )
} 