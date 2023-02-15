
export const Footer = () => {
    return (
        <footer>
            <div className="footer" style={{ backgroundColor: 'black', paddingInline:'8%', maxHeight:'30vh' }}>
                <div className="columns is-vcentered">
                    <div className="column">
                        <img src="/assets/images/logo-f.svg" alt="" />
                    </div>
                    <div className="column" style={{ textAlign: 'right' }}>
                        <img src="/assets/images/facebook.svg" style={{ display: 'inline' }} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src="/assets/images/instagram.svg" style={{ display: 'inline' }} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src="/assets/images/tuit.svg" style={{ display: 'inline' }} alt="" />
                    </div>
                </div>
                <div className="columns is-vcentered">
                    <div className="column">
                        <span style={{ color: 'white' }}>© Comerce. Todos los derechos reservados, 2019</span>
                    </div>
                    <div className="column rig">
                        <span style={{ color: 'white' }}>Terminos y Condiciones | Políticas Privacidad</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
