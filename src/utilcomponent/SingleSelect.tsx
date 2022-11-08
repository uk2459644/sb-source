import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



function getStyles(name: string, personName: string, theme: Theme) {
  return {
    fontWeight:
      personName !== name
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface SingleSelectChipProps {
    options:string [],
    onChange:(value:string)=>void,
    label?:string,
    id?:string,
    inputLabel:string
}

export  const SingleSelectChip=({options,onChange,label,id,inputLabel}:SingleSelectChipProps)=> {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value : value,
    );
    onChange(value);
    
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id={`${id}-input-label`}>{inputLabel}</InputLabel>
        <Select
          labelId={`${label}-select-label`}
          id={`${id}-select-id`}
          
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id={`${id}-input-outline`} label={`${inputLabel}`} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                <Chip key={selected} label={selected} />
              {/* {selected.map((value) => (
                <Chip key={value} label={value} />
              ))} */}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
