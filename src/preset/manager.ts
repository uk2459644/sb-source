import React from 'react';
import { addons, types } from '@storybook/addons';
import { Tool } from '../Tool';
import { ADDON_ID, PANEL_ID, TAB_ID, TOOL_ID } from '../constants';
import { Panel } from '../Panel';
import { TabPanle } from '../Tab';


addons.register(ADDON_ID,()=>{

  addons.add(TOOL_ID,{
    type:types.TOOL,
    title:'Bulma',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool,
  });

  // Register the panel
  addons.add(PANEL_ID,{
    type:types.PANEL,
    title:'Bulma',
    match:({viewMode})=>viewMode==='story',
    render:Panel
  });

  // Register the tab
  addons.add(TAB_ID,{
    title:'Bulma',
    type:types.TAB,
    route:({storyId})=>`/bulma/${storyId}`,
    match:({viewMode})=>viewMode==='Bulma',
    render:TabPanle,
  })

});