import "./Card.css";

function Card({ image, link, title, subtitle, year }) {
  return (
    <a className="card" href={link}>
      <img className="image" src={image} alt={title} />
      <div className="textContainer">
        <div className="cardHeader">
          <div className="title">{title}</div>
          <div className="year">{year}</div>
        </div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </a>
  );
}

export default Card;
