import React from 'react'

const client = () => {
    const [users, setEquipo] = React.useState([])

    React.useEffect(() => {
        //console.log('useEffect')
        getdata()
    }, [])

    const getdata = async () => {
       const data = await fetch('https://httpbin.org/get')
       const users = await data.json()
       //console.log(users)
       setEquipo(users)
    }

    return(
        <div>
            <h1> Client </h1>
            <ul> {
                  users.map(item => (
                    <li key="item.id">{item.Accept}-{item.Accept-Language}-{item.Host}-{item.origin}-{item.Sec-Ch-Ua}-{item.Sec-Ch-Ua-Platform}</li>
                  ))
                } 
                
            </ul>
        </div>
    )
}

export default client