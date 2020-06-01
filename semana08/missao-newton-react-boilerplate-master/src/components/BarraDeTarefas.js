import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default function BarraDeTarefas(props) {
  console.log(props)

  return (
    <Paper>
      <Tabs
        value={props.selectedFilter}
        onChange={props.onchangeFilter}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab value='todas' label="todas" />
        <Tab value='pendentes' label="pendentes" />
        <Tab value='completas' label="completas" />
      </Tabs>
    </Paper>
  );
}