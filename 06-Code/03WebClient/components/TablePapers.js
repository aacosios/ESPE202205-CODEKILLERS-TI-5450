import React, { useEffect, useState } from 'react';
import {Box} from "@mui/material"
import {getCountry, getPaper} from '../services/countryAxios'
import FormCountry from './FormCountry'

import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';


    export default function TablePapers () {
        const [papers, setPapers] = useState([])
        const [formPaper, setformCountry] = useState({
            id: ""
        })
        


        useEffect(  () => {
            fetch('https://api.plos.org/search?q=title:github')
            .then(res => res.json())
            .then(response => {
                console.log(response.response.docs)
                setPapers(response.response.docs)
            })
            
        }, [])
        
        
        

        const columns = [
            { field: 'id', headerName: 'ID', width: 200 },
            { field: 'journal', headerName: 'JOURNAL', width: 200 },
            { field: 'eissn', headerName: 'EISSN', width: 200 },
            { field: 'publication_date', headerName: 'PUBLICATION DATE', width: 200 },
            { field: 'article_type', headerName: 'ARTICLE TYPE', width: 200 },
            { field: 'author_display', headerName: 'AUTHOR DISPLAY', width: 200 },
            { field: 'title_display', headerName: 'TITLE DISPLAY', width: 200 },
            { field: 'score', headerName: 'SCORE', width: 200 }
            
        ]
    
        


    return (
       
        <Box
            sx={{
                width: '70%',
                height: '82vh',
                marginLeft:'auto',
                marginRight:'auto',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                paddingLeft:'20px',
                paddingRight:'20px',
                background: '#fff', 
                borderRadius: '15px',
                boxShadow: '1px 1px 20px #333'
            }}
        >

            <h1>Lista Github</h1><br/>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows=
                    {
                        papers.map(item => (
                            
                            {
                                id: item.id,
                                journal: item.journal,
                                eissn: item.eissn,
                                publication_date: item.publication_date,
                                article_type: item.article_type,
                                author_display: item.author_display,
                                title_display: item.title_display,
                                score: item.score
                            }
                            

                        )) 
                    }
                    
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
        </Box>
    );
}

