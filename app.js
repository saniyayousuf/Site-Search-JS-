
var mobileBrands = {
  apple: {
    models: {
      iPhone12: {
        name: "iPhone 12",
        ram: "4GB",
        rom: "64GB",
        price: "$799",
        releaseDate: "October 2020"
      },
      iPhoneSE: {
        name: "iPhone SE",
        ram: "3GB",
        rom: "64GB",
        price: "$399",
        releaseDate: "April 2020"
      },
      iPhone11: {
        name: "iPhone 11",
        ram: "4GB",
        rom: "64GB",
        price: "$699",
        releaseDate: "September 2019"
      },
    },
  },
  samsung: {

  models:{  
    galaxyS20: {
    name: "Galaxy S20",
    ram: "8GB",
    rom: "128GB",
    price: "$999",
    releaseDate: "March 2020"
  },
  galaxyA51: {
    name: "Galaxy A51",
    ram: "6GB",
    rom: "128GB",
    price: "$399",
    releaseDate: "December 2019"
  },
  galaxyNote10: {
    name: "Galaxy Note 10",
    ram: "8GB",
    rom: "256GB",
    price: "$949",
    releaseDate: "August 2019"
  }}
  },
  google: {
    models:{
      pixel4: {
        name: "Pixel 4",
        ram: "6GB",
        rom: "64GB",
        price: "$799",
        releaseDate: "October 2019"
      },
      pixel4a: {
        name: "Pixel 4a",
        ram: "6GB",
        rom: "128GB",
        price: "$349",
        releaseDate: "August 2020"
      },
      pixel5: {
        name: "Pixel 5",
        ram: "8GB",
        rom: "128GB",
        price: "$699",
        releaseDate: "October 2020"
      },
    }
  },
  xiaomi: {
   models:{
    mi10: {
      name: "Mi 10",
      ram: "8GB",
      rom: "128GB",
      price: "$699",
      releaseDate: "February 2020"
    },
    redmiNote9Pro: {
      name: "Redmi Note 9 Pro",
      ram: "6GB",
      rom: "128GB",
      price: "$249",
      releaseDate: "March 2020"
    },
    pocoX3: {
      name: "Poco X3",
      ram: "6GB",
      rom: "64GB",
      price: "$229",
      releaseDate: "September 2020"
    },
   }
  },
  oneplus: {
  models:{
    oneplus8Pro: {
      name: "OnePlus 8 Pro",
      ram: "12GB",
      rom: "256GB",
      price: "$899",
      releaseDate: "April 2020"
    },
    oneplusNord: {
      name: "OnePlus Nord",
      ram: "8GB",
      rom: "128GB",
      price: "$399",
      releaseDate: "July 2020"
    },
    oneplus9: {
      name: "OnePlus 9",
      ram: "8GB",
      rom: "128GB",
      price: "$729",
      releaseDate: "March 2021"
    },
  }
  },
  huawei: {
    models:{
      p40Pro: {
        name: "Huawei P40 Pro",
        ram: "8GB",
        rom: "256GB",
        price: "$999",
        releaseDate: "April 2020"
      },
      mate30Pro: {
        name: "Huawei Mate 30 Pro",
        ram: "8GB",
        rom: "128GB",
        price: "$899",
        releaseDate: "September 2019"
      },
      nova7i: {
        name: "Huawei Nova 7i",
        ram: "8GB",
        rom: "128GB",
        price: "$299",
        releaseDate: "February 2020"
      },
    }
  },
  oppo: {
   models:{
    findX3Pro: {
      name: "Oppo Find X3 Pro",
      ram: "12GB",
      rom: "256GB",
      price: "$1199",
      releaseDate: "March 2021"
    },
    reno5Pro: {
      name: "Oppo Reno 5 Pro",
      ram: "8GB",
      rom: "128GB",
      price: "$499",
      releaseDate: "January 2021"
    },
    a53: {
      name: "Oppo A53",
      ram: "4GB",
      rom: "64GB",
      price: "$189",
      releaseDate: "August 2020"
    },
   }
  },
  vivo: {
   models:{
    x60Pro: {
      name: "Vivo X60 Pro",
      ram: "12GB",
      rom: "256GB",
      price: "$899",
      releaseDate: "March 2021"
    },
    v21: {
      name: "Vivo V21",
      ram: "8GB",
      rom: "128GB",
      price: "$499",
      releaseDate: "April 2021"
    },
    y20s: {
      name: "Vivo Y20s",
      ram: "6GB",
      rom: "128GB",
      price: "$249",
      releaseDate: "November 2020"
    },
   }
  },
  motorola: {
     models:{
      edgePlus: {
        name: "Motorola Edge Plus",
        ram: "12GB",
        rom: "256GB",
        price: "$999",
        releaseDate: "May 2020"
      },
      motoGPower: {
        name: "Motorola Moto G Power",
        ram: "4GB",
        rom: "64GB",
        price: "$249",
        releaseDate: "April 2020"
      },
      oneFusionPlus: {
        name: "Motorola One Fusion+",
        ram: "6GB",
        rom: "128GB",
        price: "$349",
        releaseDate: "June 2020"
      },
     }
    
  
  },
};


  
      
// Get the search input, brand select, and search results elements
var searchInput = document.getElementById("searchInput");
var brandSelect = document.getElementById("brandSelect");
var searchResults = document.getElementById("searchResults");

// Render the keys of the mobileBrands object on the brand select dropdown
for (var brand in mobileBrands) {
  if (mobileBrands.hasOwnProperty(brand)) {
    var option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandSelect.appendChild(option);
  }
}

// Event listener for search input
searchInput.addEventListener("input", function() {
  var searchTerm = searchInput.value.toLowerCase();
  var selectedBrand = brandSelect.value;

  // Clear previous search results
  searchResults.innerHTML = "";

  // Iterate through the mobileBrands object
  for (var brand in mobileBrands) {
    if (mobileBrands.hasOwnProperty(brand)) {
      // Check if the selected brand matches the current brand or if "All Brands" is selected
      if (selectedBrand === brand || selectedBrand === "") {
        var brandObj = mobileBrands[brand];

        // Iterate through the models of the current brand
        for (var model in brandObj.models) {
          if (brandObj.models.hasOwnProperty(model)) {
            var modelObj = brandObj.models[model];

            // Check if the model name or any property value matches the search term
            if (
              model.toLowerCase().indexOf(searchTerm) !== -1 ||
              modelObj.name.toLowerCase().indexOf(searchTerm) !== -1 ||
              modelObj.ram.toLowerCase().indexOf(searchTerm) !== -1 ||
              modelObj.rom.toLowerCase().indexOf(searchTerm) !== -1 ||
              modelObj.price.toLowerCase().indexOf(searchTerm) !== -1 ||
              modelObj.releaseDate.toLowerCase().indexOf(searchTerm) !== -1
            ) {
              // Create a list item for the matching model
              var listItem = document.createElement("li");
              listItem.textContent =
                modelObj.name +
                " - RAM: " +
                modelObj.ram +
                ", ROM: " +
                modelObj.rom +
                ", Price: " +
                modelObj.price;
              searchResults.appendChild(listItem);
            }
          }
        }
      }
    }
  }
});

// Event listener for brand select
brandSelect.addEventListener("change", function() {
  // Trigger the search input event to update the search results
  searchInput.dispatchEvent(new Event("input"));
});