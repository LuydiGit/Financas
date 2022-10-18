
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

/*const [objetos, setarObjetos] = userState([{
  nomes:['aluguel', 'energia', 'transporte'],
  valores: ['300', '100', '200']
}]);*/

const list = [
  {
    id:1,
    label: 'Boleto de Luz',
    value: '300,90',
    date: '21/09/2022',
    type: 0, //Despesas
  },
  {
    id:2,
    label: 'Pix Recebido',
    value: '1.200,00',
    date: '22/09/2022',
    type: 1, //Entradas
  },
  {
    id:3,
    label: 'Salário',
    value: '10.000,00',
    date: '24/09/2022',
    type: 1, //Entradas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Luydi Bentes"/>

        <Balance saldo="9.500,00" gastos = "-300,00"/>

        <Actions/>

        <Text style = {styles.title}>Últimas Movimentações</Text>

        <FlatList
        style = {styles.list}
        data = {list}
        keyExtractor = {(item) => String(item.id)}
        showsVerticalScrollIndicator = {false}
        renderItem= {({item}) => <Movements data={item} />}

        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',    
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
