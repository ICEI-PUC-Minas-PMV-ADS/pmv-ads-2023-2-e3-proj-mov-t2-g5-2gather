# 2Gather

`ANÁLISE E DESENVOLVIMENTO DE SISTEMAS`

`Projeto: Desenvolvimento de Aplicações Móveis`

`2023/2`

O objetivo deste projeto é disponibilizar uma plataforma interna centralizada dedicada à troca de mensagens instantâneas, a fim de enfrentar os desafios de comunicação interna de uma empresa buscando eliminar os riscos relacionados ao vazamento de dados e dispersão da comunicação.
Especificamente, esse aplicativo foca na obtenção de um maior nível de segurança dos dados da empresa, por meio da centralização da comunicação interna e busca promover um ambiente de interação mais integrado e eficaz aos colaboradores.

## Integrantes

* Amanda de Lima Ventura
* Ellen Caroline Trindade Gonçalves Cândido
* Elpidio Lomeu Junior
* Fabrício Maia dos Santos
* Leonardo Correia de Sá e Silva
* Odair Cordeiro Marra
* Shinji Matsumoto Fernandes

## Orientador

* Mateus Curcino de Lima

## Instruções de Acesso:

A Aplicação Mobile `2Gather` está disponível e pode ser acessada pelo [link](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather). 
Agora com o projeto identificado, selecione a branch `main`, vá até `<>Code` e escolha a forma de clocagem do arquivo e salve-o em uma pasta no diretório escolhido para então abri-lo no seu editor de texto. 

1) Caso opte por usar o GitHub Desktop, abrirá a tela do GitHub Desktop e nela estará disponível o botão `Abrir no Visual Studio Code`. Feito isso, o projeto será aberto. Para rodá-lo, abra o Terminal, nele já estará o path inicial do projeto indicando em qual pasta ele foi salvo. A partir de então é só complementar o `path` com o  caminho da pasta e o comando de inicialização.

 Para alterar o diretório atual e adentrar na pasta `src/2gather` na qual está a aplicação que será executada localmente.
 
`cd src/2gather`

Para instalar as dependências do projeto use o comando

`npm install`

Já com as dependências instaladas para inicializar a aplicação use o comando

`npm start`

A aplicação será inicializada e caso deseje acessar via web browser no desktop, apertar `w` no terminal que estiver executando a aplicação. 
Caso deseje acessar via expo, deve-se baixar o app `Expo Go` no celular e ler o `QR Code`.

### Considerações:

Por ser uma aplicação destinada à comunicação exclusiva da empresa, os usuários são classificados como `Admin` e  `Usuários`. O `Admin` é o responsável pela **Criação, Edição e Inativação** de usuários, sendo que esta regra de negócio foi estabelecida para manter a segurança e controle do cadastro.

Para efeitos de verificação da aplicação, foi disponibilizado um usuário `Admin` para que os avaliadores possam navegar livremente pela aplicação e ver todas as funcionalidades sem aquelas restrições estabelecidas aos demais usuários.

## Instruções de utilização:

Na Tela Login, acesse com os seguintes dados:
- E-mail: cake@gmail.com
- Senha: 123

Ao acessar a aplicação, será apresentada a **Tela HomePage**, na qual estarão disponíveis as sessões e a partir delas poderá ser feita a navegação pela Aplicação, assim como as mensagens que este usuário já possua, estarão no corpo da tela. Estas mensagens podem ser: 

- Privadas (aquelas trocadas de forma direta com outro usuário);
- de Grupos (aquelas trocadas dentro do grupo ao qual faz parte);
- de Listas de Transmissão (aquelas mensagens recebidas por essa lista a qual faz parte).

Além disso, na parte superior estão disponíveis os botões de `Lista de Transmissão` e `Grupos` que direcionará o usuário para as sessões de `Listas` e `Grupos`, onde se pode Criá-los, Visualizá-los, Editá-los e Arquivá-los; 

Na parte inferior estão disponíveis os botões de:

- Gerenciamento de Usuários: Nessa sessão o Admin pode Criar, Editar e Inativar usuários;
- Contatos: Nessa sessão todos os usuários tem acesso a lista de pessoas cadastradas, podendo visualizar as informações básicas dos demais ao clicar sobre a foto 
e pode enviar mensagens diretas clicando sobre o nome do contato escolhido;
- Configurações: Nesta última sessão, o usuário tem a possibilidade de Editar a Foto do seu Perfil e fazer a troca da sua senha pessoal, clicando no botão específico.

Esperamos que tenham uma ótima experiência ao navegar pelo App 2Gather.

# Documentação

<ol>
<li><a href="docs/01-Documentação de Contexto.md"> Documentação de Contexto</a></li>
<li><a href="docs/02-Especificação do Projeto.md"> Especificação do Projeto</a></li>
<li><a href="docs/03-Metodologia.md"> Metodologia</a></li>
<li><a href="docs/04-Projeto de Interface.md"> Projeto de Interface</a></li>
<li><a href="docs/05-Arquitetura da Solução.md"> Arquitetura da Solução</a></li>
<li><a href="docs/06-Template Padrão da Aplicação.md"> Template Padrão da Aplicação</a></li>
<li><a href="docs/07-Programação de Funcionalidades.md"> Programação de Funcionalidades</a></li>
<li><a href="docs/08-Plano de Testes de Software.md"> Plano de Testes de Software</a></li>
<li><a href="docs/09-Registro de Testes de Software.md"> Registro de Testes de Software</a></li>
<li><a href="docs/10-Plano de Testes de Usabilidade.md"> Plano de Testes de Usabilidade</a></li>
<li><a href="docs/11-Registro de Testes de Usabilidade.md"> Registro de Testes de Usabilidade</a></li>
<li><a href="docs/12-Apresentação do Projeto.md"> Apresentação do Projeto</a></li>
<li><a href="docs/13-Referências.md"> Referências</a></li>
</ol>

# Código

<li><a href="src/README.md"> Código Fonte</a></li>

# Apresentação

<li><a href="presentation/README.md"> Apresentação da solução</a></li>
