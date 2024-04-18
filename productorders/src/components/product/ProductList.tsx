import { useEffect, useState } from 'react';

type Product = {
    id: number;
    name: string;
    price: number;
    weightInGrams: number;
};

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:8089/products", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
                const data = await response.json();
                setProducts(data);
                
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        
        fetchProducts();
    }, []);
    console.log('Products:', products);
    
    return (
      <div>
        <h1>Product List</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.weightInGrams}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}
