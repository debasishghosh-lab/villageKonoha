function Card(props) {
  return (
    <div className="card" onClick={props.onClick} style={{ cursor: props.onClick ? "pointer" : "default" }}>
      <img className="card-image" src={props.img} alt={props.title} />
      <h2 className="card-title">{props.title}</h2>
      {props.text && <p className="card-text">{props.text}</p>}
    </div>
  );
}

export default Card;
