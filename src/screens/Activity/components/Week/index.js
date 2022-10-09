import React from "react";
import { VictoryBar, VictoryAxis } from "victory-native";
import { View } from "react-native";
import style from "./style";
import size from "../../../../utils/Size";
import { Week } from "../../../../services/activityData";

function Index(props) {
  return (
    <View style={style.body}>
      <VictoryBar
        height={size.size180}
        style={{
          data: style.data,
        }}
        cornerRadius={{ top: () => 10, bottom: () => 10 }}
        data={Week}
        x="quarter"
        y="earnings"
        animate
      />
      <View style={style.axis}>
        <VictoryAxis
          tickValues={["M", "T", "W", "T", "F", "S", "S"]}
          style={{
            axis: { stroke: "transparent" },
            tickLabels: style.tickLabels,
          }}
        />
      </View>
    </View>
  );
}


export default Index;
