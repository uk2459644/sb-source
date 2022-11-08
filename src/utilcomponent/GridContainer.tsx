import { Grid } from '@mui/material';
import * as React from 'react';

interface GridContainerProps{
    children?: React.ReactNode;

}

export const GridContainer=(props:GridContainerProps)=>{
   const {children,...others}=props;
    return (
        <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        {
            ...others
        }
        >
            {
                children
            }

        </Grid>
    )
}
