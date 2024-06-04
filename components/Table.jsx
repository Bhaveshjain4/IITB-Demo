import React,{useState,useEffect} from "react"
export default function Table({header,data})
{
     const[selectedRow,setSelectedrow]=useState(null)
     if(!Array.isArray(data)||data.length===0)
     {
          return (<p>No data available</p>)  
     }
     const headers=Object.keys(data[0])
     useEffect(()=>{
     },[selectedRow])

     const applybtnOnclick=()=>{
       window.alert(selectedRow['ExternalCode']['_text'])
     }
     
     return (
        <>
        <div className="relative my-3 p-3 flex flex-col ">
            {/* <div className="my-2">{header}</div> */}
            <table className="w-full bg-white border border-gray-200 overflow-y-hidden">
                <thead>
                    <tr>
                    {headers.map((header)=>
                       <th key={header} className="px-4 py-2 border-b-2 border-gry-200 bg-blue-950 text-left text-xs font-semibold text-white uppercase tracking-wider cursor-pointer">
                        {header}
                       </th>
                    )}
                    </tr>
                </thead>
                <tbody>
                    {data&&data.map((row,index)=>(
                        <tr key={index} className={selectedRow!==null?selectedRow!=null&&row['ExternalCode']['_text']===selectedRow['ExternalCode']['_text']?"bg-blue-300":"bg-gray-50 hover:bg-gray-200 ":" hover:bg-gray-200"}
                            style={{transformOrigin:'center'}} 
                            onClick={()=>{setSelectedrow({...row});console.log(selectedRow.ExternalCode._text)}}>
                            {headers.map((header)=>(
                                <td key={header} className={`px-4 py-2 border-b border-gray-200 text-sm  cursor-pointer
                                ${selectedRow!==null?row['ExternalCode']['_text']===selectedRow['ExternalCode']['_text']?'text-white':'text-gray-700':''}`}
                                    // onClick={header==='name'?()=>{window.alert(row[header])}:()=>{}}
                                >
                                    {row[header]['_text']}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        <div className="mt-auto text-left p-1 bottom-0 right-0 left-auto fixed w-fit bg-blue-300 ">
            <button className="opacity-100 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
            onClick={()=>{applybtnOnclick()}}>
            Apply
            </button>
        </div>
        </div>
        
        </>
     )
}