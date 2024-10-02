import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Criando o Stack Navigator
const Stack = createStackNavigator();

// Tela Inicial
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Bem-vindo à Tela Inicial!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.buttonText}>Ir para Detalhes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Ir para Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

// Tela de Detalhes
function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Detalhes do Item</Text>
      <Image
        style={styles.detailImage}
        source={{ uri: 'https://cdn.pensador.com/img/frase/pa/ul/paulo_policani_sao_os_pequenos_detalhes_que_fazem_a_dif_l86jz97.jpg' }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

// Tela de Perfil
function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Perfil do Usuário</Text>
      <Image
        style={styles.profileImage}
        source={{ uri: 'https://i.pinimg.com/736x/6f/bd/a1/6fbda13155dd08d3c3d8aaf5cb80fddf.jpg' }}
      />
      <Text style={styles.profileName}>Nome do Usuário</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

// Aplicativo Principal
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#7cc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          cardStyle: {
            backgroundColor: '#f2f2f2',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos para os Componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#7cc',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#4b7bec',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderColor: '#7cc',
    borderWidth: 3,
  },
  detailImage: {
    width: 300,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 20,
  },
});
