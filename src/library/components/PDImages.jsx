import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import placeHolder from "../images/placeholder.jpg";



export default function QuiltedImageList(props) {
  return (
    <ImageList
      variant="quilted"
      cols={1}
      rowHeight={121}
    >
        <ImageListItem key={props.product.img || placeHolder} cols={3} rows={3}>
          <img
           src={props.product.img || placeHolder}
            alt={props.product.title}
            loading="lazy"
            style={{borderRadius:"12px"}}
          />
        </ImageListItem>
      
    </ImageList>
  );
}
