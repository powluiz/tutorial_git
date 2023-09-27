// O script abaixo insere os dados do array 'hotelData' no documento da página 'index.html'

const hotelData = [
  {
    local: "Rio de Janeiro",
    name: "Danubius Hotel Park",
    src: "./assets/pexels-boonkong-boonpeng-1134176.jpg",
    pricing: 450.0,
    rate: 4.8,
  },
  {
    local: "São Paulo",
    name: "Vilage Resort Hotel",
    src: "./assets/pexels-donald-tong-189296.jpg",
    pricing: 380.0,
    rate: 4.3,
  },
  {
    local: "Belo Horizonte",
    name: "Hotel London Bridge",
    src: "./assets/pexels-pixabay-258154.jpg",
    pricing: 290.0,
    rate: 4.1,
  },
  {
    local: "Fernando de Noronha",
    name: "Alpha Ville Hotel",
    src: "./assets/pexels-asad-photo-maldives-1287460.jpg",
    pricing: 380.0,
    rate: 3.7,
  },
  {
    local: "Salvador",
    name: "Hotel Alameda",
    src: "./assets/pexels-thorsten-technoman-338504.jpg",
    pricing: 600.0,
    rate: 5,
  },
  {
    local: "Lençois Maranhenses",
    name: "Hotel Noite Feliz",
    src: "./assets/pexels-thorsten-technoman-338504.jpg",
    pricing: 700.0,
    rate: 3.5,
  },
];

const hotelListComponent = document.getElementById("card-list");

const getHotelStars = (rate) => {
  const maxRate = 5;
  let stars = "";

  for (let i = 1; i <= maxRate; i++) {
    if (rate >= i) {
      stars += '<i class="fa-solid fa-star full"></i>';
    } else {
      stars += '<i class="fa-solid fa-star empty"></i>';
    }
  }

  return stars;
};

hotelData.forEach((hotel, index) => {
  let card = document.createElement("button");
  card.classList.add("card");
  card.innerHTML = `
  <img src=${hotel.src} alt="Imagem do hotel ${index + 1}">
  <div class="card-content">
    <h3>${hotel.local}</h3>
    <h2>${hotel.name}</h2>
    <div class="horizontal-info">
      <p>R$${hotel.pricing}/Noite</p>
      <p>|</p>
      <div class="starCount">
        ${getHotelStars(hotel.rate)}
      </div >
  <p>${hotel.rate}</p>
    </div >
  </div >
  `;

  hotelListComponent.appendChild(card);
});
