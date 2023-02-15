import { NavBar } from '../components/NavBar'

export const Section1 = () => {
    return (
        <div className='seccion1'>
            <NavBar />
            <div className="columns sec1">
                <div className="column is-5">
                    <img className="imagen1" src="/assets/images/telefono1.svg" alt="" />
                </div>
                <div className="column is-6 ff">
                    <span className="comerce">
                        ComerceApp <br />te ayuda a manejar <br />tus reservas
                    </span>
                    <br />
                    <div className="texto">
                        <span>
                            ¡La primera aplicación móvil que te permite generar resevas en <br />
                            restaurantes, doctores, estilo de vida y más en un solo lugar!
                        </span>
                    </div>
                    <br />
                    <div className="descargas">
                        <img src="/assets/images/apple.png" alt="" />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <img src="/assets/images/google.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
