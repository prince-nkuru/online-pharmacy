import React from 'react';
// import ProductCard from './ProductCard';
import { useNavigate } from 'react-router';
import './ListProduct.css'



const products = [
    { id: 1, name: 'Paracetamol', price: '$19.99', img: 'https://www.chemist-4-u.com/media/catalog/product/p/a/paracetamol_tablets_500mg.jpg' },
    { id: 2, name: 'morphine', price: '$29.99', img: 'https://tse3.mm.bing.net/th?id=OIP.oEmKeunkkJtHULOm6U8gpgHaE8&pid=Api&P=0&h=220' },
    { id: 3, name: 'codeine', price: '$39.99', img: 'https://tse3.mm.bing.net/th?id=OIP.p54j2Jq0bRi6iGb0_mBH4AHaE8&pid=Api&P=0&h=220' },
    { id: 4, name: 'augmentin', price: '$49.99', img: 'https://tse4.mm.bing.net/th?id=OIP.TYk7F8ttOE0XODGcJz26TwHaEX&pid=Api&P=0&h=220' },
    { id: 5, name: 'Product 1', price: '$19.99', img: 'https://tse4.mm.bing.net/th?id=OIP.NsiespZAeMItSp_itm2_oAHaHa&pid=Api&P=0&h=220' },
    { id: 6, name: 'Product 2', price: '$29.99', img: 'https://tse2.mm.bing.net/th?id=OIP.jo4zMXllm4VwZTpwO3YDDgHaHa&pid=Api&P=0&h=220' },
    { id: 7, name: 'Product 3', price: '$39.99', img: 'https://tse3.mm.bing.net/th?id=OIP.p54j2Jq0bRi6iGb0_mBH4AHaE8&pid=Api&P=0&h=220' },
    { id: 8, name: 'Product 4', price: '$49.99', img: 'https://tse4.mm.bing.net/th?id=OIP.TYk7F8ttOE0XODGcJz26TwHaEX&pid=Api&P=0&h=220' },
    { id: 1, name: 'Product 1', price: '$19.99', img: 'https://www.chemist-4-u.com/media/catalog/product/p/a/paracetamol_tablets_500mg.jpg' },
    { id: 2, name: 'Product 2', price: '$29.99', img: 'https://tse3.mm.bing.net/th?id=OIP.oEmKeunkkJtHULOm6U8gpgHaE8&pid=Api&P=0&h=220' },
    { id: 3, name: 'Product 3', price: '$39.99', img: 'https://tse3.mm.bing.net/th?id=OIP.p54j2Jq0bRi6iGb0_mBH4AHaE8&pid=Api&P=0&h=220' },
    { id: 4, name: 'Product 4', price: '$49.99', img: 'https://tse4.mm.bing.net/th?id=OIP.TYk7F8ttOE0XODGcJz26TwHaEX&pid=Api&P=0&h=220' },
];

const ListProduct = () => {
    const nav = useNavigate()
    const handleCart = () =>{
        nav('/log')
    }
    return (
<section id="products">
            <h2>Featured Products</h2>
    <div className="product-grid">
                {products.map(product => (
                    // <ProductCard key={product.id} product={product} />

        <div className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={handleCart}>Add to Cart</button>
        </div>

                ))}
    </div>

            
</section>
    );
};

export default ListProduct;
