
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

import * as React from 'react';

interface ControlledRadioButtonGroupProps{
    id:string;
    formLabel?:string;
    options:string[];
    onChange:(value:string)=> void;
    row?:boolean;
}

export const ControlledRadioButtonGroup=(props:ControlledRadioButtonGroupProps)=>{
    const {id,formLabel,options,onChange,row,...others}=props;
    const [value,setValue]=React.useState('');
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue((event.target as HTMLInputElement).value);
        onChange((event.target as HTMLInputElement).value);
    }

    return (
        <FormControl {...others}>
            <FormLabel id={`controlled-radio-button-group-${id}`}>
                {formLabel}
            </FormLabel>
            <RadioGroup
            row={row}
            name={`controlled-radio-group-${id}`}
            value={value}
            onChange={handleChange}
            >
                {
                    options.map((val)=>(<FormControlLabel key={val} value={val} control={<Radio />} label={val} />))
                }

            </RadioGroup>

        </FormControl>
    )
}