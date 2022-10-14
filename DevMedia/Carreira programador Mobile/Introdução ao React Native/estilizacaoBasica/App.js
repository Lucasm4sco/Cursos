import { Text, View, Image } from 'react-native';
import { estilo } from './src/style';
import Span from './src/components/Span';

import Lua from './assets/lua.png';

const App = () => (
    <View style={estilo.container}>
      <Image source={Lua} style={estilo.img} />
      <View style={estilo.cardText}>
          <Span tamanho={32}>Lua</Span>
          <Text style={estilo.texto}>
            A Lua é o satélite natural do <Span tamanho={15} style={'italic'}>planeta Terra</Span>, distanciados por aproximadamente 384.405 km.
          </Text>
      </View>
    </View>
  );

export default App;
