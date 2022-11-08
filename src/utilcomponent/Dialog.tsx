import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import * as React from 'react';

interface DialogFormProps{
    open:boolean,
    toggleOpen:()=>void,
    children?:React.ReactNode
}

export const DialogForm=({open,toggleOpen,children}:DialogFormProps)=>{
   

    return (
        <div>
            <Dialog open={open}
           
            >
                <DialogTitle>Dialog</DialogTitle>
                

                {children}
            </Dialog>
        </div>
    )
}
