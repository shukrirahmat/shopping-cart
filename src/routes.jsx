import App from "./App";
import Checkout from "./components/Checkout";
import Errorpage from "./Errorpage";

const routes = [
    {
        path: "/",
        element: <App/>,
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