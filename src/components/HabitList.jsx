import { useState, useEffect } from "react"
import HabitCard from "./HabitCard"

function HabitList({ habits, setHabits }) {

  const [novoNome, setNovoNome] = useState("")
  const [novaDescricao, setNovaDescricao] = useState("")
  const [novaCategoria, setNovaCategoria] = useState("")

  // salvar no localStorage sempre que habits mudar
  useEffect(() => {
    localStorage.setItem("my-daily-habits", JSON.stringify(habits))
  }, [habits])

  const adicionarHabit = (event) => {
    event.preventDefault()

    if (!novoNome.trim()) {
      alert("Informe um nome para o hábito.")
      return
    }

    const novoHabit = {
      id: Date.now(),
      titulo: novoNome,
      descricao: novaDescricao,
      categoria: novaCategoria || "Geral",
      meta: 7,
      ativo: true,
      diasFeitos: 0
    }

    setHabits([...habits, novoHabit])

    setNovoNome("")
    setNovaDescricao("")
    setNovaCategoria("")
  }

  const removerHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id))
  }

  return (
    <section>

      <form onSubmit={adicionarHabit} className="habit-form">

        <div>
          <label>
            Nome do hábito
            <input
              type="text"
              value={novoNome}
              onChange={(e) => setNovoNome(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Descrição
            <input
              type="text"
              value={novaDescricao}
              onChange={(e) => setNovaDescricao(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Categoria
            <input
              type="text"
              value={novaCategoria}
              onChange={(e) => setNovaCategoria(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">Adicionar hábito</button>

      </form>

      <ul>

        {habits.length === 0 && (
          <p>Nenhum hábito cadastrado ainda. Que tal começar?</p>
        )}

        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            titulo={habit.titulo}
            descricao={habit.descricao}
            categoria={habit.categoria}
            meta={habit.meta}
            ativo={habit.ativo}
            diasFeitos={habit.diasFeitos}
            onRemover={() => removerHabit(habit.id)}
          />
        ))}

      </ul>

    </section>
  )
}

export default HabitList