import "./App.css";
import Body from "./components/Body.js";
import Head from "./components/Head.js";
import store from "./utils/store.js";
import { Provider } from "react-redux";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Main from "./components/MainContainer.js";
import WatchPage from "./components/WatchPage.js";

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path: "/",
      element:<Main/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }

  ]
}])
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
