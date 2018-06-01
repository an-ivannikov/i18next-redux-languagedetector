import React from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import Inspector from 'redux-devtools-inspector';
import SliderMonitor from 'redux-slider-monitor';
import ChartMonitor from 'redux-devtools-chart-monitor';


export default createDevTools(
  <DockMonitor
    toggleVisibilityKey='alt-v'
    changePositionKey='alt-p'
    changeMonitorKey='alt-m'
    defaultIsVisible={true}
  >
    <LogMonitor />
    <Inspector />
    <SliderMonitor />
    <ChartMonitor />
  </DockMonitor>
);
