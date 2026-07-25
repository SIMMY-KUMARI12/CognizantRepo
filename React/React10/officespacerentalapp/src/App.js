import React from 'react';
import './App.css';

const element = "Office Space";
const officeImg = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400";

const officeList = [
  { Name: 'DBS', Rent: 50000, Address: 'Chennai' },
  { Name: 'TCS', Rent: 75000, Address: 'Bangalore' },
  { Name: 'Infosys', Rent: 45000, Address: 'Pune' },
  { Name: 'Wipro', Rent: 65000, Address: 'Hyderabad' },
];

function App() {
  return (
    <div>
      <h1>{element} , at Affordable Range</h1>
      <img src={officeImg} width="25%" height="25%" alt="Office Space" />

      {officeList.map((ItemName, index) => {
        let colors = [];
        if (ItemName.Rent <= 60000) {
          colors.push('textRed');
        } else {
          colors.push('textGreen');
        }

        return (
          <div key={index}>
            <h1>Name: {ItemName.Name}</h1>
            <h3 className={colors[0]}>Rent: Rs. {ItemName.Rent}</h3>
            <h3>Address: {ItemName.Address}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;