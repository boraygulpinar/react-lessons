import { useState } from 'react'
import './App.css'
import Container from './Container';
import Product from './Product';



function App() {

  return (
    <div>
      <Container>
        <Product productName={"Pantolon"} price={800} />
      </Container>
    </div>
  )
}

export default App
