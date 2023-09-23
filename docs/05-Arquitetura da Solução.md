# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/107289791/8fca773e-e703-4e00-9dc9-7bd7945e9c32)


## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/107289791/8938c139-1ab5-4264-b14d-21b4176366e7)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/96087622/3c60ea66-c4e1-44f6-8c80-960443d901e7)


## Modelo Físico

[Modelo Físico](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/tree/feature-158/src/db/banco.sql)

## Tecnologias Utilizadas

Nossa solução envolve uma variedade de tecnologias que abrangem o desenvolvimento móvel, design de interface, gerenciamento de banco de dados, controle de versão e muito mais. Abaixo, listamos as principais tecnologias que estamos utilizando para implementar nossa solução:

### Ambiente de Desenvolvimento
- **Expo:** Utilizamos o Expo para simplificar o desenvolvimento e os testes durante a fase de prototipagem e desenvolvimento inicial. Facilita a visualização da nossa aplicação em dispositivos móveis em tempo real.
- **IDEs**
  - **Android Studio:** Para o desenvolvimento de componentes específicos para Android, como módulos nativos, o Android Studio é uma ferramenta essencial.
  - **Visual Studio Code:** O Visual Studio Code oferece uma experiência de desenvolvimento eficiente, suportando JavaScript, React Native e uma ampla variedade de extensões úteis.


### Desenvolvimento Mobile
- **React Native:** Utilizamos o React Native como a base para o desenvolvimento de nosso aplicativo móvel. Ele nos permite criar aplicativos para iOS e Android com uma única base de código, economizando tempo e recursos.

- **React Native Paper:** Para fornecer uma interface de usuário consistente e atraente, adotamos o React Native Paper como uma biblioteca de componentes de interface de usuário.

### Desenvolvimento Backend e Banco de Dados
- **Node.js:** Para o desenvolvimento do backend, escolhemos Node.js devido à sua eficiência e vasta comunidade de desenvolvedores.

- **SQLite:** Como banco de dados, utilizamos o SQLite por ser leve e fácil de integrar com aplicativos React Native. É adequado para aplicações de médio porte e oferece desempenho sólido.

- **Sequelize:** Para gerenciar a camada de acesso ao banco de dados, optamos pelo Sequelize, um ORM (Object-Relational Mapping) que simplifica as operações de banco de dados e melhora a segurança.

### Design e Prototipagem
- **Figma:** Para o design de interface de usuário e a prototipagem de telas, escolhemos o Figma. Ele permite a colaboração em tempo real e a criação de interfaces visualmente atraentes.
### Controle de Versão
- **GitHub:** Utilizamos o GitHub como nossa plataforma de controle de versão, permitindo que nossa equipe colabore de forma eficaz e mantenha um registro completo de todas as alterações no código-fonte.

- **Git:** O Git é a ferramenta de controle de versão subjacente que usamos em conjunto com o GitHub para gerenciar nossos repositórios e controlar o histórico de alterações.

### Gerenciamento de Projeto
- **Trello:** O Trello será usado como ferramenta de gerenciamento de projeto. Ele nos ajudará a organizar tarefas, atribuir responsabilidades e acompanhar o progresso do projeto.

## Hospedagem

A hospedagem da aplicação será uma parte crítica da infraestrutura do nosso projeto. Optamos por uma abordagem que oferece flexibilidade e controle, permitindo que o próprio grupo configure e gerencie o ambiente de hospedagem. Aqui estão os detalhes sobre como a aplicação será hospedada:

**Infraestrutura de Hospedagem**
  - Utilizaremos uma Virtual Private Server (VPS) com o sistema operacional Ubuntu como base para hospedar nossa aplicação. A escolha de uma VPS nos permite ter total controle sobre o ambiente, incluindo a capacidade de configurar o servidor de acordo com as necessidades específicas do nosso aplicativo.

**Containers**
- Para garantir a isolamento e a portabilidade da nossa aplicação, optamos por executá-la em um container Docker na VPS. O Docker é uma tecnologia de contêinerização que nos permite empacotar todos os componentes necessários da aplicação em um ambiente isolado e leve. Isso simplifica a implantação e a escalabilidade da aplicação.

**Configuração da VPS**
- O grupo será responsável por configurar a VPS com Ubuntu, incluindo a instalação de todas as dependências necessárias para o nosso aplicativo. Isso pode incluir a instalação de um servidor web, um banco de dados, bibliotecas e ferramentas específicas.

**Implantação**
- A implantação da aplicação será realizada diretamente na VPS. O grupo fará o upload dos contêineres Docker contendo a aplicação e suas dependências para a VPS. Em seguida, os contêineres serão executados na VPS para tornar a aplicação acessível pela rede.

**Segurança**
- A segurança da VPS será uma prioridade. Serão implementadas práticas recomendadas de segurança, como firewalls, atualizações de segurança regulares e proteção contra ameaças cibernéticas.

**Escalabilidade**
- A infraestrutura será configurada de forma a permitir a escalabilidade da aplicação. Isso significa que, se necessário, poderemos adicionar recursos adicionais à VPS ou replicar a aplicação em várias instâncias para lidar com um aumento na carga de trabalho.

<br>
Em resumo, optamos por hospedar nossa aplicação em uma VPS com Ubuntu, executando-a em containers Docker para isolamento e flexibilidade. Isso nos permite ter total controle sobre o ambiente de hospedagem, garantindo que possamos atender às necessidades específicas do nosso projeto. O grupo será responsável pela configuração, implantação, gerenciamento e segurança da infraestrutura de hospedagem, garantindo que nossa aplicação seja executada de forma eficaz e segura.

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 31 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas subcaracterísticas, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

## Justificativa

Dentre as 31 subcaracterísticas elencadas pela ISO IEC 25010/2011, optamos por selecionar 11 delas por entendermos que são as essenciais para apontarmos a qualidade do produto e seu sucesso no momento da entrega para o cliente.

## Método de Avaliação Escolhido

Serão aplicados Questionários Qualitativos para 5 Desenvolvedores e 5 Usuários. Os desenvolvedores avaliarão os quesitos intrínsecos (código e arquitetura) e os usuários avaliarão os quesitos extrínsecos (aqueles aparentes no aplicativo).

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/f53cb8eb-45cb-451e-a853-a16ac9a5ee36)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/c9a9f01a-ab29-4bac-a34d-adda1a5c86d8)


## Critérios e Métricas

Serão adotadas pontuações para os atributos de qualidade, permitindo assim termos a pontuação por cada Subcaracterísticas. São elas:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/704f6ea8-ab21-4b9d-b8e5-0e8784b6d63d)

O cálculo dessa pontuação será realizado por meio da planilha abaixo, a qual está configurada para apurar a pontuação final conforme critério definido pela 2Gather, sendo: Ao informarmos a o resultado dos Questionários aplicados, teremos então a pontuação obtida por cada subcaracterística. Na sequência teremos a pontuação da Característica que será a média das suas Subcaracterísticas. Por fim, faremos a média das 7 características, que será a pontuação da "QS" Qualidade do Software. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/946135ed-2e65-4900-a464-c3babfc7277b)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/3ecf060d-a49c-4647-be8d-53b62869380b)

Após a consolidação da pontuação obtida com os questionários respondidos, verificaremos a pontuação final da "QS" e compararemos com a Tabela "INDICADOR DE QUALIDADE":

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/6f86572f-86c4-4bef-8d19-1994a2a16945)

Feito esta análise, teremos o resultado da aferição da Qualidade do Software desenvolvido.

