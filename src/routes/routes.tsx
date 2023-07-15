import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Books from "../page/Books";
import LoginPage from "../page/LoginPage";
import SignUpPage from "../page/SignUpPage";
import ErrorPage from "../page/ErrorPage";

const routes = createBrowserRouter([
   {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
         path:'/',
         element:<Books/>
      },
      {
         path:'/login',
         element:<LoginPage></LoginPage>
      },
      {
         path:"SignUp",
         element:<SignUpPage></SignUpPage>
      }
    ]
   }
])

export default routes