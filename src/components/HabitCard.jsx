function HabitCard({
  nome,
  descricao,
  categoria,
  meta,
  ativo,
  diasFeitos,
  onRemover,
  onToggle
}) {

  const metaAtingida = diasFeitos >= meta

  return (
    <div className="habit-card">
      <h3>{nome}</h3>

      {descricao && <p>{descricao}</p>}

      <small>Categoria: {categoria}</small>

      <p>
        {metaAtingida
          ? '🏆 Meta atingida!'
          : `${diasFeitos} de ${meta} dias`}
      </p>

      <span>{ativo ? '✅ Ativo' : '⏸️ Pausado'}</span>

      <div style={{ marginTop: '10px' }}>
        {onToggle && (
          <button onClick={onToggle}>
            {ativo ? 'Pausar' : 'Ativar'}
          </button>
        )}

        {onRemover && (
          <button onClick={onRemover}>
            Remover
          </button>
        )}
      </div>
    </div>
  )
}

export default HabitCard