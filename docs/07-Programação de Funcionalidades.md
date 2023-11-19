# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descrita por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos com os artefatos criados (código fonte), deverão apresentadas as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

### Funcionalidade 01: Fazer Publicações (RF-001)
A funcionalidade permite que o usuário faça uma postagem na pagina de Interações na platarforma da `Study2gether`.

![Publicação de interação](https://user-images.githubusercontent.com/114435981/236596298-7cd632ef-6ee6-4599-a987-28b4ae6e4869.png).

##### Instruções de acesso
1. Acesse o site pelo [Link](http://studytwogether-001-site1.itempurl.com).
2. Clicar em Interações.
3. Clicar em '+' (usuários já cadastrados e previamente logados).

##### Artefatos produzidos
* [Interacoes.cshtml](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Views/Posts/Interacoes.cshtml)
* [PostsController.cs](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Controllers/PostsController.cs)

### Funcionalidade 02: A aplicação deve ter uma interface administrativa para gerenciar os usuários (RF-02)
O sistema deve fornecer uma interface administrativa que permita aos administradores adicionar, editar e inativar usuários do sistema.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/113949375/f913b28d-b5ea-479c-a7de-99f3f1d81afb)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/113949375/25be55d2-cb61-48f8-be66-678e68462ff9)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/113949375/1537e4ec-e73f-4a5f-8b20-4406dac8b6e5)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/113949375/1c73f65b-55bc-47e0-9478-bfb28c10c335)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/113949375/9dab2582-8325-445e-baf5-c0011a6ddfcb)

##### Instruções de acesso
1. Acesse o link fornecido: [Link](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather).
2. Abra a aplicação no VSCode e siga as instruções detalhadas no README disponível em: [README](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/main/README.md).
3. Caso o usuário não esteja logado, realize o login.
4. Após realizar o login como 'ADMINISTRADOR', clique na opção "Gerenciamento de Usuário", localizada na parte inferior da HomePage.
5. Na tela de Gerenciamento de Usuário, o usuário com perfil de ADMINISTRADOR terá a capacidade de executar ações como Criar Usuário, Editar Usuário ou Inativar Usuário.
6. Na interface 'Criar Usuário', o administrador precisa inserir o e-mail corporativo, número de telefone, senha, nome do colaborador e cargo. Posteriormente, deve clicar no botão 'Criar'.
Ao acessar a opção 'Editar Usuário', é necessário selecionar o ID do usuário, e-mail corporativo, senha, nome do colaborador, setor e cargo. Em seguida, o administrador pode clicar em 'Salvar' para aplicar as alterações ou em 'Cancelar' para desfazê-las.
Para 'Inativar Usuário', o administrador deve escolher um usuário específico e fornecer o motivo da inativação. Após isso, pode clicar em 'Inativar' para confirmar a ação ou em 'Cancelar' para anular o processo.

##### Artefatos produzidos
* [UserManagement.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/main/src/2gather/screens/UserManagement.js)
* [CreateUser.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/main/src/2gather/screens/CreateUser.js)
* [EditUser.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/main/src/2gather/screens/EditUser.js)
* [InactivateUser.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/main/src/2gather/screens/InactivateUser.js)

### Funcionalidade 03: Criar Grupos (RF-03)

A funcionalidade permite que os usuários criem Grupos no App da `2Gather`.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/c3452472-21e6-4c1b-b3cc-949ae0374622) ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/2b2e4011-150f-439e-baa6-a3563b09b553) ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/930e0568-7045-4382-bdc0-0a6ae6d202d5)

##### Instruções de acesso
1. Acesse o link [Link](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather).
2. Abra a Aplicação no VSCode e a inicialize conforme descrito detalhadamente no README.
3. Caso usuário não esteja com login efetuado, basta efetuar o `Login`.
4. Com o login já efetuado, clicar em "Grupos" na parte superior da HomePage.
5. Na Tela "Adicione participantes ao Grupo" Selecionar o primeiro participante e na próxima tela incluir outros participantes ao Grupo.
7. Nomear o Grupo e clicar em "Criar"

##### Artefatos produzidos
* [NewGroup.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/develop/src/2gather/screens/NewGroup.js)
* [CreateNewGroup.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/develop/src/2gather/screens/CreateNewGroup.js)
* [group.services.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/develop/src/2gather/services/group.services.js)

### Funcionalidade 04: Criar Lista de Transmissão (RF-04)

