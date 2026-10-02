import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
//------------ Principal ----------------
  container: {
    backgroundColor: '#faf5f5',
    flexDirection: 'column',
  },

//------------ Fim Principal ----------------
//------------ Cabesario --------------------
  cabecalho: {
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(44, 103, 163)',
    width: '100%',
  },

  textoPrincipal:{
    color: '#f8f7f7',
    fontWeight: 'bold', 
    fontSize: 20,
  },
//------------ Fim Cabesario --------------------

//----------------- Imagem ---------------------
  imagem:{
    width: '100%',
    height: 200,
    borderRadius: 15,
    resizeMode: 'cover',
  },

  containerImagem: {
    width: '100%',
    alignItems: 'center',
  },
//----------------- Fim Imagem ---------------------

//----------------- Fim Cartão ---------------------
  contenercard:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,

  },
  cartao: {
    width: '40%',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#d9eeff',
    borderRadius: 15,
  },

  imagemCard:{
    width: '100%',
    height: 130,
    borderRadius: 15,
    resizeMode: 'cover',
    

  },
//----------------- Fim Cartão ---------------------

//----------------- Texto dos cardes ---------------------
  tituloCard: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1c4a79',
    
  },

  descricaoCard: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
  },
//----------------- Fim Texto dos cardes ------------------

//----------------- Rodape ------------------
  rodape: {
  width: '100%',
  height: 60,
  justifyContent: 'center',
  alignItems: 'center',
  },

  textoRodape: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#45147c',
},
//----------------- Fim Rodape ------------------
});

export default styles;