# WTWR (What to Wear?)

## About the project

The idea of the application is pretty simple - we make a call to an API, which then responds with the daily weather forecast. We collect the weather data, process it, and then based on the forecast, we recommend suitable clothing to the user.

## Features

- Reads the current weather for a chosen location from the OpenWeather API when the page loads
- Shows the current date and city in the header
- Shows the current temperature in the weather card, with a background that matches the weather conditions and time of day
- Switches the displayed temperature between Fahrenheit and Celsius with a toggle switch
- Filters the clothing item cards based on the current weather type (hot, warm, or cold)
- Has two routes: the main page and a profile page that shows all of the user's items
- Loads, adds, and deletes clothing items through a json-server mock API
- Adds new garments with a controlled form (custom `useForm` hook) and confirms deletions with a confirmation modal
- Modals can be closed with the close button, by pressing the Escape key, or by clicking on the overlay

## Technologies and techniques

- React 18 (functional components and hooks: `useState`, `useEffect`, `useCallback`, `useContext`, and a custom `useForm` hook)
- React Router v6 for the `/` and `/profile` routes
- React context (`CurrentTemperatureUnitContext`) for the temperature unit toggle
- Vite as the build tool and development server
- The Fetch API for requesting data from the OpenWeather API and the json-server mock API
- BEM methodology for naming and organizing CSS classes
- Flexbox and Grid layouts with media queries for responsiveness
- `normalize.css` and the Cabinet Grotesk font family

## Links

- [Live site on GitHub Pages](https://godevun.github.io/se_project_react/)
- [Figma Design](https://www.figma.com/design/F03bTb81Pw8IDPj5Y9rc5i/Sprint-10-Project--WTWR)

## Running the project

The app expects the json-server mock API to be running, so use two terminals:

```bash
# Terminal 1: start the mock API
json-server --watch db.json --id _id --port 3001

# Terminal 2: start the app
npm install
npm run dev
```

If you don't have json-server installed, install it globally first with `npm install -g json-server@^0`.

Before running the project, paste your personal OpenWeather API key into `src/utils/constants.js`.
