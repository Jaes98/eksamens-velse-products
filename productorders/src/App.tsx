import './App.css'
import ProductList from './components/product/ProductList'
import DeliveryList from './components/deliveries/DeliveryList'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/deliveries" element={<DeliveryList />} />
          <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default App
