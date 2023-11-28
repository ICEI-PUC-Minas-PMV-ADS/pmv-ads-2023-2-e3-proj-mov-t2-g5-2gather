# Plano de Testes de Usabilidade

O teste de usabilidade permite avaliar a qualidade da interface com o usuário da aplicação interativa. O Plano de Testes de Usuabilidade é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.

## 10.1 Objetivo

Avaliar a experiência do usuário com o sistema, identificando problemas e inconsistências para planejamento de melhorias.

## 10.2 Método Utilizado

Será utilizado o ASQ (After Scenario Questionnaire) que foi desenvolvido por Jim Lewis em 1995 e é utilizada para avaliar a satisfação do usuário de forma rápida e segura.
O método ASQ utiliza três perguntas objetivas após o usuário completar uma tarefa, e pontua em uma escala de “totalmente insatisfeito” a “totalmente satisfeito”. Pontuando assim qualitativamente a experiência do usuário ao efetuar uma tarefa.

Questionário Pós-Cenário (ASQ)
1. Estou satisfeito quanto a facilidade para completar a tarefa.
2. Estou satisfeito quanto ao tempo que levou para completar a tarefa.
3. Estou satisfeito com o nível de suporte e informação enquanto completava.
https://forms.gle/CJLcMeDAKDs2WQGB6

Podendo-se avaliar o resultado de cada resposta isoladamente, e  cada pergunta se refere a uma categoria, sendo: 
(1) facilidade de realização; 
(2) intervalo de tempo em que conseguiu realizar;
e (3) informação de suporte disponível para realizar a tarefa.

Pode-se também avaliar o questionário pós-cenário, pela pontuação total. Cada tarefa tem a pontuação total de 15 pontos, sendo 5 pontos por pergunta.
De 0 à 5 pontos a avaliação de usabilidade é ruim/péssima.
de 5 à 10 pontos a avaliação de usabilidade é Regular/pode melhorar.
de 10 à 15 pontos a avaliação de usabilidade é Boa / ótima.

## 10.3 Roteiro

|Caso de teste | Requisitos Associados  | Objetivo do teste | Tarefa|
|------|-----------------------------------------|----|----|
|CT-01 |RF-01 - A aplicação deve permitir ao usuário trocar mensagens criptografadas em tempo real. | Validar usabilidade de troca de mensagens | Troca de mensagem entre usuários |
|CT-02 |RF-02 - A aplicação deve ter uma interface administrativa para gerenciar os usuários. | Validar usabilidade de gerenciamento de usuários | explorar o gerenciador de usuários|
|CT-03 |RF-03 A aplicação deve permitir a criação de grupos. | Validar usabilidade de criação de grupos |  Criar grupo |
|CT-04 |RF-04 A aplicação deve permitir criar listas de transmissões. | Validar usabilidade de criação de lista de transmissão | Criar Lista de transmissão |
|CT-05 |RF-05 A aplicação deve permitir apenas aos administradores da lista de transmissão enviar mensagens | Validar usabilidade do envio de mensagens na lista de transmissão | Enviar mensagens em lista de transmissão|
|CT-06 |RF-06 A aplicação deve permitir ao interlocutor obter uma confirmação de leitura de seu destinatário. | Validar usabilidade de confirmação de leitura | Verificar confirmação de leitura|
|CT-07 |RF-07 A aplicação deve disparar notificações de mensagens. | Validar usabilidade de notificações | Verificar notificações da aplicação|
|CT-08 |RF-08 A aplicação deve permitir visualizar informações básicas dos usuários. | Validar usabilidade de visualizações de informações de usuários | Ver informações de usuários|
|CT-09 |RF-09 A aplicação deve requerer login com senha criptografada.  | Validar usabilidade de login. | Fazer login|
|CT-10 |RF-10 A aplicação deve permitir que usuário efetue a troca da senha pessoal.  | Validar usabilidade de definição de redefinição de senha | Trocar a senha|
|CT-11 |RF-11 A aplicação deve permitir gerenciar canais de chat com funções de administração.  | Validar usabilidade de gerenciamento de canais de chat | explorar o gerenciamento canais de chat|
|CT-12 |RNF-01 A aplicação deverá ser responsiva permitindo a visualização em diversos dispositivos móveis de forma adequada. | Validar usabilidade de responsividade em dispositivos moveis |Utilizar a aplicação em diferentes dispositivos|
