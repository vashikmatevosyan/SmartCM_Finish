import React from 'react';
import {View} from 'react-native';
import {VictoryLabel, VictoryPie, VictoryLegend} from 'victory-native';
import Svg from 'react-native-svg';
import style from './style'
import size from "../../utils/Size";
import EventsList from "../../components/TaskEventAll/EventsList";

function EventStatistic(props) {
  return (
    <View>
    <View style={style.victoryHome}>
      <View style={style.victoryBlock}>
        <Svg viewBox="0 0 650 650">
          <VictoryPie
            padding={size.size125}
            startAngle={size.size40}
            endAngle={size.size400}
            standalone={false}
            data={[
              {x: 'History', y:size.size20},
              {x: 'Teambulding', y: size.size80},
            ]}
            cornerRadius={size.size10}
            innerRadius={size.size45}
            labels={() => null}
            colorScale={['#F7F8F9', '#EF988F']}
          />
          <VictoryPie
            padding={size.size110}
            standalone={false}
            startAngle={size.size30}
            endAngle={size.size450}
            data={[
              {x: 'History', y: size.size30},
              {x: 'Meeting', y: size.size70},
            ]}
            cornerRadius={size.size10}
            innerRadius={size.size95}
            labels={() => null}
            colorScale={['#F7F8F9', '#F4C584']}
          />
          <VictoryPie
            standalone={false}
            padding={size.size40}
            startAngle={size.size30}
            endAngle={size.size450}
            data={[
              {x: 'History', y: size.size70},
              {x: 'Events', y: size.size30},
            ]}
            cornerRadius={size.size10}
            innerRadius={size.size165}
            labels={() => null}
            colorScale={['#F5F5F5', '#19B3A6']}
          />

          <VictoryPie
            standalone={false}
            padding={size.size50}
            startAngle={size.size30}
            endAngle={size.size450}
            data={[
              {x: 'History', y: size.size70},
              {x: 'Events', y: size.size50},
            ]}
            cornerRadius={size.size10}
            innerRadius={size.size110}
            labels={() => null}
            colorScale={['#F5F5F5', '#92BEFA']}
          />


          <VictoryLegend
            x={size.size420}
            y={size.size100}
            orientation="vertical"
            rowGutter={size.size10}
            data={[
              {name: 'Events', symbol: {fill: '#19B3A6'}},
              {name: 'Trainings', symbol: {fill: '#92BEFA'}},
              {name: 'Meeting', symbol: {fill: '#F4C584'}},
              {name: 'Teambulding', symbol: {fill: '#EF988F'}},
            ]}
            standalone={false}
          />
          <VictoryLabel
            textAnchor="middle"
            style={{fontSize:size.size24,
            }}
            x={size.size180}
            y={size.size180}
            text="Item"
          />
        </Svg>
      </View>
    </View>
      <EventsList page={true}/>
    </View>
  );
}

export default EventStatistic;
