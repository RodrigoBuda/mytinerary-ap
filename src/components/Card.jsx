export default function Card({ src, alt, city }) {
  return (
    <div className="cont-img-card">
      <img className="img-carousel-card" src={src} alt={alt} />
      <p className="p-carrusel-city"> {city}</p>
    </div>
  );
}
