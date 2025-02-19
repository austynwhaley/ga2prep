import { useState, useEffect} from 'react';
import Table from './components/Table/Table';

function Main() {

  const [tableData, setTableData] = useState([]);


  useEffect(
    () => {
      fetch('http://localhost:3001/clients')
      .then((res) => res.json()) 
      .then((tableData) => setTableData(tableData))
      .catch((err) => console.log('api err', err))
    }, [])

  return (
    <div className="Main">
      <Table data={tableData}/>
    </div>
  );
}

export default Main;
