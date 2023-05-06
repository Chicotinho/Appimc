import { StatusBar } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
		<View style={styles.titulo}>
			  <Text style={styles.txtTitulo}>CALCULADORA IMC</Text>
		</View>
		  
		<View style={styles.blocoImg}>
			<Image style={styles.Img} source={require('./assets/img.jpg',)}/>
		</View>
		  
		<View style={styles.bloco}>
			<Text style={styles.Label}>Peso:</Text>
			<TextInput style={styles.txtInput} placeholder="Insirar seu Peso" keyboardType="numeric"/>
			
			<Text style={styles.Label}>Altura:</Text>
			<TextInput style={styles.txtInput} placeholder="Insirar seu Peso" keyboardType="numeric"/>
		</View>
		  
		<View style={styles.bloco1}>
			<TouchableOpacity style={styles.button} >
        		<Text>Calcular</Text>
      		</TouchableOpacity>
			
			<TouchableOpacity style={styles.button} >
        		<Text>Calcular</Text>
      		</TouchableOpacity>
		</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   	backgroundColor:'#F2AB91'
  },
	titulo: {
		backgroundColor: '#8A7C8B',
		height:'10%',
		justifyContent:'center'
	},
	txtTitulo: {
		fontSize: 20,
		textAlign:'center',
		color:'#fff'
	},
	Img: {
		width: 200,
		height: 200,
		borderRadius:10
	},
	blocoImg: {
		alignItems: 'center',
		marginTop: 30
	},
	bloco: {
		marginTop: 10,
		textAlign:'center',
		justifyContent:'center',
		alignItems: 'center' 
	},
	txtInput:{
		backgroundColor:'#fff',
		marginTop: 10,
		width: 200,
		borderRadius:5,
		borderWidth:1,
		fontSize: 20,
		marginBottom: 15,
	},
	Label: {
		backgroundColor:'#fff',
		marginTop: 10,
		marginBotton: 10,
		width: 300,
		fontSize: 20
	},
	bloco1: {
		flexDirection: 'row',
		backgroundColor: '#8A7C8B',
		textAlign:'center',
		justifyContent:'center',
	},
	button:{
		backgroundColor:'#fff',
		marginTop: 10,
		marginLeft: 10,
		marginBottom: 15,
		height: "8vw",
		width: 150,
		borderRadius:5,
		borderWidth:1,
	},
	fundobt:{
	backgroundColor: '#E87D76'
   
}
});