A funcionalidade permite que os usuários criem Listas de Transmissão no App da `2Gather`.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/3ee72e73-4708-4fb9-862b-d1ca7896d9ef) ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/d6739eba-c0f1-442d-8cd4-88119844ea69) ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/e6058435-4cb8-425b-8cea-9b76d5d8fa7c)

##### Instruções de acesso
1. Acesse o link [Link](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather).
2. Abra a Aplicação no VSCode e a inicialize conforme descrito detalhadamente no README.
3. Caso usuário não esteja com login efetuado, basta efetuar o `Login`.
4. Com o login já efetuado, clicar em "Lista de Transmissão" na parte superior da HomePage.
5. Na Tela "Listas de transmissão" clicar no botão "Nova lista".
6. Na próxima tela Selecione os destinatários da Lista.
7. Nomear a Lista e clicar em "Criar"

##### Artefatos produzidos
* [NewList.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/develop/src/2gather/screens/NewList.js)
* [CreateReceivers](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/develop/src/2gather/screens/CreateReceivers.js)
* [group.services.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/develop/src/2gather/services/group.services.js)

### Funcionalidade 05: Permitir que apenas os administradores da lista de transmissão possam enviar mensagens (RF-05)

A funcionalidade permite que apenas ao Criador/Administrador da lista de transmissão possa enviar mensagens nesta Lista Criada por ele no App `2Gather`.
Na tela de Listas de Transmissão, se o usuário ainda não criou nenhuma lista, uma mensagem informativa será exibida, destacando que por meio das listas de transmissão, ele poderá enviar mensagens a várias pessoas simultaneamente. Além disso, será apresentado um botão para adicionar uma 'Nova Lista'. Se o usuário já tiver uma ou mais listas criadas, estas serão renderizadas na tela, oferecendo a opção de clicar na lista para enviar mensagens, acessar informações através do ícone 'i', e, no mesmo ícone de informações, editar ou arquivar a lista, será exibido também o botão para adicionar uma 'Nova Lista'. Adicionalmente, caso o usuário possua listas de transmissão 'arquivadas', essas serão renderizadas com um diferencial de background e acompanhadas de uma mensagem informando que estão arquivadas, se o usuário clicar no ícone 'i' de uma lista arquivada, terá a opção de desarquivá-la. É importante destacar que somente as listas criadas pelo próprio usuário serão visíveis nessa tela. As listas em que o usuário é apenas um 'participante/destinatário' serão exibidas diretamente na HomePage. Ele poderá visualizar as mensagens postadas pelo administrador da lista, sem a possibilidade de interação.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/113949375/aae7e268-182f-4cdc-99ae-62aa008ac8dc)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/113949375/1222c5fd-17cb-4caa-bcb5-b81776214e3a)


##### Instruções de acesso
1. Acesse o link fornecido: [Link](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather).
2. Abra a aplicação no VSCode e siga as instruções detalhadas no README disponível em: [README](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/main/README.md).
3. Caso o usuário não esteja logado, realize o login.
4. Após o login, clique em "Lista de Transmissão" localizado na parte superior da HomePage.
5. Clique no botão 'Nova Lista' ou seleciona uma lista já criada. 

##### Artefatos produzidos
* [BroadcastCreate](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/main/src/2gather/screens/BroadcastCreate.js)
* [group.services.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/main/src/2gather/services/group.services.js)

### Funcionalidade 06: Postar Respostas (RF-004)
A aplicação deve permitir ao usuário responder as perguntas na platarforma da `Study2gether`.

![Postar resposta](img/ct34enviarresposta.jpg)

##### Instruções de acesso
1. Acesse o site pelo [Link](http://studytwogether-001-site1.itempurl.com).
2. Clicar em "Perguntas".
3. Selecionar uma Pergunta.
4. Clicar no local de inserir Respostas (usuários já cadastrados e previamente logados).
5. Digitar o texto.
6. Clicar no botão "Enviar".

##### Artefatos produzidos
* [Perguntas.cshtml](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Views/Posts/Perguntas.cshtml)
* [Respostas.cshtml](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Views/Posts/Respostas.cshtml)
* [UsersController.cs](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Controllers/UsersController.cs)

### Funcionalidade 07: Visualizar notificações de mensagens. (RF-007)
A funcionalidade permite que o usuário, logado na `2Gather`, visualize uma notificação quando receber uma mensagem de outro usuario, grupo e lista de transmissão.

![Toast](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/21993438/d9c3f415-ffcf-4b9e-bf2f-920b92c52791)


##### Instruções de acesso
1. Acesse o link [Link](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather).
2. Instale e inicie a aplicação no VSCode conforme as instruções do README.
3. Faça login na aplicação (caso ainda não esteja logado).
4. Navegue até as opções "Contato", "Grupos" ou "Lista de Transmissão".
5. Envie uma mensagem para o contato, grupo ou lista de transmissão desejado.
7. Se o destinatário não estiver na tela de envio da mensagem, você receberá uma notificação.

##### Artefatos produzidos
* [Toast.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/develop/src/2gather/components/Toast.js)
* [ToastWrapper.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/develop/src/2gather/components/ToastWrapper.js)
* [ToastContext.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/develop/src/2gather/contexts/ToastContext.js)

### Funcionalidade 08: Visualizar informações básicas dos usuários (RF-08)

A funcionalidade permite que um usuário, logado na `2Gather`, visualize as informações básicas dos demais usuários.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/c7df69ae-083a-405a-8383-3fcab23f6900)

