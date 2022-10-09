import React from "react";
import { View } from "react-native";
import { VictoryChart, VictoryAxis, VictoryLine, VictoryScatter } from "victory-native";
import style from "./style";
import size from "../../../../utils/Size";
import { Progress } from "../../../../services/activityData";

function Index(props) {
  return (
    <View style={style.body}>
      <VictoryChart minDomain={{ x: 0.8, y: 0 }} domain={{ y: [25, 29] }}>
        <VictoryAxis
          crossAxis
          style={{
            axis: { stroke: "none" },
            tickLabels: style.axis,
          }}
          tickValues={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
        />
        <VictoryAxis
          dependentAxis
          crossAxis
          style={{
            axis: { stroke: "none" },
            grid: { stroke: "#E4E4E4" },
            tickLabels: style.axis,
          }}
          tickFormat={y => `${y}`.substring(0, 2)}
        />
        <VictoryLine
          data={Progress}
          animate
          style={{
            data: { stroke: "#347474" },
            parent: { border: "2px solid #347474" },
          }}
          interpolation="cardinal"
        />
        <VictoryScatter
          style={{ data: { fill: "#347474", stroke: "#fff", strokeWidth: 3 } }}
          size={size.size8}
          data={[{ x: 3, y: 27.8 }]}
        />
      </VictoryChart>
    </View>
  );
}


export default Index;
