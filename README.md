# WTWR (What to Wear?)

## About the project

The idea of the application is pretty simple - we make a call to an API, which then responds with the daily weather forecast. We collect the weather data, process it, and then based on the forecast, we recommend suitable clothing to the user.

## Features

- Reads the current weather for a chosen location from the OpenWeather API when the page loads
- Shows the current date and city in the header
- Shows the current temperature (in Fahrenheit) in the weather card
- Filters the clothing item cards based on the current weather type (hot, warm, or cold)
- Opens a "New garment" modal with a form for adding a clothing item
- Opens a preview modal with the item's image, name, and weather type when a card is clicked
- Modals can be closed with the close button, by pressing the Escape key, or by clicking on the overlay

## Technologies and techniques

- React 18 (functional components and hooks: `useState`, `useEffect`, `useCallback`)
- Vite as the build tool and development server
- The Fetch API for requesting data from the OpenWeather API
- BEM methodology for naming and organizing CSS classes
- Flexbox and Grid layouts with media queries for responsiveness
- `normalize.css` and the Cabinet Grotesk font family

## Links

- [Live site on GitHub Pages](https://godevun.github.io/se_project_react/)
- [Figma Design](https://www.figma.com/design/F03bTb81Pw8IDPj5Y9rc5i/Sprint-10-Project--WTWR)

## Running the project

```bash
npm install
npm run dev
```

Before running the project, paste your personal OpenWeather API key into `src/utils/constants.js`.
