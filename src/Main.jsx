import React from 'react';
import Header from './header';
import Footer from './footer';
import Nav from './nav';

function Main() {
  const appStyle = {
    backgroundColor: 'green', 
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
    margin: 0, // Ensure no default margin around the body
  };

  const mainStyle = {
    width: '100%', // Ensure the main element takes the full width of the container
  };

  return (
    <div style={appStyle}>
      <Header/>
      <Nav/>
      <main style={mainStyle}>
        <h2>Home</h2>
        <p>This is a sample homepage. You can customize this section with your own content.</p>
        
        <h2>About</h2>
        <p>This section can include information about you or your website.</p>
        
        <h2>Services</h2>
        <p>Detail the services you offer here.</p>
        
        <h2>Contact</h2>
        <p>Provide contact information or a contact form here.</p>
      </main>
      <Footer/>
    </div>
  );
}

export default Main;