##### Instruções de acesso
1. Acesse o link [Link](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather).
2. Abra a Aplicação no VSCode e a inicialize conforme descrito detalhadamente no README.
3. Caso usuário não esteja com login efetuado, basta efetuar o `Login`.
4. Com o login já efetuado, clicar em "Contatos" na parte inferior da HomePage.
5. Na tela Contatos, clicar sobre a foto daquele usuário que gostaria de visualizar as informações básicas.

##### Artefatos produzidos
* [Profile.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/develop/src/2gather/screens/Profile.js)

### Funcionalidade 09: Efetuar Login	(RF-09)

A funcionalidade permite que o usuário realize com sucesso o login no App `2Gather`.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/34fd38e6-2d19-4ec4-b102-30dd5d7bd003) ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/88b7d84a-ea3a-48de-b64a-2cbeb0e7d359)

##### Instruções de acesso
1. Acesse o link [Link](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather).
2. Abra a Aplicação no VSCode e a inicialize conforme descrito detalhadamente no README.
3. Na tela inicial clique no botão `Login`.
4. Insira o `e-mail` e a `senha` já cadastrados.
5. Clique no botão `Entrar`.

##### Artefatos produzidos
* [Home.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/develop/src/2gather/screens/Home.js)
* [Login.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/develop/src/2gather/screens/Login.js)
* [auth.services.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/develop/src/2gather/services/auth.services.js)

### Funcionalidade 10: Alterar senha pessoal (RF-010)

A funcionalidade permite que o usuário do App `2Gather` acesse seu Perfil e altere sua senha.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/79d2dbe8-e375-43d2-8d38-e41564b41e62) ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/114453508/f4d57cc0-9277-4a89-bdc1-ceaa37f34d7a)

##### Instruções de acesso
1. Acesse o link [Link](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather).
2. Abra a Aplicação no VSCode e a inicialize conforme descrito detalhadamente no README.
3. com a aplicação inicializada, Caso usuário não esteja com login efetuado, basta efetuar o `Login`.
4. Com o login já efetuado, clicar em "Configurações" na parte inferior da HomePage.
5. Na tela Perfil, clicar no botão `Alterar senha`.
6. Na tela `Alterar Senha`, inserir qual a senha atual, qual será a senha nova e confirmar a nova senha.
7. Clicar em `Alterar Senha`.

##### Artefatos produzidos
* [Profile.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/develop/src/2gather/screens/Profile.js)
* [NewPassword](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/develop/src/2gather/screens/NewPassword.js)
* [auth.services.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/develop/src/2gather/services/auth.services.js)
  
### Funcionalidade 11: Administrador inserir postagem de indicações de materiais relevantes. (RF-011)

A aplicação deve permitir ao administrador inserir postagem de indicações de materiais relevantes. `Study2gether`.

