import { useState, useEffect } from "react"
import './App.css'
import Header from './components/Header'
import Footer from "./components/Footer"
import BemVindo from './components/Bemvindo'
import SecaoHabitos from './components/SecaoHabitos'
import HabitList from './components/HabitList'

function App() {

  const [habits, setHabits] = useState(() => {
    const stored = localStorage.getItem("my-daily-habits")

    if (!stored) {
      return [
        { id: 1, titulo: 'Exercício', meta: 5, ativo: true, diasFeitos: 5 },
        { id: 2, titulo: 'Leitura', meta: 7, ativo: true, diasFeitos: 3 },
        { id: 3, titulo: 'Meditação', meta: 7, ativo: false, diasFeitos: 0 },
        { id: 4, titulo: 'Hidratação', meta: 7, ativo: true, diasFeitos: 6 }
      ]
    }

    try {
      return JSON.parse(stored)
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("my-daily-habits", JSON.stringify(habits))
  }, [habits])

  return (
    <div>
      <Header />

      <main>
        <BemVindo nomeUsuario="turma iteam" totalHabitos={habits.length} />

        <SecaoHabitos titulo="Meus Hábitos">
          <HabitList habits={habits} setHabits={setHabits} />
        </SecaoHabitos>
      </main>

      <Footer />
    </div>
  )
}

export default App