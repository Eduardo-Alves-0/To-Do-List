#To-Do-List

## O que o código faz

O sistema funciona como uma **lista de tarefas (To-Do List)** executada no console. Ele oferece um menu interativo para o usuário realizar ações.

## 1. Adicionar tarefas
- O usuário pode cadastrar uma nova tarefa informando:
  - **Título**
  - **Descrição**
  - **Horário**
- Toda nova tarefa é criada com o status **pendente**.  
- As tarefas ficam armazenadas em uma lista principal.  

## 2. Listar tarefas
- O usuário pode visualizar todas as tarefas cadastradas.  
- Para cada tarefa, o sistema mostra:
  - Número de identificação (posição na lista).  
  - Título.  
  - Descrição.  
  - Horário.  
  - Status (**Pendente** ou **Concluída**).  
- Caso não exista nenhuma tarefa cadastrada, o sistema informa isso.  

## 3. Marcar tarefa como concluída
- O usuário pode escolher uma tarefa da lista e marcá-la como concluída.  
- A tarefa permanece registrada na lista principal, mas com o status atualizado para **Concluída**.  
- Além disso, ela também é adicionada a uma lista separada de **tarefas concluídas**.  

## 4. Remover tarefa
- O usuário pode remover uma tarefa da lista principal.  
- A tarefa removida não é apagada definitivamente: ela é enviada para a **lixeira**.  
- O sistema confirma a remoção com uma mensagem.  

## 5. Listar tarefas concluídas
- O usuário pode visualizar todas as tarefas que já foram concluídas.  
- Apenas o **título** das tarefas é mostrado nesta listagem.  
- Caso não exista nenhuma tarefa concluída, o sistema informa isso.  

## 6. Listar lixeira
- O usuário pode visualizar todas as tarefas que foram removidas.  
- Apenas o **título** das tarefas é mostrado nesta listagem.  
- Caso não exista nenhuma tarefa removida, o sistema informa isso.  

## 7. Encerrar o programa
- O usuário pode escolher a opção de sair do sistema.  
- O sistema finaliza a execução exibindo uma mensagem de encerramento.  

## 8. Validações feitas pelo sistema
- Impede que o usuário conclua ou remova tarefas quando a lista está vazia.  
- Informa quando o número digitado não corresponde a nenhuma tarefa existente.  
- Mostra mensagens claras sempre que o usuário tenta executar uma ação inválida.  
