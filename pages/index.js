import { useEffect, useState } from "react"
import axios from "axios"

function Home(){
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

  useEffect(() => {
    document.getElementById('loadBTN').addEventListener('click', btnHandler)
    return function (){
      document.getElementById('loadBTN').removeEventListener('click', btnHandler)
    };
  }, [])

  const btnHandler = () =>{
    setFetching(true)
  }

  return (
    <>
      <title>Cards</title>
      <ul className="CardsWrapper">
              { !!cards.length && cards.map(card => {
                  return(
                  <li className="CardWrapper" key={card.id}>
                    <img className="CardImage" src={card.url} alt={card.title}/>
                    <div className="CardBody">
                        Дата добавления:
                        <div className="CardDate">
                            11 октября 2022 года
                        </div>
                    </div>
                    <label for="hiddenBox"></label>
                    <input name="hiddenBox" className="hiddenBox" type="checkbox" id={"checkBox" + card.id}/>
                    <svg className="CardLike" viewBox="0 0 32 29.6" width="16px">
                        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                    </svg>
                  </li>
              )})}
        </ul>
              <div className="LoadBTNWrapper">
                <button id="loadBTN" className="LoadBTN">
                 ЗАГРУЗИТЬ ЕЩЕ
                </button>
              </div>
    </>
    
  );
}

export default Home;