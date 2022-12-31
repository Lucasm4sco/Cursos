import { useState } from "react";
import { ImageBackground } from "react-native";
import style from "./style";

import imgFundo from "../../assets/background_2.jpeg";
import ConverterComponent from "../ConverterComponent";
import Result from "../Result";

const ConvertMilesToKm = () => {
  
  const [valueMiles, setValueMiles] = useState(0);
  const [valueKm, setValueKm] = useState(0);

  const converter = (text) => {
    const lastCharacter = text[text.length - 1];
    
    if(lastCharacter === '-' || lastCharacter === ',' || lastCharacter === ' ')
      return setValueMiles(text.substr(0, text.length - 1));

    setValueMiles(text);

    const kmInMiles = 0.62137119;

    setValueKm((text / kmInMiles).toFixed(2));
  }

  return (
    <ImageBackground 
        source={imgFundo} 
        style={style.containerBackground}
        blurRadius={40}
    >
      <ConverterComponent 
        title='Conversor de milhas para quilômetros'
        description='Milhas'
        value={valueMiles}
        converter={converter}
      />
      <Result 
        value={valueKm}
        description='Quilômetros'
      />
    </ImageBackground>
  )
}

export default ConvertMilesToKm