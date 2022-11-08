import { Box, Tab, Tabs } from "@mui/material";
import * as React from "react";
import { SelectedComponent } from "../component/SelectedComponent";
import { CreateAddComponent } from "../component/CreateAddComponent";

interface TabPanelProps {
    children?:React.ReactNode;
    index:number;
    value:number;
}

const TabPanel=(props:TabPanelProps)=>{
    const {children,value,index,...others}=props;

    return (
        <div
        role="tabpanel"
        hidden={value!==index}
        id={`tab-panel-${index}`}
        {...others}
        >
            {
                value===index && (
                    <Box sx={{p:3}}>
                        {children}
                    </Box>
                )
            }

        </div>
    )
}

export const ScrollableTabsButtonForce = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
     <Box 
    sx={
        { p:0,
          m:0,
         bgcolor: "background.paper" }
        }
        >
      <Tabs
        value={value}
        //orientation="vertical"
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs exmple"
      >
        <Tab label="Create/Add" />
        <Tab label="Style/CSS" />
        <Tab label="Attributes" />
        <Tab label="Flex" />
        <Tab label="Typography" />
       
      </Tabs>
    
      <TabPanel
      value={value}
      index={0}
      >
        <CreateAddComponent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p>Second TAb Panel Style / CSS</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p>Attributes</p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <p>Flex</p>
      </TabPanel>
     
    </Box>
  );
};
