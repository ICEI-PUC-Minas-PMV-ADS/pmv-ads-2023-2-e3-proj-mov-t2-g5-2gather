# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-01 - Mensagens em Tempo Real	|RF-01 – A aplicação deve permitir ao usuário trocar mensagens em tempo real.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se os usuários conseguem trocar mensagens em tempo real.	|<ol><li>Acessar a aplicação</li><li>Realizar login</li><li>Abrir uma conversa ou grupo</li><li>Enviar uma mensagem</li><li>Verificar se a mensagem é recebida pelo outro usuário imediatamente</li></ol> |	A mensagem enviada deve ser exibida na conversa do outro usuário imediatamente após o envio.
| Registro da tela: | ![Enviar mensagem - Falha](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114435981/76147c01-d99b-4efb-9649-d9f7fbe0795f)  | Data do Teste: 15/11/2023 - Resultado: Negativo - Ocorreu um erro no simulador ao tentar encaminhar e mensagem | Grave |


<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-02.1 - Adicionar Usuário na Interface Administrativa |RF-02 – A aplicação deve ter uma interface administrativa para gerenciar os usuários.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se a interface administrativa permite adicionar um usuário. |<ol><li>Acessar a aplicação com uma conta administrativa</li><li>Navegar até a seção de gerenciamento de usuários</li><li>Adicionar um novo usuário</li></ol> |	O usuário deve ser adicionado sem erros e deve aparecer na lista de usuários.
| Registro da tela: | ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/107289791/94860bc8-5963-4ba5-a379-22644d081e3f) | Data do Teste: 14/10/2023 - Resultado: Negativo - O usuário logado com a conta administrativa consegue navegar até a sessão de Gerenciamento de Usuário e realizar o cadastro de um novo usuário. Mas não consegue visualizar o usuário na lista de usuários como a seção de Contatos ainda não foi implementada. | Grave |
||
| Registro da tela: | ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/b1fe467f-3191-4a82-a11f-f236cdf95b0d) | Data do Teste: 01/11/2023 - Resultado: Positivo - O usuário logado com a conta administrativa consegue navegar até a sessão de Gerenciamento de Usuário e realizar o cadastro de um novo usuário e o visualiza na lista de Contatos/Nova Conversa. | Sucesso |
||
| Registro da tela: | ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/30d1370c-1ff9-4548-ac4c-9ea113dec21b) | Data do Teste: 01/11/2023 - Resultado: Positivo - O usuário cadastrado é visualizado na lista de usuários na seção de Contatos/Nova Conversa. | Sucesso |
||

<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-02.2 - Editar Usuário na Interface Administrativa |RF-02 – A aplicação deve ter uma interface administrativa para gerenciar os usuários.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se a interface administrativa permite editar um usuário. |<ol><li>Acessar a aplicação com uma conta administrativa</li><li>Navegar até a seção de gerenciamento de usuários</li><li>Editar um usuário existente</li></ol> |	As alterações feitas no usuário devem ser salvas e refletidas na lista de usuários.
| Registro da tela: | ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/107289791/a1784757-46ab-42e6-9b57-c7f952a84f19) | Data do Teste: 14/10/2023 - Resultado: Negativo - O usuário logado com a conta administrativa consegue acessar a página de Editar Usuário a partir da seção de Gerenciamento de Usuário, porém a integração da página com a API da aplicação ainda não foi realizada. | Grave |
| Registro da tela: |![Edição de usuário - Falha](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114435981/7757046f-5d3e-4b85-ae5f-525011900a04) | Data do Teste: 15/11/2023 - Resultado: Negativo - O usuário logado com a conta administrativa consegue acessar a página de Editar Usuário a partir da seção de Gerenciamento de Usuário, porém a integração da página com a API da aplicação ainda não foi realizada. | Grave |


<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-02.3 - Inativar Usuário na Interface Administrativa |RF-02 – A aplicação deve ter uma interface administrativa para gerenciar os usuários.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se a interface administrativa permite inativar um usuário. |<ol><li>Acessar a aplicação com uma conta administrativa</li><li>Navegar até a seção de gerenciamento de usuários</li><li>Inativar um usuário</li></ol> |	O usuário deve ser inativado da lista de usuários e não deve mais ter acesso ao sistema.
| Registro da tela: | ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/107289791/4d2709eb-8b46-49e2-a236-7d486ed38916) | Data do Teste: 14/10/2023 - Resultado: Positivo - O usuário logado com a conta administrativa consegue acessar a página de Inativar Usuário a partir da seção de Gerenciamento de Usuário, e inativar o usuário desejado | Sucesso |
||

