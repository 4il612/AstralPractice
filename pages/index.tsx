import { useEffect, useState } from "react"
import axios from "../node_modules/axios/index"
import Card from "../components/card"
import LoadButton from "../components/loadbutton"
import Loader from "../components/loader"

const Home = () =>{
  const [cards, setCards] = useState([])
  const [curLimit, setCurLimit] = useState(3)
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    if (fetching){
      document.getElementById("Loader").style.display = 'block'
      axios.get('https://astral-app-ns.herokuapp.com/api?limit=' + curLimit)
      .then(response => {
        setCards(response.data)
        setCurLimit(curLimit + 3)
      })
      .finally(() => {
        setFetching(false)
        document.getElementById("Loader").style.display = 'none'
      })
    }
  }, [fetching])
  
  return (
    <>
        <title>Cards</title>
        <ul className="CardsWrapper">
            { !!cards.length && cards.map(card => {
                return(
                    <Card key={card.id} url={card.url} alt={card.alt} id={card.id} date={card.date}/>
                )
            })}
        </ul>
        <Loader/>
        <LoadButton func={() => {setFetching(true)}}/>     
    </>
    
  );
}

export default Home