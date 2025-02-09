let carCompanies = {
  Toyota: {
    Corolla: {
      Model: "Corolla Altis 1.6",
      Engine: "1.6L Petrol",
      Mileage: "12-16 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 6.5M",
      image: "images/corolla.jpg",
    },
    Fortuner: {
      Model: "Fortuner Legender	",
      Engine: "2.8L Diesel	",
      Mileage: "10-12 km/L	",
      seatCapacity: "7-Seater",
      Price: "PKR 18M",
      image: "images/Fortuner.jpg",
    },
    Yaris: {
      Model: "Yaris 1.5 ATIV X	",
      Engine: "1.5L Petrol	",
      Mileage: "14-18 km/L	",
      seatCapacity: "5-Seater",
      Price: "PKR 5.5M",
      image: "images/Yaris.jpg",
    },
  },
  Honda: {
    Civic: {
      Model: "Civic RS Turbo",
      Engine: "1.5L Turbo",
      Mileage: "10-14 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 9.5M",
      image: "images/Civic.jpg",
    },
    City: {
      Model: "City Aspire 1.5",
      Engine: "1.5L Petrol",
      Mileage: "12-16 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 6M",
      image: "images/City.jpg",
    },
    BRV: {
      Model: "BR-V i-VTEC S	",
      Engine: "1.5L Petrol",
      Mileage: "11-15 km/L	",
      seatCapacity: "7-Seater",
      Price: "PKR 7M",
      image: "images/brv`.jpg",
    },
  },
  Suzuki: {
    Swift: {
      Model: "Swift GLX CVT",
      Engine: "1.2L Petrol",
      Mileage: "16-20 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 4.7M",
      image: "images/Swift.jpg",
    },
    Cultus: {
      Model: "Cultus VXL AGS",
      Engine: "1.0L Petrol",
      Mileage: "18-22 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 4.1M",
      image: "images/Cultus.jpg",
    },
    Alto: {
      Model: "Alto VXL AGS",
      Engine: "0.66L Petrol",
      Mileage: "20-24 km/L	",
      seatCapacity: "5-Seater",
      Price: "PKR 3.2M",
      image: "images/Alto.jpg",
    },
  },
};

let companyName = document.getElementById("companyName");
let carModel = document.getElementById("carModel");

for (let key in carCompanies) {
  companyName.innerHTML += `<option value="${key}" > ${key} </option>`;
}

function selectCompany() {
    carModel.innerHTML = `<option value="">Car Model</option>`;
  for (let key in carCompanies[companyName.value]) {
    carModel.innerHTML += `<option value="${key}" > ${key} </option>`;
  }
}

function displayResult() {
    const selectedCompany = companyName.value;
    const selectedModel = carModel.value;
  
    if (selectedCompany && selectedModel) {
      const carDetails = carCompanies[selectedCompany][selectedModel];
  
      Swal.fire({
        title: `${selectedCompany} ${carDetails.Model}`,
        html: `
        <div class="para">
          <img class="img-fluid img-control" src="${carDetails.image}" alt="">
          <p class="p1"><strong>Engine:</strong> ${carDetails.Engine}</p>
          <p><strong>Mileage:</strong> ${carDetails.Mileage}</p>
          <p><strong>seat Capacity:</strong> ${carDetails.seatCapacity}</p>
          <p><strong>Price:</strong> ${carDetails.Price}</p>
        </div>
        `,
        showClass: {
          popup: 'animate__animated animate__fadeInUp animate__faster'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutDown animate__faster'
        }
      });
    } else {
      Swal.fire({
        title: 'Selection Incomplete',
        text: 'Please select both a company and a car model.',
        icon: 'warning'
      });
    }
  }
  

