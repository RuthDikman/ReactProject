import AdminHomePage from "./AdminHomePage";
import Login from "../login/Login";
import Store from "../../store/Store"
import Header from "../header/Header";
import { observer } from "mobx-react"

const Admin = (observer(() => {
  return (
   <>
   <Header/>
            {Store.isLogin===null?
            <>
            <Login />
            </>:
               <AdminHomePage />
            }

   </>
  );
}
))
export default Admin