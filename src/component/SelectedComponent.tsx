import * as React from 'react';
import { SELECTED_ELEMENT_ID } from '../constants';


export const SelectedComponent=()=>{
    const [selectedId,setSelectedId]=React.useState(window.localStorage.getItem(SELECTED_ELEMENT_ID));

    React.useEffect(()=>{
        setSelectedId(window.localStorage.getItem(SELECTED_ELEMENT_ID));
    },[selectedId]);

    return (
        <div>
            Selected component will appear here. {selectedId}
            
        </div>
    )
}