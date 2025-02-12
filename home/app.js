let cars = {
  Toyota: {
    Corolla: {
      Model: "Corolla Altis 1.6",
      Engine: "1.6L Petrol",
      Mileage: "12-16 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 6.5M",
      image: "/images/corolla.jpg",
    },
    Fortuner: {
      Model: "Fortuner Legender	",
      Engine: "2.8L Diesel	",
      Mileage: "10-12 km/L	",
      seatCapacity: "7-Seater",
      Price: "PKR 18M",
      image: "/images/Fortuner.jpg",
    },
    Yaris: {
      Model: "Yaris 1.5 ATIV X	",
      Engine: "1.5L Petrol	",
      Mileage: "14-18 km/L	",
      seatCapacity: "5-Seater",
      Price: "PKR 5.5M",
      image: "/images/Yaris.jpg",
    },
  },
  Honda: {
    Civic: {
      Model: "Civic RS Turbo",
      Engine: "1.5L Turbo",
      Mileage: "10-14 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 9.5M",
      image: "/images/Civic.jpg",
    },
    City: {
      Model: "City Aspire 1.5",
      Engine: "1.5L Petrol",
      Mileage: "12-16 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 6M",
      image: "/images/City.jpg",
    },
    BRV: {
      Model: "BR-V i-VTEC S	",
      Engine: "1.5L Petrol",
      Mileage: "11-15 km/L	",
      seatCapacity: "7-Seater",
      Price: "PKR 7M",
      image: "/images/brv`.jpg",
    },
  },
  Suzuki: {
    Swift: {
      Model: "Swift GLX CVT",
      Engine: "1.2L Petrol",
      Mileage: "16-20 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 4.7M",
      image: "/images/Swift.jpg",
    },
    Cultus: {
      Model: "Cultus VXL AGS",
      Engine: "1.0L Petrol",
      Mileage: "18-22 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 4.1M",
      image: "/images/Cultus.jpg",
    },
    Alto: {
      Model: "Alto VXL AGS",
      Engine: "0.66L Petrol",
      Mileage: "20-24 km/L	",
      seatCapacity: "5-Seater",
      Price: "PKR 3.2M",
      image: "/images/Alto.jpg",
    },
  },
};

let company = document.getElementById("company");
let modelName = document.getElementById("modelName");

for (let key in cars) {
  company.innerHTML += `<option value="${key}" > ${key} </option>`;
  
}

function changeCompany() {
  model.innerHTML = `<option value="">Model</option>`;
  for (let key in cars[company.value]) {
    modelName.innerHTML += `<option value="${key}" > ${key} </option>`;
  }
}


let displayCar = document.getElementById("displayCar");
let bigDisplay = document.getElementById("bigDisplay");

for (let brand in cars) {
  for (let model in cars[brand]) {
    let carsDetails = cars[brand][model];

    displayCar.innerHTML += `
      <div class="card" onclick="showCarDetails('${brand}', '${model}')">
        <img src="${carsDetails.image}" class="card-img-top img-control" alt="">
        <div class="card-body">
          <h5 class="card-title"><strong>${brand} ${carsDetails.Model}</strong></h5>
        </div>
      </div>`;
  }
}


function showCarDetails(brand, model) {
  let car = cars[brand][model];

  bigDisplay.innerHTML = `
     <div class="first-div">
          <img src="${car.image}" class="card-img-top img-control1" alt="">
          <div class="second-div">
            <h5 class="fs-3 fw-bold ms-4">${car.Model}</h5>
              <p class="fs-5 fw-bold ms-4"><b>Engine: </b> ${car.Engine}</p>
              <p class="fs-5 fw-bold ms-4"><b>Mileage: </b> ${car.Mileage}</p>
              <p class="fs-5 fw-bold ms-4"><b>Seat Capacity: </b> ${car.seatCapacity}</p>
              <p class="fs-5 fw-bold ms-4"><b>Price: </b>  ${car.Price}</p>      
          </div>
        </div>`;
}





