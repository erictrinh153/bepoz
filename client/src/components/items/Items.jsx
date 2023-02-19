import React from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material'
function Items({key, item, handleAddToCart}) {

  return (
    <Grid key={key} item className='item-container' xs={12} sm={4}>
        <div>
            <h1>{item.name}</h1>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Grid>
  )
}

export {Items};