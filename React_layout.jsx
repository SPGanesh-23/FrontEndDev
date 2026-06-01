import React from 'react';
import { useState } from 'react'

function Header() {
  return (
    <header style={{ backgroundColor: "#4CAF50", color: "white", padding: "20px", textAlign: "center" }}>
      <h1>My React Website</h1>
    </header>
  );
}

function MainContent() {
  return (
    <main style={{ padding: "20px", textAlign: "center" }}>
      <h2>Welcome!</h2>
      <p>This is a single-page React application.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: "#333", color: "white", padding: "10px", textAlign: "center" }}>
      <p>© 2026 My React Website</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;