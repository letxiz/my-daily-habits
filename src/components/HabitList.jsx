import { useState, useEffect, useRef } from "react"
import HabitCard from "./HabitCard"

function HabitList({ habits, setHabits }) {

  const [novoNome, setNovoNome] = useState("")
  const [novaDescricao, setNovaDescricao] = useState("")
  const [novaCategoria, setNovaCategoria] = useState("")

  const [erroNome, setErroNome] = useState('')

  const handleChange = (e) => {
  const { name, value } = e.target
  // [name] é uma chave dinâmica — usa o valor de name como nome da propriedade
  if (name === 'novoNome') {
    setNovoNome(value)
    // Valida comprimento mínimo em tempo real
    if (value.length > 0 && value.length < 3) {
      setErroNome('O nome deve ter pelo menos 3 caracteres.')
    } else {
      setErroNome('')
    }
  }
  if (name === 'novaDescricao') setNovaDescricao(value)
  if (name === 'novaCategoria') setNovaCategoria(value)
}

const nomeInputRef = useRef(null)


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
    if (erroNome) {
    nomeInputRef.current?.focus()
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

    setHabits(prev => [...prev, novoHabit])
    setNovoNome('')
    setNovaDescricao('')
    setNovaCategoria('')
    nomeInputRef.current?.focus()
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
              name="novoNome"
              value={novoNome}
              onChange={handleChange}
              ref={nomeInputRef}
            />
          </label>
           {erroNome && <p style={{ color: 'red', fontSize: '0.8rem' }}>{erroNome}</p>}
        </div>

        <div>
          <label>
            Descrição
            <input
              type="text"
              name="novaDescricao" 
              value={novaDescricao}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Categoria
            <input
              type="text"
              name="novaCategoria"
              value={novaCategoria}
              onChange={handleChange}
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