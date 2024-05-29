import React,{useState,useEffect} from "react"
export default function Table({header,data})
{
     const[selectedRow,setSelectedrow]=useState({})
     if(!Array.isArray(data)||data.length===0)
     {
          return (<p>No data available</p>)  
     }
     const headers=Object.keys(data[0])
     useEffect(()=>{
     },[selectedRow])

     const applybtnOnclick=()=>{
       window.alert(selectedRow['name'])
     }

     return (
        <div className="my-3 p-3">
            <div className="my-2">{header}</div>
            <table className="min-w-fill bg-white border border-gray-200">
                <thead>
                    <tr>
                    {headers.map((header)=>
                       <th key={header} className="px-4 py-2 border-b-2 border-gry-200 bg-blue-950 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        {header}
                       </th>
                    )}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row,index)=>(
                        <tr key={index} className={row['id']===selectedRow['id']?"bg-blue-300":"bg-gray-50 hover:bg-gray-200 hover:cursor-pointer transform transition-transform duration-200"}
                            style={{transformOrigin:'center'}} 
                            onClick={()=>{setSelectedrow({...row})}}>
                            {headers.map((header)=>(
                                <td key={header} className={`px-4 py-2 border-b border-gray-200 text-sm  
                                ${header==='name'?row['id']===selectedRow['id']?'text-white hover:underline':'text-blue-500 hover:underline':
                                row['id']===selectedRow['id']?'text-white':'text-gray-700'}`}
                                    // onClick={header==='name'?()=>{window.alert(row[header])}:()=>{}}
                                >
                                    {row[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white mt-4 py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
            onClick={()=>{applybtnOnclick()}}>
            Apply
            </button>
        </div>
     )
}