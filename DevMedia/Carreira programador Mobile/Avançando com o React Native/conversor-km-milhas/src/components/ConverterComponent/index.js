import { View, Text, TextInput } from "react-native";
import style from "./style";

const ConverterComponent = ({ title, description, value, converter }) => {
  return (
    <View style={style.containerInput}>
      <Text style={style.title}>{title}</Text>
      <View style={style.containerRow}>
        <Text style={style.description}>
          {description}
        </Text>
        <TextInput
          keyboardType="number-pad"
          style={style.input}
          value={value}
          onChangeText={text => converter(text)}
        />
      </View>
    </View>
  )
}

export default ConverterComponent