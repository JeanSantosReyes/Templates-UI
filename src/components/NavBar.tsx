
export const NavBar = () => {
    return (
        <nav>
            <div className="columns is-vcentered barra">
                <div className="column is-3 logo">
                    <img src="/assets/images/Group.svg" alt="logo" />
                </div>
                <div className="column is-6 ww"></div>
                <div className="column is-1 gg">
                    <a href="https://jean-santos.web.app/" style={{ color: '#ffffff' }}>Inicio</a>
                </div>
                <div className="column is-1 gg">
                    <a href="https://jean-santos.web.app/" style={{ color: '#ffffff' }}>Comercios</a>
                </div>
            </div>
        </nav>
    )
}
