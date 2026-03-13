import { useState } from 'react'
import HabitCard from './HabitCard'


function HabitList() {
  const [habits, setHabits] = useState([
    { id: 1, titulo: 'Beber 2L de água', descricao: 'Ao longo do dia', categoria: 'Saúde' },
    { id: 2, titulo: 'Ler 20 minutos', descricao: 'Livro ou artigo', categoria: 'Estudo' },
    { id: 3, titulo: 'Caminhar 30 minutos', descricao: 'Depois do trabalho', categoria: 'Exercício' },
  ])

  const removerHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id))
  }
  const [novoTitulo, setNovoTitulo] = useState('')
  const [novaDescricao, setNovaDescricao] = useState('')
  const [novaCategoria, setNovaCategoria] = useState('')

  const adicionarHabit = (event) => {
    event.preventDefault()

    if (!novoTitulo.trim()) {
      // Validação básica: título é obrigatório
      alert('Informe um título para o hábito.')
      return
    }
    const novoHabit = {
      id: Date.now(), // id simples baseado em timestamp
      titulo: novoTitulo,
      descricao: novaDescricao,
      categoria: novaCategoria || 'Geral',
    } 

    setHabits([...habits, novoHabit])

      // limpar campos
    setNovoTitulo('')
    setNovaDescricao('')
    setNovaCategoria('')
}
  

  return (
    <section>
      <h2>Hábitos cadastrados</h2>

      <form onSubmit={adicionarHabit} className="habit-form">
        <div>
          <label>
            Título do Hábitos
            <input
              type='text'
              value={novoTitulo}
              onChange={(e)=> setNovoTitulo(e.target.value)}
              />
          </label>
        </div>

        <div>
          <label>
            Descrição
            <input 
            type='text'
            value={novaDescricao}
            onChange={(e) => setNovaDescricao(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Categoria
            <input 
            type='text'
            value={novaCategoria}
            onChange={(e) => setNovaCategoria(e.target.value)}
            />
          </label>
        </div>

        <button type='submit'> Adicionar hábito</button>
      </form>

      {habits.length === 0
        ? <p>Nenhum hábito cadastrado ainda.</p>
        : <p>Você tem {habits.length} hábito(s) cadastrado(s).</p>}
      
      {habits.map(habit => (
        <HabitCard
          key={habit.id}
          titulo={habit.titulo}
          descricao={habit.descricao}
          categoria={habit.categoria}
          onRemover={() => removerHabit(habit.id)}
          />
      ))}
    </section>
  )
}

export default HabitList