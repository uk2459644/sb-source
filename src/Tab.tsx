import * as React from 'react';
import './some.css';


const buthtml=`<button class="button">hello button</button>`;

export const TabPanle=()=>{
   

    return (
        <div>
           
           <iframe id='bulma-iframe' src='demo.html' srcDoc={buthtml} width={400} height={350} frameBorder={0}></iframe>
           This is div for tab panel.
        </div>
    )
}