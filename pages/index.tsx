import { useEffect, useState } from "react"
import axios from "../node_modules/axios/index"
import Card from "./cards/card"

const Home = () =>{
  const [cards, setCards] = useState([])
  const [curLimit, setCurLimit] = useState(3)
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    if (fetching){
      axios.get('https://jsonplaceholder.typicode.com/photos?_limit=' + curLimit)
      .then(response => {
        setCards(response.data)
        setCurLimit(curLimit + 3)
        console.log(response.data)
      })
      .finally(() => setFetching(false))
    }
  }, [fetching])
  
  return (
    <>
      <title>Cards</title>
      <ul className="CardsWrapper">
              { !!cards.length && cards.map(card => {
                  return(
                  <Card key={card.id} url={card.url} alt={card.title} id={card.id}/>
              )})}
        </ul>
              <div className="LoadBTNWrapper">
                <button onClick={() => setFetching(true)} id="loadBTN" className="LoadBTN">
                 ЗАГРУЗИТЬ ЕЩЕ
                </button>
              </div>
    </>
    
  );
}

export default Home