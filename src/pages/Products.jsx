import axios from "axios";
import { useState, useEffect } from "react";


export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    function fetchProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then((resp) => {
                setProducts(resp.data);
            })
    }
    return (
        <div className="container">
            <h2>Prodotti</h2>
            <div className="row p-3 g-4">

                {products.map((product) =>
                    <div key={product.id} className="col-12 col-sm-6 col-lg-3">
                        <div className="card h-100">
                            <img src={product.image} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <a href="#" className="btn btn-primary">Aggiungi al carrello</a>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}