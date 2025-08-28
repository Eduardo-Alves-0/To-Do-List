# Requisitos Detalhados do To-Do List (Fila)

Este documento descreve de forma detalhada os requisitos do projeto **To-Do List** utilizando **Fila (FIFO)**.

---

## 1. Requisitos Funcionais (RF)

| Código | Requisito | Descrição Detalhada | Exemplo de Entrada / Saída |
|--------|-----------|-------------------|----------------------------|
| RF01 | Adicionar tarefa | O sistema deve permitir que o usuário adicione uma tarefa à lista. Cada tarefa é um **texto simples**. | Entrada: "Estudar TypeScript"<br>Saída: "Tarefa 'Estudar TypeScript' adicionada à fila." |
| RF02 | Remover tarefa | O sistema deve permitir que o usuário remova a **primeira tarefa da fila**. | Entrada: comando "remover"<br>Saída: "Tarefa 'Estudar TypeScript' removida da lista." |
| RF03 | Listar tarefas | O sistema deve exibir todas as tarefas pendentes, **em ordem de chegada (FIFO)**. | Entrada: comando "listar"<br>Saída: 1. Estudar JS<br>2. Fazer exercícios |
| RF04 | Menu interativo | O sistema deve apresentar ao usuário um menu de opções: adicionar, remover, listar, sair. | Menu exibido no console: <br>1 – Adicionar tarefa<br>2 – Remover tarefa<br>3 – Listar tarefas<br>4 – Sair |
| RF05 | Encerrar programa | O sistema deve permitir que o usuário encerre a aplicação de forma segura. | Entrada: comando "sair"<br>Saída: "Programa encerrado. Até mais!" |
| RF06 | Notificar fila vazia | Ao tentar remover ou listar tarefas e a fila estiver vazia, o sistema deve informar que não há tarefas. | Entrada: remover<br>Saída: "Não há tarefas na lista." |

---

## 3. Regras de Negócio (RN)

| Código | Regra | Detalhes |
|--------|-------|----------|
| RN01 | Ordem de execução | A fila deve seguir **FIFO (First In, First Out)** rigorosamente. |
| RN02 | Tarefa obrigatória | Cada tarefa deve ser **um texto não vazio**. |
| RN03 | Fila vazia | Não é permitido remover tarefas se a fila estiver vazia; o sistema deve avisar o usuário. |
| RN04 | Identificação de tarefas | Cada tarefa é única pelo seu **conteúdo de texto**; o sistema não cria IDs separados nesta versão inicial. |
| RN05 | Persistência | Nesta versão inicial, o sistema **não armazena tarefas em arquivo ou banco de dados**; todas as tarefas existem apenas em memória. |

---

## 4. Fluxo de Operação (Resumo)

1. O usuário executa o programa (`node dist/index.js`).  
2. O menu é exibido com opções: adicionar, remover, listar, sair.  
3. O usuário escolhe uma opção:  
   - **Adicionar**: digita a tarefa → o sistema adiciona ao final da fila e confirma.  
   - **Remover**: o sistema remove a primeira tarefa da fila e mostra qual foi removida.  
   - **Listar**: o sistema mostra todas as tarefas pendentes em ordem.  
   - **Sair**: o programa encerra.  
4. Se tentar remover ou listar com fila vazia, o sistema exibe aviso.  
5. O loop se repete até o usuário escolher sair.

---

> Esse documento garante que qualquer pessoa consiga compreender, usar e até evoluir o projeto **To-Do List com Fila** de forma clara e organizada.
