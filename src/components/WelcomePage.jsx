import { Link } from "react-router";
function WelcomePage() {
    return(
        <>
        <h1 className="TitleWelcome">
            WELCOME
        </h1>
        <Link to="login" className="StartButton">
            Start
        </Link>
        </>
    )
}

export default WelcomePage;