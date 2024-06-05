import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {xml2json} from 'xml-js'
import Table from '../../components/Table';
const HomeService = () => {
  const username= 'KPMG_PM';
  const password = 'rf29s2'
  const [jsonResult,setJsonResult]=useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
    
      const response = await axios.post(
        'http://localhost:3001/api/soap',
        {
          username,
          password,
          url: 'http://erppiqty.iitb.ac.in:8000/sap/bc/srt/rfc/sap/zotd_hcm_demo_s/300/zotd_hcm_demo_ws/zotd_hcm_demo_ws',
          soapRequest: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:soap:functions:mc-style">
          <soapenv:Header/>
          <soapenv:Body>
             <urn:ZotdHcmDemo/>
          </soapenv:Body>
       </soapenv:Envelope>`
        }
      );
      
      setError(null);
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.data, "text/xml");
      const resultValue =  xmlDoc.getElementsByTagName("ItOutput")[0]
      const test2=new XMLSerializer().serializeToString(resultValue)
      console.log(test2)
      const val={compact:true,spaces:4}
      const st=JSON.parse(xml2json(test2,val))  
      console.log(st)
      setJsonResult(st);

    } 
    
      catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
    }
  };

  useEffect(()=>{fetchData();fetchData()},[])

  return (
        <div>
          {jsonResult&&<Table header={"tableOne"} data={jsonResult['ItOutput']['item']}/>} 
        </div>   
  );
};

export default HomeService;
