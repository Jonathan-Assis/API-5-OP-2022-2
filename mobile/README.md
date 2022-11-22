# Projeto Ocorrências Públicas (OP)

# Sumário

- [Introdução](#introducao)
- [Instalação e Execução do Projeto OP](#instalacao)
- - [Procedimentos](#procedimentos)
- - - [Utilizando o próprio celular **Android**](#celular)
- - - [Utilizando o Android Studio](#android)
- - - [Utilizando o Expo](#expo)
- [Precauções Com o GitHub](#precaucao)
- [Padronizações](#padronizacoes)
- - [Pastas e Arquivos](#pastas)
- - [Estilos](#estilos)
- - [Uso de Componente Comum](#componente)
- [Conexão Com o MongoDB e o APP](#conexao)

# Introdução <a name="introducao"></a>

O projeto "OP" tem por objetivo o usuário reportar problemas em sua cidade girando entorno da secretária de obras públicas, a APP fornecerá:
- Walkthrough para que um novo usuário possa entender as funções do App afim de garantir uma melhor experiência de usuário;

- Funcionalide de adição de ocorrência, tendo como selecionar o tipo de problema, por exemplo: Buracos na rua, árvore que está com risco de queda, postes sem energia entre outros problemas. É possível adicionar ou tirar uma foto com a câmera, selecionar o local através do uso da API do Google Maps, onde o usuário selecionará colocando o alfinete no local desejado;
 - Poder visualizar as próprias ocorrências registradas e de outras pessoas da cidade, poder contribuir com outras ocorrências, para que tenha uma prioridade maior em sua execução de serviço; 
 - Poder editar as informações do perfil como CPF, senha, adicionar uma foto de perfil ou deletar permanentemente a conta.

# Instalação e Execução do Projeto OP <a name="instalacao"></a>

A instalação é feita através da pasta **`mobile`** onde conterá o arquivo de **_`package.json`_**, sendo necessário que possua em sua máquina atualmente instalado:

- [![](https://img.shields.io/badge/%20-Node.JS-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
- [![](https://img.shields.io/badge/%20-npm-CC3534?style=for-the-badge&logo=npm&logoColor=red)](https://www.npmjs.com/)
- [![](https://img.shields.io/badge/%20-Expo-FFFFFF?style=for-the-badge&logo=expo&logoColor=black)](https://expo.dev/) (Opcional)
- [![](https://img.shields.io/badge/Android%20Studio-3DDC84?style=for-the-badge&logo=android&logoColor=white)](https://developer.android.com/) (Opcional)
## Procedimentos <a name="procedimentos"></a>

1. Após acessar a pasta do projeto _**OP**_ clonada, acesse a pasta **`mobile`** pelo terminal digitando:
```console
cd mobile
```

2. Após acessar a pasta **`mobile`**, efetue a instalação das dependências digitando no terminal:
```console
npm install
```
3. Ao concluir todo o download das dependências, é possível executar a aplicação de três maneiras pelo terminal, sendo elas:

### Utilizando o próprio celular **Android** <a name="celular"></a>
> É necessário a utilização de um cabo USB plugado no celular para realização deste procedimento.

Primeiro é necessário que seu celular esteja visível, neste caso habilitado nas configurações a ancoragem USB e instalação de aplicativos.

Para visualizar se seu celular esteja visível para execução dos próximos passos, execute no terminal:
```console
adb devices
```

Após a verificação, abra dois terminais na pasta **mobile**, para que o primeiro efetue a instalação do apk em seu celular (Uma vez instalado não é necessário efetuar o comando do primeiro terminal novamente, a menos que haja grandes mudanças ou desinstalação do apk) e o segundo execute a aplicação OP e continue mantendo para que as mudanças sejam reatualizadas (Caso ocorra alterações).

1. Terminal execute:
```console
npm run dev
```
2. Terminal execute:
```console
npm run start
```
> **Nota**: A "primeira" instalação do _Apk_ levará um tempo para baixar e instalar.

### Utilizando o Android Studio <a name="android"></a>
> É necessário que tenha instalado e configurado o **Android Studio** para realização deste procedimento.

Primeiro é necessário que seu emulador esteja em execução, neste caso inicie o emulador no **Android Studio**.

Para visualizar se seu emulador esteja visível para execução dos próximos passos, execute no terminal:
```console
adb devices
```

Após a verificação, abra dois terminais na pasta **mobile**, para que o primeiro efetue a instalação do apk em seu emulador (Uma vez instalado não é necessário efetuar o comando do primeiro terminal novamente, a menos que haja grandes mudanças ou desinstalação do apk) e o segundo execute a aplicação OP e continue mantendo para que as mudanças sejam reatualizadas (Caso ocorra alterações).

1. Terminal execute:
```console
npm run dev
```
2. Terminal execute:
```console
npm run start
```

> **Nota**: A "primeira" instalação do _Apk_ levará um tempo para baixar e instalar.

### Utilizando o Expo <a name="expo"></a>
> É necessário que tenha instalado em sua máquina o Expo e em seu celular **Android** o aplicativo Expo para realização deste procedimento.

Caso não possua instalado, é possível efetuar a instalação do expo de duas maneiras:
Instalando no próprio projeto na pasta **mobile**, executando no terminal:
```console
npm install expo-cli
```
Ou instalando globalmente na máquina, executando no terminal:
```console
npm install -g expo-cli
```

Para execução do App, é necessário que execute a aplicação no terminal na pasta **mobile** e que escaneie o QR Code gerado com seu celular para que assim seja instalado e executado o projeto OP.

1. Caso possua o expo-cli instalado globalmente, execute no terminal:
```console
expo start --tunnel
```
2. Caso possua o expo-cli instalado no próprio projeto, execute no terminal:
```console
npm run expo
```
3. Abra o App do Expo em seu celular e escaneie o QR Code.

# Precauções Com o GitHub <a name="precaucao"></a>

>**Nota:** Antes de fazer alguma adição ao código, rodar o comando `git checkout -b <seu_nome>` na branch dev, e depois de fazer todas as suas atualizações/alterações e commits, faça sempre o `git pull` para acaso ocorra de houver atualizações elas sejam baixadas antes de fazer o comando `git merge dev` para unir a branch principal de desenvolvimento (dev) para a sua.

> Cuidado com os conflitos do `merge` e **sempre** faça um `update` antes do `commit`.

- Baixar as atualizações das branchs `git pull` na branch dev;
- Trocar de branch `git switch NOMEDABRANCH` ou `git checkout NOMEDABRANCH` **Obs:** Você não irá conseguir trocar de branch se acaso você tiver alterações na sua branch atual;
- Para mandar as atualizações baixadas na branch `dev` para a sua branch **Obs:** faça o `switch` ou `checkout` para a **sua branch** e depois `git merge dev`;
- Para subir um `commit` para o **GitHub** de sua branch faça `git add -u` logo depois `git commit -m " ESCREVA SUA MENSAGEM SOBRE O COMMIT " ` e em seguida para subir **definitivamente** para o **GitHub** faça `git push`;
- Ao concluir sua tarefa, para mandar suas alterações da branch atual para a branch `dev` faça `git switch dev` ou `git checkout dev` e em seguida faça `git merge NomeDaSuaBranch` **cuidado** com os conflitos!!! e arrume cada um deles antes de subir o `commit`.

# Padronizações <a name="padronizacoes"></a>
A padronização tem o objetivo de facilitar o entendimento do desenvolvimento e a manutenção em determinadas situações afim de que se tenha um ganho em produtividade.

## Pastas e Arquivos <a name="pastas"></a>
As pastas devem seguir um padrão de pasta "pai"(principal) começar com letra `minúscula` e a pasta "filho" que ficam dentro da pasta "pai" começarem com letra `maíuscula`, seguindo assim o padrão **_camelCase_**.

>**Obs** as pastas que ficam dentro das `pages` são as únicas que seguem outro padrão chamado **_snake_case_** utlizando `_` (underline) apenas para melhor entendimento de definição que serão pastas pertecentes a páginas do usuário da App. 

## Estilos <a name="estilos"></a>

No arquivo de **_styles.js_**
>**Nota:** Algumas alterações poderam ocorrer devido a complexidade das telas, devido a isto está padronização seria o mais desejável possível para cada estilo criado, tendo assim uma melhor visualização/manutenção.

>**Obs:** Nem toda página terá os tópicos mencionados, baseiem-se apenas na necessidade de utilização.
Separação da estruturação do "styles" pelas variáveis:
- `container`: É a base de uma view, tendo dentro desta View:
- `header`: Separação de conteúdo no topo/cabeçalho da página;
- `body`:   Separação de conteúdo no meio/corpo da página;
- `footer`: Separação de conteúdo em baixo/rodapé da página;
- `column:` Direção em colunas;
- `row`:    Direção em linhas;
- `title`:  Estilização do título;
- `text`:   Estilização do texto;
- `button`: Estilização do botão;
- `icon`:   Estilização do icone;
- `image`:  Estilização da imagem;
- `Primary`: Principal, é usado quando terá uma ou mais variações de estilo;
- `Secondary`: É a variação de estilo secundária;
- `Tertiary`: É a variação de estilo terciária;
- `One,Two,Three...`: É usado quando possui inúmeras variações do mesmo tipo.

No arquivo **_index.js_** a montagem deve ocorrer:

>**Obs:** Toda variável "pai" se inicia com letra minúscula, e a variável "filho" inicia com maiúsculo, *para mais de uma palavra utilar o padrão camelCase.*

 **Exemplo:** para o `header`(pai), no header terá um título e uma separação de conteúdo em linhas logo teremos no arquivo styles `hTitle`(paiFilho) e `hRow`(paiFilho); Então para alterações que serão inseridas na `View` de um `header` como no exemplo dito, logo usamos como inicio da variável a letra minúscula header e logo em seguida maiúscula headerTitle, headerRow, para assim definirmos que aquela "estilização" será utilizada **SOMENTE** no `header`, para os demais serão criados seguindo o mesmo padrão minúsculo e maiúsculo.
**Obs:** É apenas um exemplo, e para cada tela poderá ter diversas opções de estilos.
- `container`: Peça principal da página que terá todo o resto:
- `header`: Começo da página, tendo o estilo do card
- `hTitle`: Titulo que será usado somente no começo da página
- `body`: Meio da página, tendo o estilo do card
- `bRow`: Orientação de conteúdo em linha que será usado somente no body da página
- `bTextPrimary`: Estilo de texto que geralmente é o principal, e será usado somente no body/meio da página
- `bTextSecondary`: Estilo de texto que geralmente é a variação do principal, e será usado somente no body/meio da página
- `bButtonPrimary`: Estilo de botão que será usado como principal, e será usado somente no body/meio da página
- `bButtonSecondary`: Estilo de botão que é uma variação do principal, e será usado somente no body/meio da página
- `footer`: Fim da página, tendo o estilo do rodapé
- `fText`: Estilo do texto do fim da página
- `fIconOne`: Estilo do primeiro icone a ser usado no fim da página
- `fIconTwo`: Estilo do segundo icone a ser usado no fim da página

## Componente de Loading <a name="componente"></a>
Enquanto alguma função está rodando em paralelo na aplicação (ex.: um request para o servidor), recomenda-se o uso de do componete de Loading para mostrar ao usuário que algo está carregando no app.

Como é mostrado no exemplo de uso a baixo, é só definir uma variável do tipo `boolean` e passar para o componete. Quando a variável `loading` for true, mostrará na tela o loading padrão, em vez do conteúdo da função (no caso, da função `Bananas`).

> Nota: Substituir o caminho de importação do componente de `./path/to/componet` pelo caminho a partir de sua tela.
```Javascript
import React, { useState } from 'react';
import { Loading } from './path/to/component';

export default function Bananas() {
  const [ loading, setLoading ] = useState(false);
  
  const request = async () => {
    setLoading(true);
    /* todo: request from Bananas */
    setLoading(false);
  }
  
  return (
    <Loading loading={loading}>
      {/* todo: content of Bananas */}
    </Loading>
  );
}
```

# Conexão com o Banco de Dados <a name="conexao"></a>
A conexão entre o App (React Native) e o Banco (MongoDB) é feita pelo servidor (NodeJs), o App envia e recebe os dados por requisições HTTP com o servidor.
A classe `ServerConnection` faz essa requisições, como segue o exemplo do login:

>**Obs:** É recomendado seguir uma estrutura semelhante a esta para as requisições, lembrando de verificar quais as funções existem dentro da classe `ServerConnection`.
```Javascript
funtion Login() {
  const [ response, setResponse ] = useState(undefined);
  const [ loading, setLoading ] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    ServerConnection.login({cpf: '198240978/92', senha: 'd0&82@oi0We11>lkS7'})
    .then(data => setResponse(data))
    .finally(() => setLoading(false));
  }, []);
  
  return (
    {loading
      ? { "Layout durante o loading" }
      : { "Layout depois do loading" }
    }
  );
}
```



- Estrutura do Json (MongoDB)
Como o MongoDB é um NoSQL, para toda ação envolvendo o servidor/banco, leia a estrutura de como os dados são salvos.
Todos os dados dentro dos Json a seguir são meramente de exemplo para ilustrar a entrada de dados.

- Cidadao
>**Obs:** A 'senha' deverá ser criptografada antes de ser salva no banco, depois descriptografada quando for usada.
```JSON
{
  "nome": "Nome",
  "cpf": "123456789/00",
  "endereco": "Rua da Alegria, n°42",
  "bairro": "Bairro com Nome",
  "senha": "senha123"
}
```

- Ocorrencia
>**Obs:** 'categoria' tem relação à collection 'categoria', ainda não implementado.
> 'foto' salva uma imagem em base64.
```JSON
{
  "cidadao": "631dba7619905c56ccddf830",
  "foto": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/.../AM6gsehWADtQGB6U0fMqC+lQkNzL5omYbAQHb/gv/9k=",
  "local": {
    "lat": 12,
    "long": -45
  },
  "categoria": {
    "id": "1001",
    "tipo": "Iluminação"
  }
}
```
