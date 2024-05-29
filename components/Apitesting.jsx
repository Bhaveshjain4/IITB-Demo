import axios from "axios";
import { useEffect,useState } from "react";

const baseURL="http://erppiqty.iitb.ac.in:8000/sap/bc/srt/wsdl/flv_10002A111AD1/bndg_url/sap/bc/srt/rfc/sap/zotd_hcm_demo_s/300/zotd_hcm_demo_ws/zotd_hcm_demo_ws?sap-client=300"
const checkUrl="https://freetestapi.com/api/v1/products?limit=10"
export default function Apitesting()
{
    
    const [apiData,setapiData]=useState()
    useEffect(()=>
        {axios.get(baseURL).then((response)=>console.log(response)).catch((error)=>{console.log(error)})}
    ,[])
    
    // const[login,setLogin]=useState({email:{emailid:'',error:""},password:{passwordValue:'',error:''}})
    // const handleClick=(e)=>
    // {
    //     const{name,value}=e.target
    //     console.log(name)
    //     const temp={...login[name]}
    //     console.log(temp)
    //     temp['emailid']=value
    //     console.log(temp)
    //     setLogin({...login,[name]:temp})
    //     console.log(login)
    // }
    // return(
    //     <>
    //     <input value={login.email.emailid} name='email' onChange={(e)=>handleClick(e)}></input>
    //     </>
    // )
    return(
        <></>
    )

}