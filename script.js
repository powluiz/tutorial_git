// O script abaixo insere os dados do array 'hotelData' no HTML

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
    pricing: 400.0,
    rate: 4.8,
  },
  {
    local: "Fernando de Noronha",
    name: "Alpha Ville Hotel",
    src: "./assets/pexels-asad-photo-maldives-1287460.jpg",
    pricing: 380.0,
    rate: 4.9,
  },
  {
    local: "Salvador",
    name: "Hotel Alameda",
    src: "./assets/pexels-thorsten-technoman-338504.jpg",
    pricing: 490.0,
    rate: 4.5,
  },
  {
      local: "Fortaleza",
      name: "Hotel Villa Reali",
      src:"https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      pricing: 250.0,
      rate: 4.7,
  },
];

const hotelListComponent = document.getElementById("card-list");

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
        <i class="fa-solid fa-star full"></i>
        <i class="fa-solid fa-star full"></i>
        <i class="fa-solid fa-star full"></i>
        <i class="fa-solid fa-star full"></i>
        <i class="fa-solid fa-star empty"></i>
      </div >
  <p>${hotel.rate}</p>
    </div >
  </div >
  `

  hotelListComponent.appendChild(card);
});

