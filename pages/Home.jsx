import React,{useEffect,useState} from 'react'
import Table from '../components/Table'
import axios from "axios";
import testapi from '../testJson/testapi.json'


const baseURL="https://freetestapi.com/api/v1/products?limit=10"

export default function Home()
{
    // const [tableData,setTableData]=useState([])

    // useEffect(()=>{
    //     axios.get(baseURL).then((response)=>{setTableData(response.data)})
    //     console.log(Array.isArray(tableData))
    // },[])
    
    return (
        <>
         <div className='text-center my-5'>Home page</div>
         {testapi.map((element,index)=><Table key={index} data={element}/>)}
        </>
    )
}