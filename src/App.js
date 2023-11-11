// App.js
import React from 'react';
import { Navbar, Nav, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';
import './index.css'; // Assurez-vous d'importer votre fichier CSS

const votrePrenom = ""; // Remplacer par votre prénom

const App = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="/img/3.png" // Remplacez par le chemin de votre logo
            alt="Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Accueil</Nav.Link>
          <Nav.Link href="#features">Fonctionnalités</Nav.Link>
          <Nav.Link href="#pricing">Prix</Nav.Link>
        </Nav>
      </Navbar>
      <div className="centered-content">
        <Card style={{ width: '18rem', margin: '20px' }}>
          <Card.Body>
            <Image imageUrl="/img/1.jpeg" alwaysShowImage={true} />
            <Name />
            <Price />
            <Description  ><h1>Nike c'est le futur </h1></Description>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', margin: '20px' }}>
          <Card.Body>
            <Image imageUrl1="/img/3.jpeg" alwaysShowImage={true} />
            <Name />
            <Price />
            <Description />
          </Card.Body>
        </Card>
       
        <p className="greeting-message">
          Bonjour, {votrePrenom ? votrePrenom : 'là'} !
        </p>
        <Image showImage={votrePrenom !== ''} />
      </div>
    </div>
  );
};

export default App;
