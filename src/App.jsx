import { useEffect, useState } from 'react'
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import InfoBlock from './components/InfoBlock/InfoBlock';
import ListBank from './components/ListBank/ListBank';
import ItemBank from './components/ItemBank/ItemBank';
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //fetch('https://dev.obtenmas.com/catom/api/challenge/banks')
    fetch('./src/assets/banks.json')
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error('Error fetching data', error));
    
  }, []);

  console.log(data)
  return (
    <>
      <Header />
      <Banner />
      <InfoBlock />
      <ListBank>
      {data.map((item) => (
        <ItemBank 
          urlImg={item.url}
          bankName={item.bankName}
          description={item.description}
          age={item.age}
        />
      ))}
      </ListBank>
      {/* <ul>
        {data.map((item) => (<li>{item.bankName}</li>))}
      </ul> */}
    </>
  )
}

export default App;
