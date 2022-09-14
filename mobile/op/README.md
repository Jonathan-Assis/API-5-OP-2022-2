# Arquivo de boas práticas

# Executar o Projeto OP

**Nota:** Antes de baixar ou instalar qualquer dependência, certifique-se de que esteja na pasta `mobile/op` onde há o arquivo `package.json`!!!

## Acesso a pasta do projeto do App OP

Após acessar a pasta do projeto do GitHub, acesse a pasta `mobile/op` pelo terminal digitando 
> cd mobile/op

caso tenha acessado, mais de uma pasta e deseja retroceder, digite no terminal:
> cd ..
## Baixando as dependências do projeto
Após entrar na pasta do projeto do App `OP`, execute no terminal:<br>
**Nota:** Execute apenas dentro da pasta `mobile/op`
> npm install

## Executando o App OP
Ao concluir todo o download das dependências, execute no terminal para iniciar a aplicação:<br>
**Nota:** Execute apenas dentro da pasta `mobile/op`
> npm start

Escaneie o QR Code pelo celular no App do Expo ou se preferir execute no terminal:
>expo start

Escaneie o QR Code pelo celular no App do Expo ou se deseja executar de forma nativa utilizando o cabo USB ou Android Studio execute no terminal:
>npm run android

Se optar por rodar de forma nativa, a _primeira instalação_ do projeto ele levará um certo tempo.
# GitHub

**Nota:** Antes de fazer alguma adição ao código, rodar o comando `git checkout -b <seu_nome>` na branch dev, e depois de fazer todas as suas atualizações/alterações e commits, faça sempre o `git pull` para acaso ocorra de houver atualizações elas sejam baixadas antes de fazer o comando `git merge dev` para unir a branch principal de desenvolvimento (dev) para a sua.

> Cuidado com os conflitos do `merge` e **sempre** faça um `update` antes do `commit`.

- Baixar as atualizações das branchs `git pull` na branch dev;
- Trocar de branch `git switch NOMEDABRANCH` ou `git checkout NOMEDABRANCH` **Obs:** Você não irá conseguir trocar de branch se acaso você tiver alterações na sua branch atual;
- Para mandar as atualizações baixadas na branch `dev` para a sua branch **Obs:** faça o `switch` ou `checkout` para a **sua branch** e depois `git merge dev`;
- Para subir um `commit` para o **GitHub** de sua branch faça `git add -u` logo depois `git commit -m " ESCREVA SUA MENSAGEM SOBRE O COMMIT " ` e em seguida para subir **definitivamente** para o **GitHub** faça `git push`;
- Ao concluir sua tarefa, para mandar suas alterações da branch atual para a branch `dev` faça `git switch dev` ou `git checkout dev` e em seguida faça `git merge NomeDaSuaBranch` **cuidado** com os conflitos!!! e arrume cada um deles antes de subir o `commit`.

## Padronizações Gerais ##

# Pastas e arquivos
> As pastas devem seguir um padrão de pasta "pai"(principal) começar com letra `minúscula` e a pasta "filho" que ficam dentro da pasta "pai" começarem com letra `maíuscula`.
*Para mais de uma palavra utilizar o padrão camelCase*

**Obs** as pastas da `pages` são as únicas que contem `_`(underline) apenas para melhor entendimento das páginas, já as demais apenas letra maíuscula para cada espaçamento 

# styles.js
>**Nota:** Algumas alterações poderam ocorrer devido a complexidade das telas, devido a isto está padronização seria o mais desejável possível para cada estilo criado, tendo assim uma melhor visualização/manutenção.
**Obs:** Nem toda página terá os tópicos mencionados, baseiem-se apenas na necessidade de utilização.
Separação da estruturação do "styles" pelas variáveis:
- `container`: É a base de uma view, tendo dentro desta View:
- `header` Separação de conteúdo no topo/cabeçalho da página;
- `body`   Separação de conteúdo no meio/corpo da página;
- `footer` Separação de conteúdo em baixo/rodapé da página;
- `column` Direção em colunas;
- `row`    Direção em linhas;
- `title`  Estilização do título;
- `text`   Estilização do texto;
- `button` Estilização do botão;
- `icon`   Estilização do icone;
- `image`  Estilização da imagem;
- `Primary` Principal, é usado quando terá uma segunda variação de estilo;
- `Secondary` Secundário é a variação de estilo do primário;
- `One,Two,Three...` É usado quando possui inúmeras variações.

>Montagem no arquivo:
**Obs:** Toda variável "pai" se inicia com letra minúscula, e a variável "filho" inicia com maiúsculo, *para mais de uma palavra utilar o padrão camelCase.*

 **exemplo:** para o `header`(pai), no header terá um título e uma separação de conteúdo em linhas logo teremos no arquivo styles `hTitle`(paiFilho) e `hRow`(paiFilho); Então para alterações que serão inseridas na `View` de um `header` como no exemplo dito, logo usamos como inicio da variável a letra minúscula header e logo em seguida maiúscula headerTitle, headerRow, para assim definirmos que aquela "estilização" será utilizada **SOMENTE** no `header`, para os demais serão criados seguindo o mesmo padrão minúsculo e maiúsculo.
**Obs:** É apenas um exemplo, e para cada tela poderá ter diversas opções de estilos.
- `container` Peça principal da página que terá todo o resto:
- `header` Começo da página, tendo o estilo do card
- `hTitle` Titulo que será usado somente no começo da página
- `body` Meio da página, tendo o estilo do card
- `bRow` Orientação de conteúdo em linha que será usado somente no body da página
- `bTextPrimary` Estilo de texto que geralmente é o principal, e será usado somente no body/meio da página
- `bTextSecondary` Estilo de texto que geralmente é a variação do principal, e será usado somente no body/meio da página
- `bButtonPrimary` Estilo de botão que será usado como principal, e será usado somente no body/meio da página
- `bButtonSecondary` Estilo de botão que é uma variação do principal, e será usado somente no body/meio da página
- `footer` Fim da página, tendo o estilo do rodapé
- `fText` Estilo do texto do fim da página
- `fIconOne` Estilo do primeiro icone a ser usado no fim da página
- `fIconTwo` Estilo do segundo icone a ser usado no fim da página