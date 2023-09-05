const cars = [
    {
      id: 1,
      title: "Toyota Camry",
      category: "Sedan",
      price: 25000,
      desc: "The Toyota Camry is a reliable and fuel-efficient sedan known for its comfortable ride.",
      img: "item-1.webp",
    },
    {
      id: 2,
      title: "Honda Civic",
      category: "Sedan",
      price: 22000,
      desc: "The Honda Civic is a compact sedan with excellent fuel economy and a spacious interior.",
      img: "item-2.webp",
    },
    {
      id: 3,
      title: "Ford F-150",
      category: "Truck",
      price: 40000,
      desc: "The Ford F-150 is a powerful pickup truck known for its towing capacity and rugged design.",
      img: "item-3.webp",
    },
    {
      id: 4,
      title: "Tesla Model 3",
      category: "Electric",
      price: 50000,
      desc: "The Tesla Model 3 is an all-electric sedan with cutting-edge technology and impressive range.",
      img: "item-4.webp",
    },
    {
      id: 5,
      title: "Chevrolet Silverado",
      category: "Truck",
      price: 38000,
      desc: "The Chevrolet Silverado is a versatile and dependable pickup truck with various engine options.",
      img: "item-5.webp",
    },
    {
      id: 6,
      title: "Nissan Altima",
      category: "Sedan",
      price: 23000,
      desc: "The Nissan Altima offers a comfortable ride and good fuel efficiency for daily commuting.",
      img: "item-6.webp",
    },
    {
      id: 7,
      title: "BMW 3 Series",
      category: "Luxury",
      price: 45000,
      desc: "The BMW 3 Series is a luxury sedan known for its sporty performance and upscale interior.",
      img: "item-7.webp",
    },
    {
      id: 8,
      title: "Jeep Wrangler",
      category: "SUV",
      price: 35000,
      desc: "The Jeep Wrangler is an iconic off-road SUV with excellent off-roading capabilities.",
      img: "item-8.webp",
    },
    {
      id: 9,
      title: "Hyundai Sonata",
      category: "Sedan",
      price: 24000,
      desc: "The Hyundai Sonata is a midsize sedan with a comfortable interior and modern features.",
      img: "item-9.webp",
    },
    {
      id: 10,
      title: "Chevrolet Corvette",
      category: "SportsCar",
      price: 70000,
      desc: "The Chevrolet Corvette is a high-performance sports car with a sleek design and powerful engine options.",
      img: "item-10.webp",
    },
    {
      id: 11,
      title: "Subaru Outback",
      category: "SUV",
      price: 28000,
      desc: "The Subaru Outback is a versatile SUV with all-wheel drive and plenty of cargo space.",
      img: "item-11.webp",
    },
    {
      id: 12,
      title: "Audi A4",
      category: "Luxury",
      price: 48000,
      desc: "The Audi A4 is a luxury sedan known for its advanced technology and refined interior.",
      img: "item-12.webp",
    },
    {
      id: 13,
      title: "Mazda CX-5",
      category: "SUV",
      price: 27000,
      desc: "The Mazda CX-5 is a stylish and compact SUV with responsive handling and a comfortable cabin.",
      img: "item-13.webp",
    },
    {
      id: 14,
      title: "Volkswagen Golf",
      category: "Hatchback",
      price: 21000,
      desc: "The Volkswagen Golf is a compact hatchback with a fun-to-drive nature and practicality.",
      img: "item-14.webp",
    },
    {
      id: 15,
      title: "Lexus RX",
      category: "Luxury",
      price: 52000,
      desc: "The Lexus RX is a luxury SUV with a plush interior and a reputation for reliability.",
      img: "item-15.webp",
    },
    {
      id: 16,
      title: "Jeep Grand Cherokee",
      category: "SUV",
      price: 42000,
      desc: "The Jeep Grand Cherokee is a midsize SUV known for its off-road capabilities and spacious cabin.",
      img: "item-16.webp",
    }
  ];
  
  
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  //DOMCOntentLOaded helps to display all items when page loads 
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(cars);
    displayMenuButtons();
  });
  
  function diplayMenuItems(cars) {
    let displayMenu = cars.map(function (item) {
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
  }
  
  function displayMenuButtons() {
    const categories = cars.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = cars.filter(function (menuItem) {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(cars);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
}