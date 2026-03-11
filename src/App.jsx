import './App.css'
import Footer from "./components/Footer";
import BemVindo from './components/Bemvindo';
import Cabecalho from './components/Cabecalho';
/*function App() {
  return (
    <div>
      <Cabecalho
        titulo="My Daily Habits"
        descricao="Construindo uma rotina melhor, um hábito por vez."
      />
      <BemVindo nomeUsuario="turma iteam" totalHabitos={5} />
      <Footer />
    </div>
  );
}*/

function App() {
  return (
    <div>
      <Cabecalho
        titulo="My Daily Habits"
        descricao="Construindo uma rotina melhor, um hábito por vez."
      />
      <BemVindo nomeUsuario="turma iteam" totalHabitos={5} />
      <Footer />
    </div>
  );
}



export default App



