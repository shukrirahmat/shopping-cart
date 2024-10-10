import Preload from "./components/Preload";
import Checkout from "./components/Checkout";
import Errorpage from "./components/Errorpage";
import App from "./components/App";


const routes = [
    {
        path: "/",
        element: <Preload/>,
        errorElement: <Errorpage/>,
        children: [
            {
                path: "/:name",
                element: <App/>,
                errorElement: <Errorpage/>,
            }
        ]
    },
    {
        path: "/checkout",
        element: <Checkout/>,
        errorElement: <Errorpage/>,
    }
];

export default routes;