<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-03 - Criação de Grupos |RF-03 – A aplicação deve permitir a criação de grupos.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se os usuários podem criar grupos.	|<ol><li>Acessar a aplicação</li><li>Realizar login</li><li>Navegar até a seção de grupos</li><li>Criar um novo grupo</li><li>Enviar uma mensagem para o grupo criado.</li></ol> |	A mensagem deve ser enviada e visível para os membros do grupo.
| Registro da tela: | ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/1830bac7-8161-4ef3-8eed-74ed10ecf453) | Data do Teste: 01/11/2023 - Positivo - O usuário Admin consegue criar o Grupo com sucesso, dando nome a ele e tem a flexibilidade de selecionar e desfazer a seleção em poucos clicks antes de realizar a sua criação. | Sucesso |
||

<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-04 - Criação de Listas de Transmissão	|RF-04 – A aplicação deve permitir criar listas de transmissões.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se os usuários podem criar listas de transmissão.	|<ol><li>Acessar a aplicação</li><li>Realizar login</li><li>Navegar até a seção de listas de transmissão</li><li>Criar uma nova lista</li><li>Enviar uma mensagem através da lista de transmissão criada.</li></ol>	| A mensagem deve ser enviada e recebida pelos membros da lista de transmissão.
| Registro da tela: | ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/c520a23c-fbb4-423d-aafa-dc2e6c80df09) | Data do Teste: 01/11/2023 - Positivo - O usuário Admin consegue criar a Lista de Transmissão com sucesso, dando nome a ela e tem a flexibilidade de selecionar e desfazer a seleção em poucos clicks antes de realizar a sua criação. | Sucesso |
||

<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-05 - Restrição de Envio em Listas de Transmissão	|RF-05 – A aplicação deve permitir apenas aos administradores da lista de transmissão enviar mensagens.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se apenas administradores podem enviar mensagens em listas de transmissão.	|<ol><li>Acessar a aplicação com uma conta não administrativa</li><li>Realizar login</li><li>Navegar até uma lista de transmissão</li><li>Tentar enviar uma mensagem</li></ol> |	O usuário não administrador não deve ser capaz de enviar mensagens em listas de transmissão.
| Registro da tela: | ![Enviar mensagem - Falha](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114435981/8d6848e4-02e1-4b4a-ad05-20bfb11d2846) | Data do Teste: 15/11/2023 - Resultado: Negativo - Não foi possivel realizar o teste, foi apresentado um erro ao emular o aplicativo.| Grave |
|||

<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-06 - Confirmação de Leitura	|RF-06 – A aplicação deve permitir ao interlocutor obter uma confirmação de leitura de seu destinatário.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se o interlocutor recebe confirmação de leitura.	|<ol><li>Acessar a aplicação</li><li>Realizar login</li><li>Enviar uma mensagem para outro usuário</li><li>Esperar que o outro usuário leia a mensagem</li></ol> |	Deve aparecer uma confirmação (por exemplo, dois tiques azuis) indicando que a mensagem foi lida pelo destinatário.
| Registro da tela: | ![Enviar mensagem - Falha](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114435981/8d6848e4-02e1-4b4a-ad05-20bfb11d2846) | Data do Teste: 15/11/2023 - Resultado: Negativo - Não foi possivel realizar o teste, foi apresentado um erro ao emular o aplicativo. | Grave |
|||

<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-07 - Notificações de Mensagens	|RF-07 – A aplicação deve disparar notificações de mensagens.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se o usuário recebe notificações de novas mensagens.	|<ol><li>Acessar a aplicação em um dispositivo</li><li>Realizar login</li><li>Com outro usuário, enviar uma mensagem para o primeiro usuário</li></ol> |	O usuário destinatário deve receber uma notificação indicando que uma nova mensagem foi recebida.
| Registro da tela: | ![Enviar mensagem - Falha](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114435981/8d6848e4-02e1-4b4a-ad05-20bfb11d2846) | Data do Teste: 15/11/2023 - Resultado: Negativo - Não foi possivel realizar o teste, foi apresentado um erro ao emular o aplicativo. | Grave |
||

<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-08 - Visualização de Informações dos Usuários	|RF-08 – A aplicação deve permitir visualizar informações básicas dos usuários.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se é possível visualizar informações básicas dos usuários.	|<ol><li>Acessar a aplicação</li><li>Realizar login</li><li>Navegar até o perfil de um usuário</li></ol>	| Deve ser possível visualizar informações básicas, como nome, foto e status do usuário selecionado.
| Registro da tela: | ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/b1f8bb0a-6f04-4d49-95f2-01bf4218bd29) | Data do Teste: 01/11/2023 - Positivo - O usuário ao clicar sobre a foto dos demais usuários, na tela de Contatos, ele consegue visualizar as informações básicas destes usuários. | Sucesso |
||

