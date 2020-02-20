// PLAYERS OBJECT
const players = [
  {
    name: "Sebastián",
    lastName: "Moyano",
    number: 25,
    position: 1
  },
  {
    name: "Marcos",
    lastName: "Peano",
    number: 1,
    position: 1
  },
  {
    name: "Alan",
    lastName: "Sosa",
    number: 13,
    position: 1
  },
  {
    name: "Brian",
    lastName: "Blasi",
    number: 17,
    position: 2
  },
  {
    name: "Jonathan",
    lastName: "Bottinelli",
    number: 6,
    position: 2
  },
  {
    name: "Jorge",
    lastName: "Caicedo",
    number: 28,
    position: 2
  },
  {
    name: "Franco",
    lastName: "Calderón",
    number: 2,
    position: 2
  },
  {
    name: "Franco",
    lastName: "Godoy",
    number: 24,
    position: 2
  },
  {
    name: "Claudio",
    lastName: "Corvalán",
    number: 3,
    position: 2
  },
  {
    name: "Francisco",
    lastName: "Gerometta",
    number: 4,
    position: 2
  },
  {
    name: "Federico",
    lastName: "Milo",
    number: 14,
    position: 2
  },
  {
    name: "Ezequiel",
    lastName: "Bonifacio",
    number: 19,
    position: 3
  },
  {
    name: "Emanuel",
    lastName: "Cecchini",
    number: 5,
    position: 3
  },
  {
    name: "Sebastián",
    lastName: "Assis",
    number: 15,
    position: 3
  },
  {
    name: "Juan",
    lastName: "Nardoni",
    number: 30,
    position: 3
  },
  {
    name: "Javier",
    lastName: "Méndez",
    number: 27,
    position: 3
  },
  {
    name: "Jalíl",
    lastName: "Elías",
    number: 11,
    position: 3
  },
  {
    name: "Lucas",
    lastName: "Rios",
    number: 8,
    position: 3
  },
  {
    name: "Gabriel",
    lastName: "Carabajal",
    number: 10,
    position: 3
  },
  {
    name: "Brian",
    lastName: "Álvarez",
    number: 29,
    position: 3
  },
  {
    name: "Fernando",
    lastName: "Elizari",
    number: 18,
    position: 3
  },
  {
    name: "Gastón",
    lastName: "Comas",
    number: 21,
    position: 3
  },
  {
    name: "Walter",
    lastName: "Bou",
    number: 9,
    position: 4
  },
  {
    name: "Franco",
    lastName: "Troyanski",
    number: 22,
    position: 4
  },
  {
    name: "Nicolás",
    lastName: "Mazzola",
    number: 12,
    position: 4
  },
  {
    name: "Javier",
    lastName: "Cabrera",
    number: 7,
    position: 4
  },
  {
    name: "Alfredo",
    lastName: "Pussetto",
    number: 16,
    position: 4
  },
  {
    name: "Gastón",
    lastName: "Gonzalez",
    number: 20,
    position: 4
  },
  {
    name: "Mauro",
    lastName: "Luna Diale",
    number: 23,
    position: 4
  },
  {
    name: "Ezequiel",
    lastName: "Cañete",
    number: 26,
    position: 4
  }
];

// VARIABLES AND FUNCTION
const cardsContainer = document.getElementById("players-area");
const all = document.getElementById("all");
const goalkeepers = document.getElementById("goalkeepers");
const defenders = document.getElementById("defenders");
const midfielders = document.getElementById("midfielders");
const forwards = document.getElementById("forwards");

function renderCards(el) {
  switch (el.position) {
    case 1:
      pos = "Goalkeeper";
      break;
    case 2:
      pos = "Defender";
      break;
    case 3:
      pos = "Midfielder";
      break;
    case 4:
      pos = "Forward";
      break;
  }
  const content = `<div class="player-card">
      <div class="player-info">
        <h3>${el.name}</h3>
        <h2>${el.lastName}</h2>
        <h1>${el.number}</h1>
        <p>${pos}</p>
      </div>
      <img src="no-user.jpg" alt="player photo" />
    </div>`;
  cardsContainer.innerHTML += content;
}

//INITIALIZE WITH 'ALL'
players.forEach(renderCards);

//FILTERS BUTTONS
all.addEventListener("click", function() {
  cardsContainer.innerHTML = "";
  players.forEach(renderCards);
});

goalkeepers.addEventListener("click", function() {
  cardsContainer.innerHTML = "";
  const filter = players.filter(player => player.position == 1);
  filter.forEach(renderCards);
});

defenders.addEventListener("click", function() {
  cardsContainer.innerHTML = "";
  const filter = players.filter(player => player.position == 2);
  filter.forEach(renderCards);
});

midfielders.addEventListener("click", function() {
  cardsContainer.innerHTML = "";
  const filter = players.filter(player => player.position == 3);
  filter.forEach(renderCards);
});

forwards.addEventListener("click", function() {
  cardsContainer.innerHTML = "";
  const filter = players.filter(player => player.position == 4);
  filter.forEach(renderCards);
});

//SEARCHBAR

function searchBar() {
  cardsContainer.innerHTML = "";

  let input = document.getElementById("searchbar").value.toLowerCase();
  const filter = [];

  for (i = 0; i < players.length; i++) {
    if (isNaN(input)) {
      if (
        players[i].name.toLowerCase().includes(input) ||
        players[i].lastName.toLowerCase().includes(input)
      ) {
        filter.push(players[i]);
      }
    } else {
      if (players[i].number == input) {
        filter.push(players[i]);
      }
    }
  }
  filter.forEach(renderCards);
}
