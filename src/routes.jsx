
import App from "./App";
import Errorpage from "./Errorpage";

const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <Errorpage/>,
        children: [
            {
                path: "/:name",
                element: <App/>
            }
        ]
    },
];

export default routes;