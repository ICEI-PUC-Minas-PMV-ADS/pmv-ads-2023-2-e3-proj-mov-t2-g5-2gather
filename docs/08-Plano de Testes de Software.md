# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Para a realização dos Testes de Software, adotaremos os seguintes requisitos:
 * Dispositivo móvel compatível com o aplicativo (Android).
 * Versão atualizada do sistema operacional do dispositivo.
 * Conectividade de Internet para acesso às plataformas.

Os Casos de Testes serão realizados utilizando dados Válidos e Inválidos, conforme descritos a seguir:

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-01 - Mensagens em Tempo Real	|RF-01 – A aplicação deve permitir ao usuário trocar mensagens em tempo real.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se os usuários conseguem trocar mensagens em tempo real.	|<ol><li>Acessar a aplicação</li><li>Realizar login</li><li>Abrir uma conversa ou grupo</li><li>Enviar uma mensagem</li><li>Verificar se a mensagem é recebida pelo outro usuário imediatamente</li></ol> |	A mensagem enviada deve ser exibida na conversa do outro usuário imediatamente após o envio.

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-02 - Interface Administrativa	|RF-02 – A aplicação deve ter uma interface administrativa para gerenciar os usuários.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se existe uma interface administrativa e se ela permite gerenciar usuários.	|<ol><li>Acessar a aplicação com uma conta administrativa</li><li>Navegar até a seção de gerenciamento de usuários</li><li>Adicionar, editar e remover um usuário</li></ol> |	A interface administrativa deve permitir a adição, edição e remoção de usuários sem erros.

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-03 - Criação de Grupos	|RF-03 – A aplicação deve permitir a criação de grupos.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se os usuários podem criar grupos.	|<ol><li>Acessar a aplicação</li><li>Realizar login</li><li>Navegar até a seção de grupos</li><li>Criar um novo grupo</li></ol> |	Um novo grupo deve ser criado e visível para o usuário.

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-04 - Criação de Listas de Transmissão	|RF-04 – A aplicação deve permitir criar listas de transmissões.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se os usuários podem criar listas de transmissão.	|<ol><li>Acessar a aplicação</li><li>Realizar login</li><li>Navegar até a seção de listas de transmissão</li><li>Criar uma nova lista</li></ol>	| Uma nova lista de transmissão deve ser criada e visível para o usuário.

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-05 - Restrição de Envio em Listas de Transmissão	|RF-05 – A aplicação deve permitir apenas aos administradores da lista de transmissão enviar mensagens.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se apenas administradores podem enviar mensagens em listas de transmissão.	|<ol><li>Acessar a aplicação com uma conta não administrativa</li><li>Realizar login</li><li>Navegar até uma lista de transmissão</li><li>Tentar enviar uma mensagem</li></ol> |	O usuário não administrador não deve ser capaz de enviar mensagens em listas de transmissão.

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-06 - Confirmação de Leitura	|RF-06 – A aplicação deve permitir ao interlocutor obter uma confirmação de leitura de seu destinatário.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se o interlocutor recebe confirmação de leitura.	|<ol><li>Acessar a aplicação</li><li>Realizar login</li><li>Enviar uma mensagem para outro usuário</li><li>Esperar que o outro usuário leia a mensagem</li></ol> |	Deve aparecer uma confirmação (por exemplo, dois tiques azuis) indicando que a mensagem foi lida pelo destinatário.

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-07 - Notificações de Mensagens	|RF-07 – A aplicação deve disparar notificações de mensagens.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se o usuário recebe notificações de novas mensagens.	|<ol><li>Acessar a aplicação em um dispositivo</li><li>Realizar login</li><li>Com outro usuário, enviar uma mensagem para o primeiro usuário</li></ol> |	O primeiro usuário deve receber uma notificação indicando que uma nova mensagem foi recebida.

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-08 - Visualização de Informações dos Usuários	|RF-08 – A aplicação deve permitir visualizar informações básicas dos usuários.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se é possível visualizar informações básicas dos usuários.	|<ol><li>Acessar a aplicação</li><li>Realizar login</li><li>Navegar até o perfil de um usuário</li></ol>	| Deve ser possível visualizar informações básicas, como nome, foto e status do usuário selecionado.

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-09 - Autenticação de Dois Fatores	|RF-09 – A aplicação deve requerer autenticação de dois fatores no primeiro login do usuário.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se a autenticação de dois fatores é solicitada no primeiro login.	|<ol><li>Acessar a aplicação</li><li>Tentar realizar o primeiro login</li></ol> |	O usuário deve ser solicitado a fornecer um segundo fator de autenticação (por exemplo, um código enviado por SMS) antes de poder acessar a aplicação.

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-10 - Status de Prioridade nas Mensagens	|RF-10 – A aplicação deve permitir a definição de status de prioridade nas mensagens.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se é possível definir um status de prioridade ao enviar uma mensagem.	|<ol><li>Acessar a aplicação</li><li>Realizar login</li><li>Escrever uma mensagem</li><li>Definir um status de prioridade para a mensagem</li><li>Enviar a mensagem</li></ol> |	A mensagem enviada deve exibir o status de prioridade definido pelo usuário.

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-11 - Gerenciamento de Canais de Chat	|RF-11 – A aplicação deve permitir gerenciar canais de chat com funções de administração.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se é possível gerenciar canais de chat e suas funções administrativas.	|<ol><li>Acessar a aplicação com uma conta administrativa</li><li>Navegar até a seção de canais de chat</li><li>Adicionar, editar e remover um canal</li><li>Definir funções administrativas para o canal</li></ol> |	O canal de chat deve ser criado, editado ou removido conforme as ações do usuário, e as funções administrativas devem ser aplicadas corretamente.


| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-NF01 - Responsividade	|RNF-01 – A aplicação deverá ser responsiva permitindo a visualização em diversos dispositivos móveis de forma adequada.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se a aplicação é responsiva em diferentes dispositivos móveis.	|<ol><li>Acessar a aplicação em um smartphone</li><li>Acessar a aplicação em um tablet</li><li>Verificar a exibição e funcionalidade em ambos os dispositivos</li></ol> |	A aplicação deve se adaptar corretamente ao tamanho da tela e ser totalmente funcional em ambos os dispositivos.

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-NF02 - Criptografia de Ponta a Ponta	|RNF-02 – A aplicação deve usar criptografia de ponta a ponta para proteger as mensagens de funcionários autorizados.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se as mensagens são criptografadas de ponta a ponta.	|<ol><li>Acessar a aplicação</li><li>Realizar login</li><li>Enviar uma mensagem</li><li>Interceptar a mensagem usando uma ferramenta de monitoramento de rede</li></ol> |	A mensagem interceptada deve estar criptografada e não deve ser legível sem a chave de descriptografia apropriada.

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-NF03 - Tempo de Resposta	|RNF-03 – A aplicação não deve ter tempo de resposta maior do que 30 segundos.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar o tempo de resposta da aplicação.	|<ol><li>Acessar a aplicação</li><li>Realizar várias ações, como enviar mensagens, criar grupos, etc.</li><li>Monitorar o tempo de resposta para cada ação</li></ol> |	Nenhuma ação deve levar mais de 30 segundos para ser concluída.

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-NF04 - Disponibilidade	|RNF-04 – A aplicação deve estar acessível e sem interrupções por pelo menos 95% do tempo, apresentando um tempo de inatividade mínimo.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar a disponibilidade da aplicação.	|<ol><li>Monitorar a aplicação continuamente por um período de 7 dias</li><li>Registrar qualquer tempo de inatividade</li></ol> |	A aplicação deve estar disponível por pelo menos 95% do tempo monitorado.

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-NF05 - Contraste	|RNF-05 – A aplicação deve ter bom nível de contraste entre os elementos da tela em conformidade.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar o contraste entre os elementos da tela.	|<ol><li>Acessar a aplicação</li><li>Navegar por diferentes seções e páginas</li><li>Usar uma ferramenta de análise de contraste para avaliar os elementos da tela</li></ol> |	Todos os elementos da tela devem atender aos padrões de contraste recomendados.

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-NF06 - Funcionamento Offline	|RNF-06 – A aplicação deve ter um funcionamento restrito sem conexão com internet e irrestrito com conexão com a internet.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar o funcionamento da aplicação offline e online.	|<ol><li>Acessar a aplicação com conexão à internet</li><li>Verificar funcionalidades</li><li>Desconectar da internet</li><li>Acessar a aplicação novamente</li><li>Verificar funcionalidades restritas</li></ol> |	A aplicação deve ter funcionalidades restritas quando offline e todas as funcionalidades disponíveis quando online.

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-RE01 - Tecnologias Utilizadas	|RE-02 – A aplicação deve fazer uso das tecnologias apresentadas até o eixo 3 do curso.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se as tecnologias utilizadas estão em conformidade com o especificado.	|<ol><li>Revisar a documentação técnica do projeto</li><li>Verificar as tecnologias e ferramentas utilizadas</li></ol> |	Todas as tecnologias e ferramentas utilizadas devem estar em conformidade com o que foi apresentado até o eixo 3 do curso.
