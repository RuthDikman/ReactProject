import AdminHomePage from "./AdminHomePage";
import Login from "../login/Login";
import AppStore from "../../store/AppStore"
import Header from "./Header";
import { observer } from "mobx-react"
import { useState, useEffect } from 'react';
const Admin = (observer(() => {
  useEffect(() => {
      save();
  });
  const save = async (list) => {
    const requestBody = {
      name: "DBH",
      id: "123",
      address:"פועלי ציון 1 | הרצליה",
      phone: "059319319",
      owner: "Admin",
      logo: "https://coding-academy.org/images/ca_logo.png",
      description: "שליחויות ולוגיסטיקה",
    };
    const response = await fetch("http://localhost:8787/businessData", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  }
  return (
   <>
   <Header/>
            {!AppStore.isLogin ?
                <Login /> :
                <AdminHomePage />
            }

   </>
  );
}
))
export default Admin