import '/src/css/card.css'

function Card({url="", title="", text=""}) {
  return (
    <div className="card">
      <div className="card-inner-wrapper">
        <img src={url} alt="" />
        <h3 className="card__subtitle">
           {title}
        </h3>
        <p className="card__text">
           {text}
        </p>
      </div>
    </div>
  )
}

export default Card
