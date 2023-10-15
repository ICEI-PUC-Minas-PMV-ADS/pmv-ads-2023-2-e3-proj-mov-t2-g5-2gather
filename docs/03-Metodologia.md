
# Metodologia

<span>Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Para o desenvolvimento deste trabalho, adotaremos a metodologia descrita a seguir, a qual abrangerá a relação de ambientes utilizados, a gestão do código fonte, definições dos processos, ferramentas e como a equipe se organizará e fará a gestão das tarefas ao longo do tempo disponível para a realização do projeto.

<!-- ## Relação de Ambientes de Trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito deverá ser apresentada em uma tabela que especifica que detalha Ambiente, Plataforma e Link de Acesso. 
Nota: Vide documento modelo do estudo de caso "Portal de Notícias" e defina também os ambientes e frameworks que serão utilizados no desenvolvimento de aplicações móveis. -->

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de `branches`:

- `main`: Representa a versão atualmente estável e testada do software, pronta para ser entregue ou implantada em produção;
- `develop`: Representa a versão em desenvolvimento do software, onde as funcionalidades estão sendo incorporadas e testadas continuamente;
- `feature`: Para cada nova funcionalidade a ser desenvolvida, uma nova **branch** de `feature` deve ser criada a partir da **branch** `develop`, seguindo o padrão de nomenclatura `feature-numero-do-cartao`, onde `numero-do-cartao` representa o código numérico identificador da tarefa no **Trello**.

<br>

Exemplo da nossa gestão de código:

![image](https://user-images.githubusercontent.com/107289791/230728090-bf0a77e2-cdf7-484d-8337-f5d9fd81ef40.png)
<p align="center">Figura 02 - Diagrama da representação do Controle de Versão.</p>

<br>

Quanto à gerência de `commits`, o projeto adota a seguinte convenção para etiquetas:

- `doc`: Melhorias ou adições à documentação;
- `bug`: Resolução de problemas de uma funcionalidade já existente;
- `feature`: Novas funcionalidades a serem adicionadas ao projeto;
- `enhance`: Melhorias em funcionalidades já existentes;

## Gerenciamento de Projeto

### Divisão de Papéis

 - `Scrum Master`: Ellen Caroline Trindade Gonçalves Cândido;
 - `Product Owner`: Shinji Matsumoto Fernandes;
 - `Designer`: Amanda de Lima Ventura;
 - `Equipe de Desenvolvimento`: 
   - Amanda de Lima Ventura,
   - Ellen Caroline Trindade Gonçalves Cândido,
   - Elpidio Lomeu Junior,
   - Fabrício Maia dos Santos,
   - Leonardo Correia de Sá e Silva,
   - Odair Cordeiro Marra,
   - Shinji Matsumoto Fernandes.

<br>
Exemplificação: A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. A equipe está organizada da seguinte maneira:
- Scrum Master: Felipe Domingos;
- Product Owner: Rommel Carneiro;
- Equipe de Desenvolvimento: Pedro Penna, Pedro Ivo, Rodrigo Richard;
- Equipe de Design: Simone Nogueira.

<br>

### Processo

A metodologia de gestão de projeto adotada será o Scrum e o Kanban. Todas as tarefas serão organizadas no Trello, seguindo a estrutura a seguir:

- `Backlog`: Contém todas as atividades que devem ser realizadas no projeto, desde a documentação até o desenvolvimento da aplicação.
- `To-do`: Lista as tarefas definidas previamente para a sprint atual, e deve ser atualizada com a data de início da sprint.
- `In Progress`: Contém as tarefas em andamento durante a sprint atual.
- `Validating`: Contém as tarefas que precisam ser testadas.
- `Done`: Contém todas as tarefas finalizadas, independentemente da sprint.

Ao receber uma tarefa que estará listada na coluna "To-do", a pessoa estudante deverá clonar o repositório localmente e criar uma nova **branch** de `feature` a partir da **branch** `develop` para trabalhar na funcionalidade. Após concluir a implementação, o desenvolvedor deve realizar um **commit** e, em seguida, fazer o merge da **branch** `feature` criada com a **branch** `develop`. Somente após a conclusão e testes da versão do projeto é que se deve fazer o merge da `develop` com a `main` para seguir com o fluxo normal do projeto.

<br>

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/107289791/8f8e24cc-1ceb-4e79-8b3d-594ded6a7d24)


<br>

<p align="center">Figura 03 - Representação do Quadro de Gerenciamento</p align="center">

### Relação de Ambientes de Trabalho

Abaixo segue a tabela de relação dos ambientes e plataformas que serão utilizados em todo o desenvolvimento do projeto.

| Ambiente                        | Plataforma           |
|---------------------------------|----------------------|
| Repositório de código fonte     | [Github](https://github.com/)               |
| Documentos do projeto           | [Github](https://github.com/) - [Google Docs](https://www.google.com/docs/about/)              |
| Projeto de Interface e Wireframes | [Figma](https://www.figma.com/) - [Draw.io](https://app.diagrams.net/)             |
| Gerenciamento do Projeto        | [Trello](https://trello.com/pt-BR) |
| Modelagem de Processos          | [Camunda](https://console.cloud.camunda.io/)              |

<br>

### Ferramentas

Abaixo está a correlação das ferramentas utilizadas no projeto, e suas funções correspondentes:

| Função                                 | Ferramentas                                      |
|----------------------------------------|--------------------------------------------------|
| Editor de código                        | [Visual Studio Code](https://code.visualstudio.com/) - [Android Studio](https://developer.android.com/studio) - [Expo](https://expo.dev/) - [Github](https://github.com/)   |
| Ferramentas de comunicação              | [Discord](https://discord.com/) - [Teams](https://www.microsoft.com/pt-br/microsoft-teams/)                             |
| Ferramentas de diagramação              | [Lucidchart](https://www.lucidchart.com/pages/pt) - [Draw.io](https://app.diagrams.net/) - [ProjectLibre](https://www.projectlibre.com/) - [Office365](https://www.office.com/)                         |
| Ferramentas de modelagem de processos   | [Camunda](https://console.cloud.camunda.io/)                             |
| Ferramentas de gestão de projetos       | [Trello](https://trello.com/pt-BR)                                     |

<br>
Foram escolhidos editores de código que se destacam por sua integração com o sistema de versionamento e pela facilidade de colaboração da equipe na elaboração do código. Da mesma forma, as ferramentas de comunicação foram selecionadas devido à sua capacidade de integração, o que simplifica a comunicação interna entre os membros da equipe.
Além disso, as ferramentas utilizadas para criação de diagramas e modelagem de processos foram escolhidas com base na sua capacidade de atender às necessidades específicas da solução em desenvolvimento. Elas oferecem uma visualização aprimorada do produto final e permitem que a equipe colabore de forma simultânea, transformando o processo em uma experiência colaborativa.
