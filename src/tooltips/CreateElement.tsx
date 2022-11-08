import * as React from 'react';
//import { options } from '../util-types/default-data';
import { SingleSelectChip } from '../utilcomponent/SingleSelect';

export const CreateElement=()=>{

    const [value,setValue]=React.useState<string>('');

    React.useEffect(()=>{
        console.log('can be change the value from create element....')
        console.log(value);

    },[value]);

    return (
        <div>
           {/* <SingleSelectChip 
           options={options}
           onChange={(val)=>setValue(val)}
           label="create-element"
           id='create-element-id'
           inputLabel='Choose Element Type'
           /> */}
           <p>No element for now</p>
        </div>
    )
}