import { useState, useEffect} from 'react';
import Table from './components/Table/Table';
import Login from './components/Login/Login';

function Main() {

  const [tableData, setTableData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(
    () => {
      if (!loggedIn) {
        fetch('http://localhost:3001/clients')
      .then((res) =>res.json()) 
      .then((tableData) => setTableData(tableData))
      .catch((err) => console.log('api err', err))
      }
    }, [loggedIn])

    if (!loggedIn) {
      return <Login setStatus={setLoggedIn}/>
    }

  return (
    <div className="Main">
      <Table data={tableData}/>
    </div>
  );
}

export default Main;
