import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    function goBack() {
        event.preventDefault();
        navigate(-1);
    }

    return (
        <div className="container p-5 text-danger">
            <h1>404 - Pagina non trovata</h1>
            <p>Complimenti, anche la tua voglia di vivere non è stata trovata.</p>
            <a onClick={goBack} className="btn btn-danger me-3" href="">Torna indietro</a>
            <Link className="btn btn-danger" to='/'>Torna alla home</Link>
        </div>
    )
}