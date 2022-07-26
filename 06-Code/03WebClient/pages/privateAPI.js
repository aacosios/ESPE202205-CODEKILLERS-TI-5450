import React from 'react'
import TableDelivery from '../components/TableDelivery'

const privateAPI = () => {
  return (
    <div><TableDelivery/></div>
  )
}

export default privateAPI

/*
const publicAPI = ({ userList }) => <div style={{ margin: 20 }}>
  <h3>Next.js How to call API and display records in table</h3>
  <table border="1">
    <thead>
      <th>ID</th>
      <th>Journal</th>
      <th>eissn</th>
      <th>publication_date</th>
      <th>article_type</th>
      <th>author_display</th>
      <th>title_display</th>
      <th>score</th>
    </thead>
    <tbody>
      {userList.data.map((x, i) => <tr key={i}>
        <td>{x.id}</td>
        <td>{x.journal}</td>
        <td>{x.eissn}</td>
        <td>{x.publication_date}</td>
        <td>{x.article_type}</td>
        <td>{x.author_display}</td>
        <td>{x.title_display}</td>
        <td>{x.score}</td>
      </tr>)}
    </tbody>
  </table>
</div>
  
publicAPI.getInitialProps = async () => {
  const { data } = await axios.get('https://api.plos.org/search?q=title:github');
  return { userList: data };
}
  

export default publicAPI;
*/