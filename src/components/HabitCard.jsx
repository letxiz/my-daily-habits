function HabitCard({ titulo, descricao, categoria, onRemover }) {
  const destaque = categoria === 'Saúde'

  return (
    <div className="habit-card">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <small>
        Categoria: {categoria}
        {destaque && ' ⭐'}
      </small>

      {onRemover && (
        <button type="button" onClick={onRemover}>
          Remover
        </button>
      )}
    </div>
  )
}

export default HabitCard


