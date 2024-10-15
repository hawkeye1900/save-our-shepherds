import "./App.css";

const currentDogs = [
  {
    name: "Bear",
    sex: "Male",
    age: 3,
    photo: "/images/bear.jpg",
  }, 
  {
    name: "Rose",
    sex: "Female",
    age: 2,
    photo: "/images/rose.jpg",
  }, 
  {
    name: "Vader",
    sex: "Male",
    age: 3,
    photo: "/images/vader.jpg",
  },
  {
    name: "Prince",
    sex: "Male",
    age: 3,
    photo: "/images/prince.jpg",
  }, 
   {
    name: "Goofy",
    sex: "Male",
    age: 5,
    photo: "/images/goofy.jpg",
  },
   {
    name: "Sofia",
    sex: "Female",
    age: 4,
    photo: "/images/sofia.jpg",
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <CurrentDogs />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Save Our Shepherds - German Shepherd Rescue</h1>;
}

function Dog(props) {
  return (
    <div>
      <img src={props.photo} alt="GSD called {props.name}" />
      <h2>Name: {props.name}</h2>
      <p>Sex: {props.sex}</p>
      <p>Age: {props.age}</p>
      <button>Find out more</button>
    </div>
  );
}

function CurrentDogs() {
  return (
    <div>
      <h2>Shepherds looking for a home</h2>
      <div>
        {currentDogs.map(dog => <Dog name={dog.name} sex={dog.sex} age={dog.age} photo={dog.photo}/>)}
      </div>
      
    </div>
  );
}

function Footer() {
  const openHours = 12;
  const closedHours = 16;
  const hour = new Date().getHours();
  const isOpen = hour >= openHours && hour <= closedHours;

  return (
    <footer>
      <p>Save Our Shepherds</p>
      <p>
        We are currently {isOpen ? "open" : "closed"} for phone enquiries.
        {isOpen ? "" : " Please use our contact form."}
      </p>
      <p>We open for phone enquiries from 12:00 - 16:00hrs our time.</p>
      <p>
        {new Date().toLocaleTimeString()} 0n {new Date().toLocaleDateString()}
      </p>
    </footer>
  );
}

export default App;
