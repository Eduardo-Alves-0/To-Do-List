# Requisitos do Sistema - To-Do List

Este documento descreve os **requisitos funcionais** e **não funcionais** do sistema To-Do List.

---

## Requisitos Funcionais (RF)

1. **Adicionar tarefa**  
   - O sistema deve permitir ao usuário cadastrar uma tarefa informando:
     - Título  
     - Descrição  
     - Horário  
   - Toda nova tarefa deve ser criada com status **Pendente**.

2. **Listar tarefas**  
   - O sistema deve exibir todas as tarefas cadastradas.  
   - Para cada tarefa devem ser mostrados:
     - Número identificador (índice).  
     - Título.  
     - Descrição.  
     - Horário.  
     - Status (**Pendente** ou **Concluída**).  
   - Caso não existam tarefas, deve ser exibida a mensagem: *"Não há nenhuma tarefa cadastrada"*.  

3. **Marcar tarefa como concluída**  
   - O sistema deve permitir que o usuário selecione uma tarefa e a marque como concluída.  
   - O status da tarefa deve mudar para **Concluída**.  
   - A tarefa deve ser adicionada a uma lista de **tarefas concluídas**.  
   - Caso a lista esteja vazia, deve ser exibida a mensagem: *"Não há tarefas para concluir"*.  

4. **Remover tarefa**  
   - O sistema deve permitir que o usuário selecione uma tarefa e a remova da lista principal.  
   - A tarefa removida deve ser enviada para a **lixeira**, sem ser apagada definitivamente.  
   - Caso a lista esteja vazia, deve ser exibida a mensagem: *"Não há tarefas para remover"*.  

5. **Listar tarefas concluídas**  
   - O sistema deve exibir todas as tarefas concluídas, mostrando apenas seus títulos.  
   - Caso não haja nenhuma, deve ser exibida a mensagem: *"Nenhuma tarefa concluída ainda"*.  

6. **Listar lixeira**  
   - O sistema deve exibir todas as tarefas removidas, mostrando apenas seus títulos.  
   - Caso a lixeira esteja vazia, deve ser exibida a mensagem: *"A lixeira está vazia"*.  

7. **Encerrar o programa**  
   - O sistema deve permitir ao usuário encerrar a execução.  
   - Deve exibir a mensagem: *"Encerrando o programa..."*.  

8. **Validações de entrada**  
   - O sistema deve validar as opções do menu, exibindo *"Opção inválida"* quando necessário.  
   - O sistema deve validar índices de tarefas ao concluir ou remover.  

---

## Requisitos Não Funcionais (RNF)

1. **Execução**  
   - O sistema deve ser executado em console (linha de comando).  

2. **Entrada de dados**  
   - O sistema deve utilizar a biblioteca `readline-sync` para capturar entradas do usuário.  

3. **Usabilidade**  
   - O sistema deve apresentar menus claros e mensagens informativas para todas as operações.  

4. **Organização de dados**  
   - O sistema deve organizar as tarefas em três listas:
     - `listaDeTarefas` → Tarefas ativas.  
     - `concluidas` → Tarefas concluídas.  
     - `lixeira` → Tarefas removidas.  

5. **Persistência**  
   - O sistema não mantém dados após ser encerrado.  
   - Futuramente, pode ser implementada persistência em arquivos ou banco de dados.  

---
