import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../contact/Contact";
import Login from "../login/Login";
import Quiz from "../quiz/Quiz";
import QuizCategory from "../quiz/QuizCategory";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/quiz",
          element: <Quiz />,
        },
        {
          path: "/quiz/:categoryName",
          element: <QuizCategory/>,
        },
        {
            path: "/about",
            element: <About />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/login",
            element: <Login />,
          },
      ],
    },
  ]);

  export default router;