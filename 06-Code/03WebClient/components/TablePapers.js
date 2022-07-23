import React, { useEffect, useState } from 'react';
import {Box} from "@mui/material"
import {getCountry, getPaper} from '../services/countryAxios'
import FormCountry from './FormCountry'

import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
//import styles from "../styles/index.css";

/*
export default function TableCountries () {
    const [countries, setCountries] = useState([])
    const [formCountry, setformCountry] = useState({
        id: ""
    })
    
    useEffect(() => {
        async function loadCountries() {
            const response = await getCountry(formCountry.id)

            if (response.status === 200) {
                setCountries(response.data)
            }
        }

        loadCountries()
        
    }, [formCountry])
    
    console.log(countries)
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

    */

    export default function TablePapers () {
        const [papers, setPapers] = useState([])
        const [formPaper, setformCountry] = useState({
            id: ""
        })
        
        // useEffect(() => {
        //     async function loadPapers() {
        //         const response = await getPaper(formPaper.id)
    
        //         if (response.status === 200) {
        //             setPapers(response.response.docs)
        //         }
        //     }
    
        //     loadPapers()
            
        // }, [formPaper])

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
    
        

    /*
    const columns = [
        { field: 'country', headerName: 'Country', width: 200 },
        { field: 'domains', headerName: 'Domain', width: 200 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'webPages', headerName: 'Web page', width: 200 },
        { field: 'alphaTwoCode', headerName: 'Code', width: 200 }
        
    ]
    */
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
                            
                           /*
                            {
                                id: Math.random() * (100000 - 1) + 1,
                                country: item.country,
                                domains: item.domains,
                                name: item.name,
                                webPages: item.web_pages,
                                alphaTwoCode: item.alpha_two_code

                            }
                            */

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

