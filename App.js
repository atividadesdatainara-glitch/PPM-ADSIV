import { StatusBar } from 'expo-status-bar';
import { View,Text,StyleSheet, Button, TextInput, Pressable, Image, ScrollView} from 'react-native';
import styles from './estilos/styles';

export default function App() {
  return (
    
  <ScrollView>
    <View style={styles.container}>
         
{/* ----------------- Fim cabeçalho---------------------*/}
      <View style={styles.cabecalho}> 
        <Text style={styles.textoPrincipal}> Tecnologias em ADS </Text>
      </View>
{/* ----------------- Fim cabeçalho---------------------*/}

{/* ----------------- Imagem principal---------------------*/}
      <View style={styles.containerImagem}> 
        <Image source={require('./assets/imagemPrincipal.jpeg')} style={styles.imagem}/>
      </View>
{/* ----------------- Fim Imagem principal ---------------------*/}

{/* ----------------- Card de tecnologia ---------------------*/}
      <View style={styles.contenercard}> 
{/* -----------------1 Card de tecnologia ---------------------*/}
        <View style={styles.cartao } >

          {/* -----------1 Imagem------------ */} 
          <View style={styles.containerImagem}>    
            <Image source={require('./assets/reactNative.png')} style={styles.imagemCard}/>
          </View>
          {/* -----------Fim Imagem------------ */} 
          
          {/* ----------- Titulo------------ */} 
            <Text style={styles.tituloCard}> 
              React Native
            </Text>
          {/* ----------- Fim Titulo------------ */}

          {/* ----------- Descrição------------ */} 

            <Text style={styles.descricaoCard}> 
             Tecnologia para desenvolvimento de aplicativos móveis.
            </Text>
          {/* ----------- Fim Descrição------------ */} 


        </View>
{/* ----------------- Fim 1 Card de tecnologia ---------------------*/}



{/* -----------------2 Card de tecnologia ---------------------*/}
        <View style={styles.cartao } >

          {/* ----------- Imagem------------ */} 
          <View style={styles.containerImagem}>    
            <Image source={require('./assets/js.png')} style={styles.imagemCard}/>
          </View>
          {/* -----------Fim Imagem------------ */} 
          
          {/* ----------- Titulo------------ */} 
            <Text style={styles.tituloCard}> 
             JavaScript
            </Text>
          {/* ----------- Fim Titulo------------ */}

          {/* -----------Descrição------------ */} 

            <Text style={styles.descricaoCard}> 
               Linguagem de programação usada para criar aplicações interativas e dinâmicas.
            </Text>
          {/* ----------- Fim Descrição------------ */} 

        </View>
{/* ----------------- Fim 2 Card de tecnologia ---------------------*/}



{/* -----------------3 Card de tecnologia ---------------------*/}
        <View style={styles.cartao } >

          {/* ----------- Imagem------------ */} 
          <View style={styles.containerImagem}>    
            <Image  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwCZwIIvec201zamNrRN8gxfOrV2yOlJkuFSRRPVAjdw&s=10' }}
            style={styles.imagemCard}/>
          </View>
          {/* -----------Fim Imagem------------ */} 
          
          {/* ----------- Titulo------------ */} 
            <Text style={styles.tituloCard}> 
              Banco de Dados
            </Text>
          {/* ----------- Fim Titulo------------ */}

          {/* -----------Descrição------------ */} 

            <Text style={styles.descricaoCard}> 
               Armazenamento e organização de informações para serem utilizadas por sistemas.
            </Text>
          {/* ----------- Fim Descrição------------ */} 

        </View>
{/* ----------------- Fim 3 Card de tecnologia ---------------------*/}



{/* ----------------- 4 Card de tecnologia ---------------------*/}
        <View style={styles.cartao } >

          {/* ----------- Imagem------------ */} 
          <View style={styles.containerImagem}>    
            <Image  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh90k7m6fd64JfUorswNcP9dQL15xJkKiklWUbFaxLdsBDLcsHFbZH2AY&s=10' }}
            style={styles.imagemCard}/>
          </View>
          {/* -----------Fim Imagem------------ */} 
          
          {/* ----------- Titulo------------ */} 
            <Text style={styles.tituloCard}> 
              Inteligência Artificial
            </Text>
          {/* ----------- Fim Titulo------------ */}

          {/* -----------Descrição------------ */} 

            <Text style={styles.descricaoCard}> 
              Algoritmos, aprendizado de máquina e automação para tomada de decisões inteligentes.
            </Text>
          {/* ----------- Fim Descrição------------ */} 

        </View>
{/* ----------------- Fim 4 Card de tecnologia ---------------------*/}

    </View>
{/* ----------------- Fim Card de tecnologia ---------------------*/}



{/* ----------------- Rodape ---------------------*/}
  <View style={styles.rodape}> 
      <Text style={styles.textoRodape}> 
        Tainara Pereira Oliveira
      </Text>
  </View>
{/* ----------------- Fim Rodape---------------------*/}

     

      <StatusBar style="auto" />
  </View>   
</ScrollView>
      
  );
}