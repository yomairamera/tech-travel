import "../styles/cards.css";
import Button from "./Button";
const Cards = ({ data, only, setCounter }) => {
  return (
    <div key={only} className="cards">
      <div>
        <img className="imgContent" src={process.env.PUBLIC_URL + data.image} alt="imagen" />
        <p>{data.name}</p>
        <strong>$ {data.cost}</strong>
      </div>
      <div className="cardFooter">
        <Button startIcon="carrito.svg" onClick={() => setCounter(d => d+1)}>Agregar al carrito</Button>
      </div>
    </div>
  );
};

export default Cards;
