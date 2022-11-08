import { Grid } from '@mui/material';
import * as React from 'react';
import { BulmaComponent, BulmaElement, BulmaForm, BulmaLayout } from '../util-types/bulma-data';
import { SingleSelectChip } from '../utilcomponent/SingleSelect';
import { GridContainer } from '../utilcomponent/GridContainer';
import { ControlledRadioButtonGroup } from '../utilcomponent/RadioGroup';
import { insertPosition } from '../util-types/dom-data';
import BulmaHelper from '../helper/Bulma-Helper';
import { SELECTED_ELEMENT_ID } from '../constants';
//import '../bulma-demo.css';

const options=[
    'Element',
    'Component',
    'Form',
    'Layout'
];

const createOptions=[
    'default',
    'custom'
];

export const CreateAddComponent=()=>{
    const [value,setValue]=React.useState('Element');
    const [el,setEl]=React.useState('breadcrumb');
    const [position,setPosition]=React.useState('afterbegin');
    const [createtype,setCreatetype]=React.useState('default');
    
    const createElement=(el:string,pos:InsertPosition,crtype:string)=>{
        setCreatetype(crtype);
      let  refElid=window.localStorage.getItem(SELECTED_ELEMENT_ID);
      let but=document.createElement('button');
      but.classList.add('button');
      but.innerText='Button Bulma';
      let refEl=document.getElementById(refElid);
      refEl.insertAdjacentElement('afterend',but);

      //  BulmaHelper.createElementWithSelection(pos,el,refElid,crtype);

    }
    React.useEffect(()=>{

    },[createElement]);
    

    return (
        <GridContainer>
        <Grid>
            <ControlledRadioButtonGroup 
            id='create-add-componenet'
            formLabel='Component'
            onChange={(value)=>setValue(value)}
            options={options}
            />
        </Grid>
        <Grid>
        {
           (()=> {switch (value) {
                case 'Element':
                    return <SingleSelectChip 
                    inputLabel={value}
                    id={`create-add-${value}`}
                    onChange={(val)=>setEl(val)}
                    options={BulmaElement}
                    />
                    
                case 'Component':
                    return <SingleSelectChip 
                    inputLabel={value}
                    id={`create-add-${value}`}
                    onChange={(val)=>setEl(val)}
                    options={BulmaComponent}
                    />
                case 'Form':
                    return <SingleSelectChip 
                    inputLabel={value}
                    id={`create-add-${value}`}
                    onChange={(val)=>setEl(val)}
                    options={BulmaForm}
                    />
                case 'Layout':
                    return <SingleSelectChip 
                    inputLabel={value}
                    id={`create-add-${value}`}
                    onChange={(val)=>setEl(val)}
                    options={BulmaLayout}
                    />
            
                default:
                    return <SingleSelectChip 
                    inputLabel={value}
                    id={`create-add-${value}`}
                    onChange={(val)=>setEl(val)}
                    options={BulmaElement}
                    />
                   
            }
        })()
        }
        </Grid>
        <Grid>
            <ControlledRadioButtonGroup
            id='create-add-insert'
            formLabel='Insert'
            options={insertPosition}
            onChange={(val)=>setPosition(val)}
            />
        </Grid>
        <Grid>
            <ControlledRadioButtonGroup
            id='create-add-choose-type'
            formLabel='Create'
            options={createOptions}
            onChange={(typ)=>createElement(el,position as InsertPosition,typ)}
            />
           
        </Grid>
        </GridContainer>
    )
}