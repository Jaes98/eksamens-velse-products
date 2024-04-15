import './App.css'
import ProductList from './components/product/ProductList'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
          <Route path="/products" element={<ProductList />} />
    </Routes>
  )
}

export default App
