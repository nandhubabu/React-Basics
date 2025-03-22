import React from 'react';
import './App.css';
import Card from './card'; // Import the Card component
import Contacts from './contacts'; // Import the Contacts array
import './App.css';
import { Footer } from './component/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        {Contacts.map(contact => ( // Map over Contacts to render Card components
          <Card 
            key={contact.id} 
            name={contact.name} 
            img={contact.img} 
            tel={contact.phone} 
            email={contact.email} 
          />
        ))}
      </header>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
