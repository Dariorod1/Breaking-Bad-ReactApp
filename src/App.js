import React, {useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/character/CharacterGrid';
import Search from './components/ui/Search';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[query, setQuery] = useState('')
  const getQuery = (q) => {
    setQuery(q)
  }
  useEffect(() => {
    const fetchItems = async () => {
      
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems();
  },[query])
  return (
    <div className="container">
     <Header/>
     <Search getQuery={getQuery}/>
     <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
