import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Ban from '../components/Ban'
import $ from 'jquery'


export default function BanView() {
  
  const params = useParams();

  const [userData, setUserData] = useState({'user_name': "asd"});
    
    useEffect(() => {
        $.ajax({
            type: "POST",
            url: "https://www.agssoft.ar/NUEVE/backend/admin/getData.php",
            data:{
              email: params.userEmail
            },
            xhrFields: {
                withCredentials: true
            },
            success(data) {
                setUserData(JSON.parse(data));
                //setUserData(JSON.parse(data));
                /*setUserData(userData => ({
                    ...userData,
                    ...data
                }));*/
                //console.log(userData.user_name);
                console.log(data);
                //console.log(JSON.parse(data));
            },
        });
      }, []);

  return (
    <Ban userData={userData}></Ban>
  )
}
