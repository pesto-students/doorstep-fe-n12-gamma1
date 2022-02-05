import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import IncDec from './IncDec';
import Theme from "../styleHelpers/customTheme";
import { useDispatch,useSelector } from "react-redux";
import { cartActions } from "../../app/reducers/cartReducer";

export default function Content(props) {
    const dispatch = useDispatch();
    // let props = {
    //     title: "Carrots from Tomissy Farm",
    //     description: "Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s carrots are growing on the fields naturally.",
    //     sKU: 76645,
    //     category: 'Vegetables',
    //     stock:'In Stock',
    //     farm: 'Grocery Tarm Fields',
    //     freshness: '1 days old',
    //     buyBy: 'pcs, kgs, box, pack',
    //     delivery: 'in 2days',
    //     deliveryArea: 'Czech republic',
    //     sellingPrice: '36.23 INR',
    //     mrp: '48.79 INR',
    
    // }
    const onAddProductToCart = () => {
        dispatch(cartActions.addProductToCart(props.product));
      };
    return (
        <Box sx={{display:'grid', gridGap: 3}}>
            <Box>
                <h1>{props.product.title}</h1>
                <Rating name="read-only" value={4} sx={{color:"black", display:"flex"}} readOnly />
            </Box>

            <Box>
                <p>
                    {props.product.desc || "Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s carrots are growing on the fields naturally."}
                </p>
            </Box>

            <Box>
            <table style={{width:'100%'}} >
                <thead></thead>
                <tbody>
                {/* <tr>
                  <td style={{color:'#C1C1C1'}}>SKU:</td>
                  <td>76645</td>
                  <td style={{color:'#C1C1C1'}}>Freshness:</td>
                  <td>{props.product.freshness}</td>
                </tr> */}
                <tr>
                  <td style={{color:'#C1C1C1'}}>Category:</td>
                  <td>{props.product.categories[0]}</td>
                  <td style={{color:'#C1C1C1'}}>Buy By:</td>
                  <td>{props.product.unit}</td>
                </tr>
                <tr>
                  <td style={{color:'#C1C1C1'}}>Stock:</td>
                  <td>{props.product.inStock?'In Stock':'NA'}</td>
                  <td style={{color:'#C1C1C1'}}>Delivery:</td>
                  <td>In 2days</td>
                </tr>
                {/* <tr>
                  <td style={{color:'#C1C1C1'}}>Farm:</td>
                  <td>{props.product.farm}</td>
                  <td style={{color:'#C1C1C1'}}>Delivery Area:</td>
                  <td>{props.product.deliveryArea}</td>
                </tr> */}
                </tbody>
              </table>            
            </Box>

            <Box sx={{display:"grid", gridTemplateColumns: '2fr 1fr', marginTop:"2em", padding:'1em', alignItems:'center', border:"2px solid #F5F5F5", borderRadius:"12px"}}>
                <Box>
                    <h2  style={{margin:0, padding:'2px'}}>{props.product.discounted_price} INR</h2>
                    <h2  style={{margin:0, padding:0,textDecoration: 'line-through'}}>{props.product.price} INR</h2>
                </Box>
                <Box sx={{display:'grid',gridTemplateColumns:'1fr 1fr', alignItems:'center'}}>
                    
                <IncDec initvalue={props.product.qty} product={props.product} />

                    <Button
            size="small"
            variant="contained"
            style={{
              float: "right",
              backgroundColor: Theme.Colors.primary,
              height: "36px",
              width: "112px",
              borderRadius: "12px",
            }}
            onClick={onAddProductToCart}
          >
            Add to cart
          </Button>
                </Box>
            </Box>

        </Box>
    )
}