<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-09.1 - Login com Dados inválidos	|RF-09 – A aplicação deve requerer senha para fazer login e que seja criptorgrafada.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se a autenticação de e-mail e senha é negada para dados inválidos.	|<ol><li>Acessar a aplicação</li><li>Tentar realizar o primeiro login com dados inválidos</li></ol> |	O usuário não deve conseguir acessar a aplicação e deve receber uma mensagem de erro ou aviso.
| Registro da tela: | ![Login ](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114435981/355b6422-54d0-4ed6-99d8-9dfc63b25dba) | Data do Teste: 15/11/2023 - Resultado: Positivo - O aplicativo negou login com as credênciais incorretas e emitiu um aviso. | XXX | ||


<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-09.2 - Login com Dados válidos|RF-09 – A aplicação deve requerer senha para fazer login e que seja criptorgrafada.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se a autenticação de e-mail e senha é negada para dados válidos.	|<ol><li>Acessar a aplicação</li><li>Realizar o  login fornecendo os dados corretos </li></ol> |	O usuário deve ser capaz de acessar a aplicação.
| Registro da tela: | ![Login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114435981/17d315cf-3443-4c13-ac4b-35121d5167b0) | Data do Teste: 15/11/2023 - Resultado: Positivo - O aplicativo aprovou login com as credênciais corretas. | 

<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-10 - Troca de senha pessoal	|RF-10 – A aplicação deve permitir que o usuário consiga trocar sua senha pessoal.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se é possível que o usuário troque sua senha.	|<ol><li>Acessar a aplicação</li><li>Realizar login</li><li>Acessar o botão 'configuraçõe' na HomePage</li><li>Clicar no botão "Trocar a senha"</li><li>Redefinir a senha e salvar</li></ol> |	A solicitação de troca deve ocorrer com sucesso e exibir o alerta de troca efetuada.
| Registro da tela: |  ![Alteração de senha](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114435981/d079c33b-41ba-44de-96ab-a3bf293eaf04)| Data do Teste: 15/11/2023 - Resultado: Positivo - A troca de senha foi efetuada com sucesso | XXX |||

<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-11.1 - Adicionar Canal de Chat	|RF-11 – A aplicação deve permitir gerenciar canais de chat com funções de administração.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se é possível adicionar um canal de chat.	|<ol><li>Acessar a aplicação com uma conta administrativa</li><li>Navegar até a seção de canais de chat</li><li>Adicionar um novo canal</li></ol> |	O canal deve ser criado e aparecer na lista de canais.
| Registro da tela: | ![Criação de Lista de transmissão](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114435981/9cc5721a-5d28-478a-8638-84eaf26f6534) | Data do Teste: 15/11/2023 - Resultado: Positivo - Foi possivel adicionar uma nova lista de transmissão | 

<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-11.2 - Editar Canal de Chat	|RF-11 – A aplicação deve permitir gerenciar canais de chat com funções de administração.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se é possível editar um canal de chat.	|<ol><li>Acessar a aplicação com uma conta administrativa</li><li>Navegar até a seção de canais de chat</li><li>Editar um canal existente</li></ol> |	As alterações feitas no canal devem ser salvas e refletidas na lista de canais.
| Registro da tela: | ![Edição de lista de transmissão](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114435981/cdf9399b-eb91-41a8-8780-64ee2bf7c37a) | Data do Teste: 15/11/2023 - Resultado: Positivo - Foi possivel editar uma lista de transmissão e grupos de conversas | 
<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-11.3 - Arquivar Canal de Chat	|RF-11 – A aplicação deve permitir gerenciar canais de chat com funções de administração.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se é possível arquivar um canal de chat.	|<ol><li>Acessar a aplicação com uma conta administrativa</li><li>Navegar até a seção de canais de chat</li><li>Arquivar um canal</li></ol> |	O canal deve ser arquivado da lista de canais.
| Registro da tela: |![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114435981/0b3c76b2-b520-4fce-b2d0-b24e0d52c309) | Data do Teste: 17/11/2023 - Resultado: Positivo - Foi possivel arquivar lista de transmissão e grupos de conversas| 

