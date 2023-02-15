# Template Simple Website

## Dependencias instaladas
* React Router Dom - Rutas
* Heroicons
* Tailwind CSS:
  * [Instalacion y configuracion sencilla](https://www.codingthesmartway.com/how-to-use-tailwind-css-with-react/)
  * [Instalacion y configuracion 2da forma](https://bluuweb.github.io/tailwindcss/06-react/#app)
* [Material Tailwind](https://www.material-tailwind.com/docs/react/guide/cra)

```
<!-- Rutes & Heroicons-->
npm install react-router-dom

npm install @heroicons/react
```

```
<!-- Tailwind CSS & Material Tailwind -->
npm i --save tailwindcss postcss autoprefixer @material-tailwind/react

<!-- Generate Configuration Files -->
npx tailwindcss init -p

<!-- Configure Path To Template Files in tailwind.config.js -->
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

<!-- Add Tailwind Directives in styles.css -->
@tailwind base;
@tailwind components;
@tailwind utilities;

<!-- Theme Provider in index.tsx -->
import { ThemeProvider } from "@material-tailwind/react";

<React.StrictMode>
    <ThemeProvider>
        <App />
    </ThemeProvider>
</React.StrictMode>
```


# Screenshot
![Home](/screenshots/ui-3.1.png)

![About](/screenshots/ui-3.2.png)

![Tables](/screenshots/ui-3.3.png)

![Configuration](/screenshots/ui-3.4.png)

![Navbar fixed](/screenshots/ui-3.6.png)

![Movil](/screenshots/ui-3.5.png)