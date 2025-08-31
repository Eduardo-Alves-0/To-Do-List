import inputUser from "readline-sync"

let opcao: number = 0

let listaDeTarefas: tarefa[] = []
let lixeira: tarefa[] = []
let concluidas: tarefa[] = []

interface tarefa {
  titulo: string
  descricao: string
  horario: string
  status: boolean
}

do {
  console.log("*************** TO-DO LIST ***************")
  console.log("Selecione uma opção:")
  console.log("1 - Adicionar tarefa")
  console.log("2 - Listar tarefas")
  console.log("3 - Marcar como concluída")
  console.log("4 - Remover tarefa")
  console.log("5 - Listar concluídas")
  console.log("6 - Listar lixeira")
  console.log("7 - Sair")
  console.log("*****************************************")

  opcao = inputUser.questionInt("Insira um número correspondente ao menu acima: ")

  switch (opcao) {
    case 1:
      let titulo: string = inputUser.question("Insira o titulo da atividade: ")
      let descricao: string = inputUser.question("Insira a descricao: ")
      let horario: string = inputUser.question("Insira o horario: ")
      let status: boolean = false

      let novaTarefa: tarefa = {
        titulo: titulo,
        descricao: descricao,
        horario: horario,
        status: status
      }

      listaDeTarefas.push(novaTarefa)
      break

    case 2:
      if (listaDeTarefas.length === 0) {
        console.log("Não há nenhuma tarefa cadastrada")
      } else {
        console.log("Lista de tarefas: ")
        listaDeTarefas.forEach((tarefa, index) => {
          console.log(`\nTarefa ${index + 1}`)
          console.log(`Título: ${tarefa.titulo}`)
          console.log(`Descrição: ${tarefa.descricao}`)
          console.log(`Horário: ${tarefa.horario}`)
          console.log(`Status: ${tarefa.status ? "Concluída" : "Pendente"}`)
        })
      }
      break

    case 3:
      if (listaDeTarefas.length === 0) {
        console.log("Não há tarefas para concluir")
        break
      }

      listaDeTarefas.forEach((tarefa, index) => {
        console.log(`${index + 1} - ${tarefa.titulo}`)
      })

      let concluirTarefa: number = inputUser.questionInt("Qual tarefa deseja marcar como concluída? Digite o número dela: ")
      let indice = concluirTarefa - 1

      if (indice >= 0 && indice < listaDeTarefas.length && listaDeTarefas[indice]) {
        listaDeTarefas[indice].status = true
        concluidas.push(listaDeTarefas[indice])
        console.log(`Tarefa "${listaDeTarefas[indice].titulo}" marcada como concluída!`)
      } else {
        console.log("Número de tarefa inválido!")
      }
      break

    case 4:
      if (listaDeTarefas.length === 0) {
        console.log("Não há tarefas para remover")
        break
      }

      listaDeTarefas.forEach((tarefa, index) => {
        console.log(`${index + 1} - ${tarefa.titulo}`)
      })

      let removerTarefa: number = inputUser.questionInt("Insira o número da atividade que deseja remover: ")
      let posicao = removerTarefa - 1

      if (posicao >= 0 && posicao < listaDeTarefas.length && listaDeTarefas[posicao]) {
        const tarefaRemovida = listaDeTarefas.splice(posicao, 1)[0]
        if (tarefaRemovida) {
          lixeira.push(tarefaRemovida)
          console.log(`Tarefa "${tarefaRemovida.titulo}" removida com sucesso!`)
        }
      } else {
        console.log("Número de tarefa inválido")
      }
      break

    case 5:
      if (concluidas.length === 0) {
        console.log("Nenhuma tarefa concluída ainda")
      } else {
        console.log("Tarefas concluídas:")
        concluidas.forEach((tarefa, index) => {
          console.log(`${index + 1} - ${tarefa.titulo}`)
        })
      }
      break

    case 6:
      if (lixeira.length === 0) {
        console.log("A lixeira está vazia")
      } else {
        console.log("Tarefas removidas:")
        lixeira.forEach((tarefa, index) => {
          console.log(`${index + 1} - ${tarefa.titulo}`)
        })
      }
      break

    case 7:
      console.log("Encerrando o programa...")
      break

    default:
      console.log("Opção inválida")
      break
  }

} while (opcao !== 7)
