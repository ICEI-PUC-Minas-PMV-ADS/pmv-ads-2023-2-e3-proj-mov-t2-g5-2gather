
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

<!-- > **Links Úteis**:
> - [Microfundamento: Gerência de Configuração](https://pucminas.instructure.com/courses/87878/)
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
>  - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs) -->

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
<!-- Apresente a divisão de papéis entre os membros do grupo.

Exemplificação: A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. A equipe está organizada da seguinte maneira:
- Scrum Master: Felipe Domingos;
- Product Owner: Rommel Carneiro;
- Equipe de Desenvolvimento: Pedro Penna, Pedro Ivo, Rodrigo Richard;
- Equipe de Design: Simone Nogueira.

<br>

> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)
> - [Os papéis do Scrum e a verdade sobre cargos nessa técnica](https://www.atlassian.com/br/agile/scrum/roles) -->

### Processo

A metodologia de gestão de projeto adotada será o Scrum e o Kanban. Todas as tarefas serão organizadas no Trello, seguindo a estrutura a seguir:

- `Backlog`: Contém todas as atividades que devem ser realizadas no projeto, desde a documentação até o desenvolvimento da aplicação.
- `To-do`: Lista as tarefas definidas previamente para a sprint atual, e deve ser atualizada com a data de início da sprint.
- `In progress`: Contém as tarefas em andamento durante a sprint atual.
- `Validating`: Contém as tarefas que precisam ser testadas.
- `Done`: Contém todas as tarefas finalizadas, independentemente da sprint.

Ao receber uma tarefa que estará listada na coluna "To-do", a pessoa estudante deverá clonar o repositório localmente e criar uma nova **branch** de `feature` a partir da **branch** `develop` para trabalhar na funcionalidade. Após concluir a implementação, o desenvolvedor deve realizar um **commit** e, em seguida, fazer o merge da **branch** `feature` criada com a **branch** `develop`. Somente após a conclusão e testes da versão do projeto é que se deve fazer o merge da `develop` com a `main` para seguir com o fluxo normal do projeto.
 
<!-- > **Links Úteis**:
> - [Planejamento e Gestáo Ágil de Projetos](https://pucminas.instructure.com/courses/87878/pages/unidade-2-tema-2-utilizacao-de-ferramentas-para-controle-de-versoes-de-software)
> - [Sobre quadros de projeto](https://docs.github.com/pt/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Sobre quadros de projeto](https://docs.github.com/pt/github/managing-your-work-on-github/about-project-boards)
> - [Como criar Backlogs no Github](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial Slack](https://slack.com/intl/en-br/) -->

### Relação de Ambientes de Trabalho

Abaixo segue a tabela de relação dos ambientes e plataformas que serão utilizados em todo o desenvolvimento do projeto.

| Ambiente                        | Plataforma           |
|---------------------------------|----------------------|
| Repositório de código fonte     | [Github](https://github.com/)               |
| Documentos do projeto           | [Github](https://github.com/) - [Google Docs](https://www.google.com/docs/about/)              |
| Projeto de Interface e Wireframes | [Figma](https://www.figma.com/) - [Lucidchart](https://www.lucidchart.com/pages/pt)               |
| Gerenciamento do Projeto        | [Trello](https://trello.com/pt-BR) |
| Modelagem de Processos          | [Lucidchart](https://www.lucidchart.com/pages/pt) - [Bpmn.io](https://bpmn.io/)              |

<br>

### Ferramentas

Abaixo está a correlação das ferramentas utilizadas no projeto, e suas funções correspondentes:

| Função                                 | Ferramentas                                      |
|----------------------------------------|--------------------------------------------------|
| Editor de código                        | [Visual Studio Code](https://code.visualstudio.com/) - [Android Studio](https://developer.android.com/studio) - [Github](https://github.com/)   |
| Ferramentas de comunicação              | [Discord](https://discord.com/) - [Teams](https://www.microsoft.com/pt-br/microsoft-teams/)                             |
| Ferramentas de diagramação              | [Lucidchart](https://www.lucidchart.com/pages/pt) - [Bpmn.io](https://bpmn.io/)                            |
| Ferramentas de modelagem de processos   | [Lucidchart](https://www.lucidchart.com/pages/pt) - [Bpmn.io](https://bpmn.io/)                             |
| Ferramentas de gestão de projetos       | [Trello](https://trello.com/pt-BR)                                     |

<br>
Foram escolhidos editores de código que se destacam por sua integração com o sistema de versionamento e pela facilidade de colaboração da equipe na elaboração do código. Da mesma forma, as ferramentas de comunicação foram selecionadas devido à sua capacidade de integração, o que simplifica a comunicação interna entre os membros da equipe.
Além disso, as ferramentas utilizadas para criação de diagramas e modelagem de processos foram escolhidas com base na sua capacidade de atender às necessidades específicas da solução em desenvolvimento. Elas oferecem uma visualização aprimorada do produto final e permitem que a equipe colabore de forma simultânea, transformando o processo em uma experiência colaborativa.