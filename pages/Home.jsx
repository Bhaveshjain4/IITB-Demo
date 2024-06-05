import React, { useContext, useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";
import testapi from "../testJson/testapi.json";
import Apitesting from "../components/Apitesting";
import { AppContext } from "../context/context";
import  {tableDetails} from "../context/home/homeContext";
import HomeService from "../Services/Home/HomeService";
// import cors from "cors";

const baseURL = "https://freetestapi.com/api/v1/products?limit=10";

export default function Home() {
  const [tableData, setTableData] = useState([]);
  // const cors = require("cors");

  // app.use(cors());
  // app.options("/", (req, res) => {
  //   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173/home");
  //   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  //   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  //   res.sendStatus(204);
  // });

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTableData(response.data);
    });
    console.log(Array.isArray(tableData));
  }, []);

  useEffect(()=>{
    setTableData(tableDetails)
  },[tableDetails])

  return (
    <>

    <AppContext.Provider value={tableData}>
      <div className="text-center my-5">Home page</div>
      <div className="overflow-x-auto mx-28 mb-10">
        {/* {testapi.data.map((dataElement, index) => (
          <Table key={index} header={testapi.header} data={dataElement}></Table>
        ))} */}
        <HomeService/>
      </div>
      </AppContext.Provider>
    </>
  );
}
