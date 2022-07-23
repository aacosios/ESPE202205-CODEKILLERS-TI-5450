/*
import React, {useEffect, useState} from 'react';
import TableCountries from './TablePapers'
import FormCountry from './FormCountry'
import {getCountry} from '../services/countryAxios'
import '../styles/index.module.css'
import {Box} from "@mui/material"

const TableLayout = () => {

    const [formCountry, setformCountry] = useState({
        id: ""
    })

    const [countries, setCountries] = useState([])
    console.log(formCountry.id)
    useEffect(() => {
        async function loadCountries() {
            const response = await getCountry(formCountry.id)

            if (response.status === 200) {
                setCountries(response.data)
            }
        }

        loadCountries()
        
    }, [formCountry])


    return (
        <>
            <Box>
                
            <br/><br/> <br/><br/>
                <FormCountry formCountry={formCountry} setformCountry={setformCountry} />
                <br/><br/>
                <TableCountries countries={countries} />
            </Box>
        
        </>
    )
}
export default TableLayout
*/