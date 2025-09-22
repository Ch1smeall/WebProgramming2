function Card({ hotelName, location, price, image, rating }) {

  const ratingColor = rating > 4.0 ? 'green' : 'red';

  return (
    <div className="card-item">
      <img src={image} alt={location} className="card-image" />
      <h2>{location}</h2>
      <p className="card-location">{hotelName}</p>
      <p className="card-rating" style={{ color: ratingColor }}>
        {rating} ★
      </p>
      <p className="card-price">{price}/night</p>
    </div>
  );
}

export default Card;
