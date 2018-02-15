// createCard function is a refacto, used as an argument line 23, and called line 43
const createCard = (car) => {
  const carsList = document.querySelector('.cars-list');
  const brand = car.brand;
  const model = car.model;
  const owner = car.owner;
  const card = `<div class="car">
    <div class="car-image">
      <img src="images/white_logo_black_square.png" alt=""/>
    </div>
    <div class="car-info">
      <h4>${brand} - ${model}</h4>
      <p><strong>Owner:</strong> ${owner}</p>
    </div>
  </div>`;
  carsList.insertAdjacentHTML('beforeend', card);
};

// GET all cars
fetch('https://wagon-garage-api.herokuapp.com/alisa/cars')
.then(respons => respons.json())
.then((data) => {
  data.forEach(createCard);
});

// get info from form
const button = document.querySelector('.btn-cta');
button.addEventListener('click', (event) => {
  const inputs = document.querySelectorAll('.form-control');
  const data = {
    brand: inputs[0].value,
    model: inputs[1].value,
    owner: inputs[2].value
  }
  const url = 'https://wagon-garage-api.herokuapp.com/alisa/cars'
  fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then((data) => {
    createCard(data);
    document.querySelectorAll('.form-control').forEach(input => input.value = '');
  });
});

