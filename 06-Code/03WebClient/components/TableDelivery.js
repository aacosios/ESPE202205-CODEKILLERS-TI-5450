import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function TableDelivery() {
  const [products, setProducts] = useState([]);
  const [formProducts, setformCountry] = useState({
    id: "",
  });

  useEffect(() => {
    
    fetch("http://3.86.165.121:3000/delivery/products/sold")
    

    .then(res => res.json())
    .then((response) => {
      console.log('Response???', response);
      setProducts(response);


    }

    
    )
},[])    

  const columns = [

    { field: "id", headerName: "ID", width: 200},
    { field: "productName", headerName: "NAME", width: 200 },
    { field: "productQuantity", headerName: "QUANTITY", width: 200 },
    { field: "productPrice", headerName: "PRICE", width: 200 },
    { field: "subtotal", headerName: "SUBTOTAL", width: 200 },
    { field: "iva", headerName: "IVA", width: 200 },
    { field: "total", headerName: "TOTAL", width: 200 },
    { field: "totalQuantity", headerName: "TOTAL QUANTITY", width: 200 },
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
      <h1>Lista Products API CodeKillers</h1>
      <br />

      <div style={{ height: 400, width: "100%" }}>
       
        <DataGrid
          rows=
          {
            products.map(item => (
                {
                    id: Math.random()* (100000 - 1) + 1,
                    productName: item.productName,
                    productQuantity: item.productQuantity,
                    productPrice: item.productPrice,
                    subtotal: item.subtotal,
                    iva: item.iva,
                    total: item.total,
                    totalQuantity: item.totalQuantity,
                }
            )
          )
        }
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </Box>
  );
}