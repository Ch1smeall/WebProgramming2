import Card from "./Card";
import './App.css'


import indonesia from "./assets/images/1.jpg";
import seychelles from "./assets/images/2.jpg";
import virgin from "./assets/images/3.jpg";
import bahamas from "./assets/images/4.jpg";
import mauritius from "./assets/images/5.jpg";
import bermuda from "./assets/images/6.jpg";

function App() {
  const resorts = [
    { image: indonesia, country: "Indonesia", hotel: "Gili Air Hotel", rating: 4.8, price: "$589" },
    { image: seychelles, country: "Seychelles", hotel: "Hilton Resort", rating: 4.2, price: "$629" },
    { image: virgin, country: "US Virgin Islands", hotel: "Goa Resort", rating: 3.5, price: "$485" },
    { image: bahamas, country: "Bahamas", hotel: "Kuredu Resort", rating: 4.1, price: "$729" },
    { image: mauritius, country: "Mauritius", hotel: "Trou D'eau Douce", rating: 4.9, price: "$877" },
    { image: bermuda, country: "Bermuda", hotel: "Staniel Cay Hotel", rating: 3.2, price: "$365" },
  ];
  return (
    <div className="card">
      <h1>Resorts Lite</h1>
      <hr />
      <div className="card-container">
        {resorts.map((resort, index) => (
          <Card
            key={index}
            hotelName={resort.hotel}
            location={resort.country}
            price={resort.price}
            image={resort.image}
            rating={resort.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App
