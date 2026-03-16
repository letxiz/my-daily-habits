function HabitCard({
  titulo,
  descricao = '',
  categoria,
  meta,
  ativo = true,
  diasFeitos = 0,
  onRemover
}) {

  const destaque = categoria === 'Saúde'
  const metaAtingida = diasFeitos >= meta

  const mensagemMeta = metaAtingida
    ? '🏆 Meta da semana atingida!'
    : `${diasFeitos} de ${meta} dias concluídos`

  return (
    <div className="habit-card">

      <h3>{titulo}</h3>

      {descricao && (
        <p>{descricao}</p>
      )}

      {categoria && (
        <small>
          Categoria: {categoria}
          {destaque && ' ⭐'}
        </small>
      )}

      {meta && (
        <p>{mensagemMeta}</p>
      )}

      {metaAtingida && (
        <p>⭐ Parabéns! Meta da semana atingida!</p>
      )}

      <span>
        {ativo ? '✅ Ativo' : '⏸️ Pausado'}
      </span>

      {onRemover && (
        <div>
          <button type="button" onClick={onRemover}>
            Remover
          </button>
        </div>
      )}

    </div>
  )
}

export default HabitCard