import { useRouteError } from "react-router-dom";
import "../App.css";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);


    return (
        <div id="error-page" className="App">
            <h1>Ooops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.status || error.message}</i>
            </p>
        </div>
    );
}