![image](https://user-images.githubusercontent.com/96087622/236625920-4546a3d9-c931-4a82-8b53-4249ca0130fa.png)

##### Instruções de acesso
1. Acesse o site pelo [Link](http://studytwogether-001-site1.itempurl.com).
2. Acessar uma conta com permissão de administrador.
3. Clicar em Indicações.

##### Artefatos produzidos
* [Indicacoes.cshtml](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Views/Posts/Indicacoes.cshtml)
* [PostsController.cs](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Controllers/PostsController.cs)

### Funcionalidade 12: Apresentar um filtro por eixos ou por microfundamentos. (RF-002)

A aplicação deve apresentar um filtro por eixos ou por microfundamentos.

![image](img/programacaodefuncionalidadesrf02.jpg)

##### Instruções de acesso
1. Acesse o site pelo [Link](http://studytwogether-001-site1.itempurl.com).
2. Clicar no filtro "Eixo" ou "Microfundamento".

##### Artefatos produzidos
* [PostsController.cs](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Controllers/PostsController.cs)
* [_Layout.cshtml](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Views/Shared/_Layout.cshtml)
* [Filters.cshtml](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/develop/src/Study2gether/Study2gether/Views/Shared/Filters.cshtml)
* [ViewBagActionFilter.cs](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/develop/src/Study2gether/Study2gether/Atributtes/ViewBagActionFilter.cs)

### Funcionalidade 13: Pesquisar por campo de texto (RF-005)

A funcionalidade permite que os usuários pesquisem por campo de texto na platarforma da `Study2gether`.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/assets/21993438/0d1e5d2a-3d45-43a0-bfcf-e7d0f5b02829)

##### Instruções de acesso
1. Acesse o site pelo [Link](http://studytwogether-001-site1.itempurl.com)
2. Clicar na área de pesquisa localizada no topo do site, onde está escrito "Digite o texto para buscar".
3. Digite o texto que você quer procurar.
4. Clicar na lupa ao lado do texto ou dar enter para a busca ser finalizada. 

##### Artefatos produzidos
* [Indicacoes.cshtml](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Views/Posts/Indicacoes.cshtml)
* [Perguntas.cshtml](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Views/Posts/Perguntas.cshtml)
* [Interacoes.cshtml](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Views/Posts/Interacoes.cshtml)
* [PostsController.cs](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Controllers/PostsController.cs)


### Funcionalidade 14: A aplicação deve permitir ao usuário reagir com reações de emojis (RF-009)

A aplicação deve permitir ao usuário reagir com reações de emojis `Study2gether`.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/assets/96087622/75f8c013-143f-4215-9b98-104d705221ee)

##### Instruções de acesso
1. Acesse o site pelo [Link](http://studytwogether-001-site1.itempurl.com)
2. Clicar na área de Perguntas, Indicações ou Interações.
3. Clicar no icone de reagir.
4. Inserir um reação.
5. Atualizar a pagina e ver se a reação foi adicionada. 

##### Artefatos produzidos
* [Indicacoes.cshtml](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Views/Posts/Indicacoes.cshtml)
* [Perguntas.cshtml](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Views/Posts/Perguntas.cshtml)
* [Interacoes.cshtml](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Views/Posts/Interacoes.cshtml)
* [PostsController.cs](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Controllers/PostsController.cs)

### Funcionalidade 15: A aplicação deve permitir ao usuário recuperar a senha. (RF-010)

A aplicação deve permitir ao usuário recuperar a senha na aplicação `Study2gether`.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/assets/107289791/e0ce2cd4-91d1-4b06-abfa-d541c83671ff)


##### Instruções de acesso
1. Acesse o site pelo [Link](http://studytwogether-001-site1.itempurl.com)
2. Clicar na área de `Login` ou `Cadastro`.
3. Clicar no botão `Recuperar Senha`.
4. Digite o e-mail que deseja recuperar no campo.
5. Clique no botão `Recuperar Senha`. 
6. Aparecerá um pop-up na tela com uma mensagem, e será enviado um e-mail para a recuperação de senha para o e-mail preenchido caso tenha sido cadastrado.

##### Artefatos produzidos
* [Login.cshtml](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Views/Users/Login.cshtml)
* [Cadastro.cshtml](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Views/Users/Cadastro.cshtml)
* [RecuperarSenha.cshtml](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Views/Users/RecuperarSenha.cshtml)
* [UsersController.cs](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-pmv-ads-2023-1-e2-t2-time5-study2gether/blob/main/src/Study2gether/Study2gether/Controllers/UsersController.cs)

### Funcionalidade 16: A aplicação deve permitir ao usuário gerenciar seus grupos (RF-011)

A aplicação deve permitir ao usuário gerenciar seus grupos criados, podendo visualizar quem são os participantes do grupo. Caso o usuário quem criou o grupo, então ele terá permissão de administrador no grupo que permitirá que ele edite o nome, adicione ou remova participantes, arquive ou desarquive o grupo.

![Informações de grupo](![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/assets/12260321/9b7cc341-da60-4fc3-8ad6-f67977be0e25))


##### Instruções de acesso
1. Acesse o aplicativo
2. Realize seu `Login`
3. Clique em algum grupo criado na Homepage ou crie seu próprio grupo

##### Artefatos produzidos
* [EditGroup.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/develop/src/2gather/screens/EditGroup.js)
* [GroupInfo.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g5-2gather/blob/develop/src/2gather/screens/GroupInfo.js)
