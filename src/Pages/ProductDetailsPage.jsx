import Grid from '@mui/material/Grid';
import Tabs from '../library/components/Tabs';
import Content from "../library/components/PDContent";
import Images from '../library/components/PDImages';
import Header from "./../library/components/Header";
import { useSelector } from "react-redux";
import Container from '@mui/material/Container';
export default function ProductDetailsPage(){
  const data=useSelector(state => state);
  const productDetails=data.cartReducer.viewProduct
    return (
        <Container  maxWidth={false}>
        <Grid container rowSpacing={10}>
            <Grid  item xs={12}  >
                <Header/>
            </Grid>
            <Grid  item xs={12} >
                <Grid container columnSpacing={8} >
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
                        <Images product={productDetails} item  />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </Container>
    )
} 