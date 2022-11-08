import { AddonPanel } from "@storybook/components";
import React from "react";
import { ScrollableTabsButtonForce } from "./utilcomponent/ScrollTab";

interface PanelProps{
    active:boolean;
}

export const Panel:React.FC<PanelProps>=(props)=>{

    return (
        <AddonPanel {...props}>
          <ScrollableTabsButtonForce />

        </AddonPanel>
    )
}