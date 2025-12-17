
import React from 'react';
import ReactDOM from 'react-dom'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

/*
  Header
    - Logo
    - Nav Items

  Body
    - Search
    - RestaurantContainer
        - RestaurantCard
            - Img
            - Name of Res, Star Rating, cuisine, delivery time

  Footer
    - Copyright
    - Links
    - Address
    - Contact
*/



const Header = ()=>{
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}


const styleCard = {
  backgroundColor : "#f0f0f0",
  border : "none"
}


const RestaurantCard = () => {
  return (
    <div className='res-card' style={styleCard}>
        <img className='res-logo' alt='res-card' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/7/28/f36af56f-c959-4a2d-aa16-150dd6d4fe94_a08441d9-6735-4a48-929b-a15d414048cb.jpg'></img>
        <h3>
          Meghana Foods 
        </h3>
        <h4>Biryani, North Indian, Asian</h4>
        <h4>4.4 stars</h4>
        <h4>38 mins</h4>
    </div>
  )
}

const Body = ()=>{
  return (
  <div className='body'>
    <div className='search'>
      Search
    </div>
       <div className='res-container'>
          <RestaurantCard />
      </div>
  </div>
)
}


const AppLayout = ()=>{
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

export default AppLayout;







