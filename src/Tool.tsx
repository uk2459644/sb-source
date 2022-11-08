import { useGlobals, useStorybookApi } from "@storybook/api"
import { IconButton, Icons } from "@storybook/components";
import React from "react";
import { useCallback, useEffect } from "react";
import { ADDON_ID, TOOL_ID } from "./constants";


export const Tool=()=>{
    const [globals,updateGlobals]=useGlobals();
    const {bulmaEnabled}=globals;

    const api=useStorybookApi();
  

    const toggleBulma=useCallback(()=>
    updateGlobals({
       bulmaEnabled: ! bulmaEnabled,
    }),
    [bulmaEnabled,updateGlobals]
    );

    useEffect(()=>{
        api.setAddonShortcut(ADDON_ID,{
            label: 'Toggle Bulma ',
            defaultShortcut: ['B'],
            action:toggleBulma,
            showInMenu:false,
            actionName:'bulma'
        });
    },[toggleBulma,api]);

    return (
        
        <IconButton
        key={TOOL_ID}
        active={bulmaEnabled}
        title="Enable Bulma"
        onClick={toggleBulma}
        >
            <Icons 
            icon="paintbrush"
            />
        </IconButton>
        
    )

}