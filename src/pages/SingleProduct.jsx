import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct();
    }, [id])

    function fetchProduct() {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            setProduct(resp.data);
        })
    }
    return (

        <div className="container p-3">
            {product !== null && (
                <div className="product-banner">
                    <div className="product-top">
                        <h2 className="text-white">{product.title}</h2>
                        <div className="product-body d-flex text-white">
                            <img src={product.image} alt={product.title} />
                            <div className="product-info p-3">
                                <h4>Descrizione:</h4>
                                <p>{product.description}</p>
                                <h4>A soli {product.price}&euro;</h4>
                                <a className='btn btn-dark' href="">Aggiungi al carrello</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}