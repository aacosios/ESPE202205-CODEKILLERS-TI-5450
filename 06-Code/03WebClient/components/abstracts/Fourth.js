import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";


export default function Sixth() {
  const [abstracts, setAbstracts] = useState([]);

  useEffect(() => {
    fetch("https://api.plos.org/search?q=id:10.1371/journal.pone.0215059")
      .then((res) => res.json())
      .then((response) => {
        console.log(response.response.docs);
        setAbstracts(response.response.docs);
      });
  }, []);

  const columns = [
    { field: "abstract", headerName: "ABSTRACT", width: 600 },
  ];

  return (
    <Box
      sx={{
        width: "70%",
        height: "82vh",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingLeft: "20px",
        paddingRight: "20px",
        background: "#fff",
        borderRadius: "15px",
        boxShadow: "1px 1px 20px #333",
      }}
    >
      <h1>Status, identity, and language: A study of issue discussions in GitHub</h1>
      <br />

      <div style={{ height: 800, width: "100%" }}>
      <DataGrid
      getRowHeight={() => 'auto'} getEstimatedRowHeight={() => 200}
                    rows=
                    {
                        abstracts.map(item => (
                            
                            {
                                id: item.id,
                                abstract: item.abstract
                            }
                            
                        )) 
                    }
                    
                    columns={columns}
                    pageSize={1}
                    rowsPerPageOptions={[1]}
                />
      </div>
    </Box>
  );

   
}