import React from "react";
import { Text } from "react-native";

const Span = ({children, style='normal', tamanho}) => (
    <Text style={{
        fontWeight: '700',
        fontStyle: style, 
        fontSize: tamanho,
        textAlign: "center"
    }}>
        {children}
    </Text>
)

export default Span;