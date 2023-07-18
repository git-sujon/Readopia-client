import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Books from "../page/Books";
import LoginPage from "../page/LoginPage";
import SignUpPage from "../page/SignUpPage";
import ErrorPage from "../page/ErrorPage";
import BookDetails from "../page/BookDetails";
import AddBook from "../page/AddBook";
import EditBook from "../page/EditBook";
import PrivateRoute from "./privateRoute";

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
         path:"/signUp",
         element:<SignUpPage></SignUpPage>
      },
      {
         path:"/add-book",
         element:<PrivateRoute><AddBook></AddBook></PrivateRoute>
      },
      {
         path:'/book-details/:_id',
         element: <BookDetails/>
      },
      {
         path:'/edit-book/:id',
         element: <PrivateRoute><EditBook/></PrivateRoute>
      }
    ]
   }
])

export default routes