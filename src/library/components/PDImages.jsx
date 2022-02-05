import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList(props) {
  return (
    <ImageList
      sx={{ width: "minmax(100%,400px)", height: "100%" }}
      variant="quilted"
      cols={1}
      rowHeight={121}
    >
    
        <ImageListItem key={props.product.img} cols={props.product.cols || 3} rows={props.product.rows || 4}>
          <img
            {...srcset(props.product.img, 121, props.product.rows, props.product.cols)}
            alt={props.product.title}
            loading="lazy"
            style={{borderRadius:"12px"}}
          />
        </ImageListItem>
      
    </ImageList>
  );
}

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//     rows: 3,
//     cols: 4,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//     rows: 3,
//     cols: 4,
//   },
 
// ];
