import LoginButton from "../components/login/login";

export function LoginPage() {
    return (
        <>
        <div>
        <h1 className="loginTitle">¿PREPARADO PARA CONOCER A TUS SUPERS?</h1>
        </div>
        <img className="backphoto" src="./static/background.jpg" alt="background" />

        <h3 className="loginTitle">¡ENTRA Y DESCUBRE EL UNIVERSO DE MARVEL SUPERS!</h3>
        
        <LoginButton></LoginButton>
        </>
    )
}