<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-NF01 - Responsividade	|RNF-01 – A aplicação deverá ser responsiva permitindo a visualização em diversos dispositivos móveis de forma adequada.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se a aplicação é responsiva em diferentes dispositivos móveis.	|<ol><li>Acessar a aplicação em um smartphone</li><li>Acessar a aplicação em um tablet</li><li>Verificar a exibição e funcionalidade em ambos os dispositivos</li></ol> |	A aplicação deve se adaptar corretamente ao tamanho da tela e ser totalmente funcional em ambos os dispositivos.
| Registro da tela: | ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/107289791/37f43554-5725-492b-ba5e-d2a5d94e51c6) ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/107289791/1a05d5c7-fac4-42d0-999f-d0bc5c9ba63d) | Data do Teste: 14/10/2023 - Resultado: Positivo - A tela se adapta para diferentes dispositivos móveis, como diferentes modelos de smartphones e tablets | Sucesso |
||

<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-NF02 - Criptografia de Ponta a Ponta	|RNF-02 – A aplicação deve usar criptografia de ponta a ponta para proteger as mensagens de funcionários autorizados.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se as mensagens são criptografadas de ponta a ponta.	|<ol><li>Acessar a aplicação</li><li>Realizar login</li><li>Enviar uma mensagem</li><li>Interceptar a mensagem usando uma ferramenta de monitoramento de rede</li></ol> |	A mensagem interceptada deve estar criptografada e não deve ser legível sem a chave de descriptografia apropriada.
| Registro da tela: |  | Data do Teste: XX/XX/XXXX - Resultado: XXX - Descrição | XXX |
||

<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-NF03 - Tempo de Resposta	|RNF-03 – A aplicação não deve ter tempo de resposta maior do que 30 segundos.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar o tempo de resposta da aplicação.	|<ol><li>Acessar a aplicação</li><li>Realizar várias ações, como enviar mensagens, criar grupos, etc.</li><li>Monitorar o tempo de resposta para cada ação</li></ol> |	Nenhuma ação deve levar mais de 30 segundos para ser concluída.
| Registro da tela: | ![Inativar usuário](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114435981/109a3d42-f1da-401c-832c-9c9264ff7d82) | Data do Teste: 15/11/2023 - Resultado: Positivo - Foi possivel efetuar todos os testes com tempo inferior a 30 segundos | XXX |
||

<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-NF04 - Disponibilidade	|RNF-04 – A aplicação deve estar acessível e sem interrupções por pelo menos 95% do tempo, apresentando um tempo de inatividade mínimo.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar a disponibilidade da aplicação.	|<ol><li>Monitorar a aplicação continuamente por um período de 7 dias</li><li>Registrar qualquer tempo de inatividade</li></ol> |	A aplicação deve estar disponível por pelo menos 95% do tempo monitorado.
| Registro da tela: | ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/107289791/523891c7-e02c-43ac-a7ef-c5ec4850fa81) | Data do Teste: 14/10/2023 - Resultado: Positivo - O servidor no qual a aplicação está hospedada possui disponibilidade de 100,00% nos últimos 90 dias, e como a aplicação esteve rodando em um container nos últimos 7 dias e não foi interrompido ela cumpre o período de 7 dias.  | Sucesso |
||

<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-NF05 - Contraste	|RNF-05 – A aplicação deve ter bom nível de contraste entre os elementos da tela em conformidade.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar o contraste entre os elementos da tela.	|<ol><li>Acessar a aplicação</li><li>Navegar por diferentes seções e páginas</li><li>Usar uma ferramenta de análise de contraste para avaliar os elementos da tela</li></ol> |	Todos os elementos da tela devem atender aos padrões de contraste recomendados.
| Registro da tela: | ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/107289791/9276b22c-24ff-4400-ac2d-765ff414fbbe) | Data do Teste: 14/10/2023 - Resultado: Positivo -A padronização das telas, com seções usando a paleta de cores escolhida para a aplicação, possui bom contraste com os demais elementos na tela | Sucesso |
||

<br>

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-NF06 - Funcionamento Offline	|RNF-06 – A aplicação deve ter um funcionamento restrito sem conexão com internet e irrestrito com conexão com a internet.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar o funcionamento da aplicação offline e online.	|<ol><li>Acessar a aplicação com conexão à internet</li><li>Verificar funcionalidades</li><li>Desconectar da internet</li><li>Acessar a aplicação novamente</li><li>Verificar funcionalidades restritas</li></ol> |	A aplicação deve ter funcionalidades restritas quando offline e todas as funcionalidades disponíveis quando online.
| Registro da tela: | ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114435981/1b3563b3-4855-4a15-b19a-ce18fa822d2a)| Data do Teste: 17/11/2023 - Resultado: Positivo - Sem acesso à internet não foi possivel iniciar a aplicação e com a internet foi possivel acessar de livremente. | 
<br>
