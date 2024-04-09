import { useRoutes } from "react-router-dom";
import "./App.css";
import Ex_ShoeShop from "./layout/ShoeShop/Ex_ShoeShop";

function App() {
  const route = useRoutes([
    {
      path: "/",
      element: <Ex_ShoeShop />,
    },
  ]);
  return route;
}

export default App;
