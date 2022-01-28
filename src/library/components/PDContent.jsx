import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import IncDec from './IncDec';

export default function Content() {
    let props = {
        title: "Carrots from Tomissy Farm",
        description: "Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s carrots are growing on the fields naturally.",
        sKU: 76645,
        category: 'Vegetables',
        stock:'In Stock',
        farm: 'Grocery Tarm Fields',
        freshness: '1 days old',
        buyBy: 'pcs, kgs, box, pack',
        delivery: 'in 2days',
        deliveryArea: 'Czech republic',
        sellingPrice: '36.23 INR',
        mrp: '48.79 INR',
    
    }
    return (
        <Box sx={{display:'grid', gridGap: 3}}>
            <Box>
                <h1>Carrots from Tomissy Farm</h1>
                <Rating name="read-only" value={4} sx={{color:"black", display:"flex"}} readOnly />
            </Box>

            <Box>
                <p>
                    Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s carrots are growing on the fields naturally.
                </p>
            </Box>

            <Box>
            <table style={{width:'100%'}} >
                <thead></thead>
                <tbody>
                <tr>
                  <td style={{color:'#C1C1C1'}}>SKU:</td>
                  <td>{props.sKU}</td>
                  <td style={{color:'#C1C1C1'}}>Freshness:</td>
                  <td>{props.freshness}</td>
                </tr>
                <tr>
                  <td style={{color:'#C1C1C1'}}>Category:</td>
                  <td>{props.category}</td>
                  <td style={{color:'#C1C1C1'}}>Buy By:</td>
                  <td>{props.buyBy}</td>
                </tr>
                <tr>
                  <td style={{color:'#C1C1C1'}}>Stock:</td>
                  <td>{props.stock}</td>
                  <td style={{color:'#C1C1C1'}}>Delivery:</td>
                  <td>{props.delivery}</td>
                </tr>
                <tr>
                  <td style={{color:'#C1C1C1'}}>Farm:</td>
                  <td>{props.farm}</td>
                  <td style={{color:'#C1C1C1'}}>Delivery Area:</td>
                  <td>{props.deliveryArea}</td>
                </tr>
                </tbody>
              </table>            
            </Box>

            <Box sx={{display:"grid", gridTemplateColumns: '2fr 1fr', marginTop:"2em", padding:'1em', alignItems:'center', border:"2px solid #F5F5F5", borderRadius:"12px"}}>
                <Box>
                    <h2  style={{margin:0, padding:'2px'}}>36.23 INR</h2>
                    <p  style={{margin:0, padding:0}}>48.34 INR</p>
                </Box>
                <Box sx={{display:'grid',gridTemplateColumns:'1fr 1fr', alignItems:'center'}}>
                    
                    <IncDec/>

                    <Button variant="primary" sx={{backgroundColor:"#2592AA", color: 'white'}}>ADD TO CART</Button>
                </Box>
            </Box>

        </Box>
    )
}