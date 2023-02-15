// Custom Hook Context
import { useMT } from '../../hooks/useMT';
// Icons heroicons
import { XMarkIcon } from '@heroicons/react/24/outline';
// Components Material Tailwind
import { Button, IconButton, Switch, Typography } from '@material-tailwind/react';

const sidenavColors = {
    blue: 'from-blue-400 to-blue-600',
    'blue-gray': 'from-blue-gray-800 to-blue-gray-900',
    green: 'from-green-400 to-green-600',
    orange: 'from-orange-400 to-orange-600',
    red: 'from-red-400 to-red-600',
    pink: 'from-pink-400 to-pink-600',
};

export const Configurator = () => {

    const { controller, setOpenConfigurator, setSidenavColor, setFixedNavbar, setSidenavType } = useMT()
    const { openConfigurator, sidenavColor, sidenavType, fixedNavbar } = controller;

    return (
        <aside
            className={`fixed top-0 right-0 z-50 h-screen w-96 bg-white px-2.5 shadow-lg transition-transform duration-300
            ${openConfigurator ? "translate-x-0" : "translate-x-96"}`}
        >
            <div className="flex items-start justify-between px-6 pt-8 pb-6">
                <div>
                    <Typography variant="h5" color="blue-gray">
                        Dashboard Configurator
                    </Typography>
                    <Typography className="font-normal text-blue-gray-600">
                        See our dashboard options.
                    </Typography>
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={() => setOpenConfigurator(false)}
                >
                    <XMarkIcon strokeWidth={2.5} className="h-5 w-5" />
                </IconButton>
            </div>
            <div className="py-4 px-6">
                {/* Colors */}
                <div className="mb-12">
                    <Typography variant="h6" color="blue-gray">
                        Sidenav Colors
                    </Typography>
                    <div className="mt-3 flex items-center gap-2">
                        {
                            Object.entries(sidenavColors).map(([color, className]) => (
                                <span
                                    key={color}
                                    className={`h-6 w-6 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-105
                                    ${className} ${sidenavColor === color ? 'border-black' : ''}`}
                                    onClick={() => setSidenavColor(color)}
                                />
                            ))
                        }
                    </div>
                </div>
                {/* Sidenav Theme */}
                <div className="mb-12">
                    <hr className='py-3' />
                    <Typography variant="h6" color="blue-gray">
                        Sidenav Types
                    </Typography>
                    <Typography variant="small" color="gray">
                        Choose between 3 different sidenav types.
                    </Typography>
                    <div className="mt-3 flex items-center gap-2">
                        <Button
                            variant={sidenavType === 'dark' ? 'gradient' : 'outlined'}
                            onClick={() => setSidenavType('dark')}
                        >
                            Dark
                        </Button>
                        <Button
                            variant={sidenavType === 'transparent' ? 'gradient' : 'outlined'}
                            onClick={() => setSidenavType('transparent')}
                        >
                            Transparent
                        </Button>
                        <Button
                            variant={sidenavType === 'white' ? 'gradient' : 'outlined'}
                            onClick={() => setSidenavType('white')}
                        >
                            White
                        </Button>
                    </div>
                </div>
                {/* Navbar Fixed */}
                <div className="mb-12">
                    <hr />
                    <div className="flex items-center justify-between py-5">
                        <Typography variant="h6" color="blue-gray">
                            Navbar Fixed
                        </Typography>
                        <Switch
                            id="navbar-fixed" // no required
                            onChange={() => setFixedNavbar(!fixedNavbar)}
                        />
                    </div>
                </div>

            </div>
        </aside>
    )
}
