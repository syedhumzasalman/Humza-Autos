let carCompanies = {
  Toyota: {
    Corolla: {
      Model: "Corolla Altis 1.6",
      Engine: "1.6L Petrol",
      Mileage: "12-16 km/L",
      KeyFeatures: "Auto Transmission, Airbags, Touchscreen",
      Price: "PKR 6.5M",
    },
    Fortuner: {
      Model: "Fortuner Legender	",
      Engine: "2.8L Diesel	",
      Mileage: "10-12 km/L	",
      KeyFeatures: "AWD, Leather Interior, Sunroof, 7-Seater	",
      Price: "PKR 18M",
    },
    Yaris: {
      Model: "Yaris 1.5 ATIV X	",
      Engine: "1.5L Petrol	",
      Mileage: "14-18 km/L	",
      KeyFeatures: "Smart Entry, Cruise Control, Push Start	",
      Price: "PKR 5.5M",
    },
  },
  Honda: {
    Civic: {
      Model: "Civic RS Turbo",
      Engine: "1.5L Turbo",
      Mileage: "10-14 km/L",
      KeyFeatures: "Sunroof, Digital Cluster, Honda Sensing",
      Price: "PKR 9.5M",
    },
    City: {
      Model: "City Aspire 1.5",
      Engine: "1.5L Petrol",
      Mileage: "12-16 km/L",
      KeyFeatures: "Paddle Shifters, Touchscreen",
      Price: "PKR 6M",
    },
    BRV: {
      Model: "BR-V i-VTEC S	",
      Engine: "1.5L Petrol",
      Mileage: "11-15 km/L	",
      KeyFeatures: "7-Seater, Roof Rails, CVT Transmission",
      Price: "PKR 7M",
    },
  },
  Suzuki: {
    Swift: {
      Model: "Swift GLX CVT",
      Engine: "1.2L Petrol",
      Mileage: "16-20 km/L",
      KeyFeatures: "Push Start,Cruise Control,",
      Price: "PKR 4.7M",
    },
    Cultus: {
      Model: "Cultus VXL AGS",
      Engine: "1.0L Petrol",
      Mileage: "18-22 km/L",
      KeyFeatures: "Touchscreen, Airbags, ABS Brakes",
      Price: "PKR 4.1M",
    },
    Alto: {
      Model: "Alto VXL AGS",
      Engine: "0.66L Petrol",
      Mileage: "20-24 km/L	",
      KeyFeatures: "Keyless Entry, Power Windows, ABS",
      Price: "PKR 3.2M",
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
          <p><strong>Engine:</strong> ${carDetails.Engine}</p>
          <p><strong>Mileage:</strong> ${carDetails.Mileage}</p>
          <p><strong>Key Features:</strong> ${carDetails.KeyFeatures}</p>
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
  

