import React,{useEffect,useState} from 'react'
import Table from '../components/Table'
import axios from "axios";
import testapi from '../testJson/testapi.json'
import Apitesting from '../components/Apitesting';


const baseURL="https://freetestapi.com/api/v1/products?limit=10"

export default function Home()
{
    const [tableData,setTableData]=useState([])

    useEffect(()=>{
        axios.get(baseURL).then((response)=>{setTableData(response.data)})
        console.log(Array.isArray(tableData))
    },[])
    
    return (
        <>
         <div className='text-center my-5'>Home page</div>
         <div className='overflow-x-auto mx-28 mb-10'>
            {
            testapi.data.map((dataElement,index)=>
               <Table key={index} header={testapi.header} data={dataElement}></Table>
            )
            }
         </div>
        </>
        
    )
}