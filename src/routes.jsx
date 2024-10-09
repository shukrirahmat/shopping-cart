import Preload from "./components/Preload";
import Checkout from "./components/Checkout";
import Errorpage from "./components/Errorpage";


const routes = [
    {
        path: "/",
        element: <Preload/>,
        errorElement: <Errorpage/>,
        children: [
            {
                path: "/:name",
                element: <Preload/>,
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