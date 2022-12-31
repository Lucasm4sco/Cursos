import { useState } from "react";
import { ImageBackground } from "react-native";
import style from "./style";

import imgFundo from "../../assets/background_1.jpg";
import ConverterComponent from "../ConverterComponent";
import Result from "../Result";

const ConvertKmToMiles = () => {
  const [valueKm, setValueKm] = useState(0);
  const [valueMiles, setValueMiles] = useState(0);

  const converter = (text) => {
    const lastCharacter = text[text.length - 1];
    
    if(lastCharacter === '-' || lastCharacter === ',' || lastCharacter === ' ')
      return setValueKm(text.substr(0, text.length - 1));

    setValueKm(text);

    const kmInMiles = 0.62137119;

    setValueMiles((text * kmInMiles).toFixed(2));
  }

  return (
    <ImageBackground 
        source={imgFundo} 
        style={style.containerBackground}
        blurRadius={40}
    >
      <ConverterComponent 
        title='Conversor de quilômetros para milhas'
        description='Quilômetros'
        value={valueKm}
        converter={converter}
      />
      <Result 
        value={valueMiles}
        description='Milhas'
      />
    </ImageBackground>
  )
}

export default ConvertKmToMiles