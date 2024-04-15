import React, { useEffect, useState } from 'react';

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
                const response = await fetch("http://localhost:8089/", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
                const data = await response.json();
                console.log(data, 'data');
                
                setProducts(data);
                console.log('Products:', data);
                
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        
        fetchProducts();
    }, []);
    console.log('Products:', products);
    
    return (
      <div>
        <h2>Product List</h2>
        <div>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.weightInGrams}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}
