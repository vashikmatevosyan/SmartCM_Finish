import React from 'react';
import {VictoryAxis, VictoryChart, VictoryStack, VictoryArea,} from 'victory-native';
import {View} from 'react-native';
import {historyTask} from "../../services/activityData";
import size from "../../utils/Size";
import style from "./style";
import TasksList from "../../components/TaskEventAll/TasksList";
function TaskStatistic(props) {
  return (
    <View>
      <VictoryChart
        width={size.size360}
        height={size.size280}
        domain={{y: [1, 7]}}>
        <VictoryAxis
          crossAxis
          style={style.victory}
          tickValues={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', ' ']}
        />
        <VictoryAxis
          dependentAxis
          crossAxis
          style={style.victory}
          tickValues={['0', '10', '20', '30', '40', '50', '60']}
        />
        <VictoryStack colorScale={['#EE9087', '#83B7AD']}>
          <VictoryArea
            style={{data: {stroke: '#D95353', strokeWidth:size.size2}}}
            animate
            data={historyTask}
            interpolation="natural"
            x="quarter"
            y="y"
          />
          <VictoryArea
            style={{data: {stroke: '#347474', strokeWidth: size.size2}}}
            animate
            data={historyTask}
            interpolation="natural"
            x="quarter"
            y="k"
          />
        </VictoryStack>
      </VictoryChart>
      <TasksList page={true}/>
    </View>
  );
}

export default TaskStatistic;
