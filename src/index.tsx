import './index.css';
import App from "./App"
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import NotFoundPage from "./404";
import PrivacyPolicy from "./privacy-policy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFoundPage/>,
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>,
    }
    ]
);

const root = createRoot(document.getElementById('root') as Element);
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
