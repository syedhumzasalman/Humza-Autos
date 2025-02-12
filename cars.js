let carCompanies = {
  Toyota: {
    Corolla: {
      Model: "Corolla Altis 1.6",
      Engine: "1.6L Petrol",
      Mileage: "12-16 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 6.5M",
      image: "/images/Corolla.jpg",
    },
    Fortuner: {
      Model: "Fortuner Legender",
      Engine: "2.8L Diesel",
      Mileage: "10-12 km/L",
      seatCapacity: "7-Seater",
      Price: "PKR 18M",
      image: "/images/Fortuner.jpg",
    },
    Yaris: {
      Model: "Yaris 1.5 ATIV X",
      Engine: "1.5L Petrol",
      Mileage: "14-18 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 5.5M",
      image: "/images/Yaris.jpg",
    },
    LandCruiser: {
      Model: "Land Cruiser ZX",
      Engine: "3.5L Twin-Turbo V6",
      Mileage: "8-10 km/L",
      seatCapacity: "7-Seater",
      Price: "PKR 80M",
      image: "/images/LandCruiser.jpg",
    },
    Revo: {
      Model: "Hilux Revo V",
      Engine: "2.8L Diesel",
      Mileage: "10-14 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 12M",
      image: "/images/Revo.jpg",
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
      Model: "BR-V i-VTEC S",
      Engine: "1.5L Petrol",
      Mileage: "11-15 km/L",
      seatCapacity: "7-Seater",
      Price: "PKR 7M",
      image: "/images/BRV.jpg",
    },
    Accord: {
      Model: "Accord Hybrid",
      Engine: "2.0L Hybrid",
      Mileage: "18-22 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 20M",
      image: "/images/Accord.jpg",
    },
    HRV: {
      Model: "HR-V VTi-S",
      Engine: "1.5L Petrol",
      Mileage: "14-18 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 7.8M",
      image: "/images/HRV.jpg",
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
      Mileage: "20-24 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 3.2M",
      image: "/images/Alto.jpg",
    },
    WagonR: {
      Model: "Wagon R VXL",
      Engine: "1.0L Petrol",
      Mileage: "18-20 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 3.8M",
      image: "/images/WagonR.jpg",
    },
    Bolan: {
      Model: "Bolan VX",
      Engine: "0.8L Petrol",
      Mileage: "15-18 km/L",
      seatCapacity: "8-Seater",
      Price: "PKR 2.5M",
      image: "/images/Bolan.jpg",
    },
  },
  Kia: {
    Sportage: {
      Model: "Sportage AWD",
      Engine: "2.0L Petrol",
      Mileage: "10-12 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 10M",
      image: "/images/Sportage.jpg",
    },
    Picanto: {
      Model: "Picanto AT",
      Engine: "1.0L Petrol",
      Mileage: "14-18 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 3.8M",
      image: "/images/Picanto.jpg",
    },
    Sorento: {
      Model: "Sorento 3.5 V6",
      Engine: "3.5L Petrol",
      Mileage: "8-12 km/L",
      seatCapacity: "7-Seater",
      Price: "PKR 14M",
      image: "/images/Sorento.jpg",
    },
    Stonic: {
      Model: "Stonic EX+",
      Engine: "1.4L Petrol",
      Mileage: "12-16 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 5.5M",
      image: "/images/Stonic.jpg",
    },
  },
  Hyundai: {
    Tucson: {
      Model: "Tucson Ultimate",
      Engine: "2.0L Petrol",
      Mileage: "10-14 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 10.5M",
      image: "/images/Tucson.jpg",
    },
    Elantra: {
      Model: "Elantra GLS",
      Engine: "1.6L Petrol",
      Mileage: "12-16 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 6.8M",
      image: "/images/Elantra.jpg",
    },
    Sonata: {
      Model: "Sonata 2.5",
      Engine: "2.5L Petrol",
      Mileage: "10-14 km/L",
      seatCapacity: "5-Seater",
      Price: "PKR 14M",
      image: "/images/Sonata.jpg",
    },
    SantaFe: {
      Model: "Santa Fe Hybrid",
      Engine: "1.6L Hybrid",
      Mileage: "16-20 km/L",
      seatCapacity: "7-Seater",
      Price: "PKR 18M",
      image: "/images/SantaFe.jpg",
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
          <img class="img-fluid img-control" src="${carDetails.image}" alt="car-images">
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
  

