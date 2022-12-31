import { View, Text } from "react-native";
import style from "./style";

const Result = ({ value, description }) => {
  return (
    <View style={style.containerOutput}>
      <Text style={style.result}>
        {value}
      </Text>
      <Text style={style.description}>
        {description}
      </Text>
    </View>
  )
}

export default Result