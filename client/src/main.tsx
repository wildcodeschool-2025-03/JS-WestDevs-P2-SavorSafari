// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

/* ************************************************************************* */

// Import the main app component
import App from "./App";

// Import additional components for new routes
// Try creating these components in the "pages" folder

// import About from "./pages/About";
// import Contact from "./pages/Contact";

import About from "./components/About/About";
import Home from "./components/Home/Home";
import Recipe from "./components/Recipe/Recipe";
import RecipeList from "./components/RecipeList/RecipeList";
import Register from "./components/Register/Register";
import UserSpace from "./components/UserSpace/UserSpace";
import WorldMap from "./components/WorldMap/WorldMap";

/* ************************************************************************* */

// Create router configuration with routes
// You can add more routes as you build out your app!
const router = createBrowserRouter([
  {
    element: <App />, // Renders the App component for the home page
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/world-map",
        element: <WorldMap />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/recipe-list/:country",
        element: <RecipeList />,
      },
      {
        path: "/recipe/:idMeal",
        element: <Recipe />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/userspace",
        element: <UserSpace />,
      },
    ],
  },
  // Try adding a new route! For example, "/about" with an About component
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
