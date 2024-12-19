# IP-Address Tracker

IP Address Tracker is a web application that allows users to track the geographical location of a given IP address. The application provides information such as the IP address, location (including city, region, and country), timezone, and Internet Service Provider (ISP). Additionally, the location is displayed on an interactive map using Leaflet.js


# Preview

<img width="1701" alt="Screenshot 2024-12-19 at 15 03 16" src="https://github.com/user-attachments/assets/dbd1a816-22ea-48b5-8a5c-56179e85d9cf" />


# Stack
React

Typescript

Tailwindcss

Leaflet for map integration

Ipify API.

# Features

User-Friendly Interface: The application has a clean and intuitive user interface, making it easy for users to input an IP address and retrieve location details.

Automatic Location Retrieval: On page load, the application automatically fetches the user's IP address and displays relevant location information.

Interactive Map: The geographical location is visually represented on an interactive map using Leaflet.js, allowing users to explore the location in more detail.




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
