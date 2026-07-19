import "./ItemCard.css";

function ItemCard({ card, onCardClick }) {
  function handleImageClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <h2 className="card__name">{card.name}</h2>
      <img
        src={card.imageUrl}
        alt={card.name}
        className="card__image"
        onClick={handleImageClick}
      />
    </li>
  );
}

export default ItemCard;
