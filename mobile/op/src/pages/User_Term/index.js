import React,{Component} from 'react';
import { View,Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';


const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

class User_Term extends Component {

state = {
    accepted: false
}

render(){
  return (
   <View style={styles.container}>
          <Text style={styles.bTextPrimary}>Termos de Uso e de Política de Privacidade</Text>
          <ScrollView 
          style={styles.tcContainer}
          onScroll={({nativeEvent}) => {
              if (isCloseToBottom(nativeEvent)) {
                this.setState({
                    accepted: true
                })
              }
            }}
          >
              <Text style={styles.text}>
                {"\n"}
                A sua privacidade é importante para nós. É política do Ocorrências Públicas respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no app Ocorrências Públicas.
                {"\n\n"}
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será utilizado. 
                {"\n\n"}
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                {"\n\n"}
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei. O nosso aplicativo pode ter links para sites externos que não são operados por nós.
                {"\n\n"} 
                Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                {"\n\n"}
                Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                {"\n\n"}
                O uso continuado de nosso aplicativo será considerado como aceitação de nossas práticas em torno de Aviso de Privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto conosco.
                {"\n\n"}
                Compromisso do Usuário: O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Ocorrências Públicas oferece no aplicativo e com caráter enunciativo, mas não limitativo: 
                {"\n\n"}
                {'\u2022'}Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;
                {"\n\n"}
                {'\u2022'}Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, betano ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
                {"\n\n"}
                {'\u2022'}Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Ocorrências Públicas, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
                {"\n\n"}
                Mais informações
                {"\n\n"}
                Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro seguir o bom senso, caso interaja com um dos recursos que você usa em nosso aplicativo.
                {"\n\n"}
                Esta política é efetiva a partir de 2 setembro 2022 10:46

              </Text>          
          </ScrollView>

          <TouchableOpacity disabled={ !this.state.accepted } onPress={ ()=> {
           alert("Termos e condições aceitos.") 
          this.props.navigation.navigate('Home') 
        }}
          style={ this.state.accepted ? styles.button : styles.buttonDisabled }><Text style={styles.buttonLabel}>Accept</Text></TouchableOpacity>
    </View>
  );
}

}

export default User_Term;