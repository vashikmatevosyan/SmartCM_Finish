import React from "react";
import { Text, View } from "react-native";
import style from "./style";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack } from "victory-native";
import size from "../../../../utils/Size";
import { Annual } from "../../../../services/activityData";

function Index(props) {
  return (
    <View style={style.container}>
      <VictoryChart
        domain={{ y: [0, 20] }}
      >
        <VictoryAxis
          crossAxis
          style={{
            axis: { stroke: "none" },
            tickLabels: style.axis,
          }}
          tickValues={["J", "F", "M", "Z", "K", "V", "T", "A", "S", "O", "N", "D"]}
        />
        <VictoryBar
          style={{ data: { fill: "#F4C584", width: size.size10 } }}
          cornerRadius={{ top: () => 4, bottom: () => 4 }}
          data={Annual}
          x="quarter"
          y="earnings"
        />
        <VictoryStack>
          <VictoryBar
            style={{ data: { fill: "#EF988F", width: size.size10 } }}
            data={Annual}
            x="quarter"
            y="day"
            cornerRadius={{
              top: () => size.size4, bottom: () => size.size4,
            }}
          />
          <VictoryBar
            data={Annual}
            style={{ data: { fill: "#92BEFA", width: size.size10 } }}
            x="quarter"
            y="Vacation"
            cornerRadius={{
              top: () => size.size4, bottom: () => size.size4,
            }}
          />
          <VictoryBar
            data={Annual}
            x="quarter"
            y="Hours"
            style={{ data: { fill: "#83B7AD", width: size.size10 } }}
            cornerRadius={{
              top: () => size.size4, bottom: () => size.size4,
            }}
          />

        </VictoryStack>
      </VictoryChart>
      <View style={{width:'100%'}}>
        <View style={style.statisticBlock}><View style={style.title}><View style={{...style.circle, backgroundColor:'#92BEFA'}} /><Text style={style.time}>Vacation</Text></View><Text style={style.time}>12 day</Text></View>
        <View style={style.statisticBlock}><View style={style.title}><View style={{...style.circle, backgroundColor:'#EF988F'}}  /><Text style={style.time}>Day Offs</Text></View><Text style={style.time}>3 day</Text></View>
        <View style={style.statisticBlock}><View style={style.title}><View style={{...style.circle, backgroundColor:'#83B7AD'}}  /><Text style={style.time}>Hours Leaved</Text></View><Text style={style.time}>1 h 15 min</Text></View>
        <View style={style.statisticBlock}><View style={style.title}><View style={{...style.circle, backgroundColor:'#F5CC93'}}  /><Text style={style.time}>Work remotely</Text></View><Text style={style.time}>5 day</Text></View>
      </View>
    </View>
  );
}

export default Index;
