import ButtonLoad from "../components/button"
import React, { useState, useEffect } from 'react';

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() =>{
    const getData = async () =>{
      const response = await fetch('https://jsonplaceholder.typicode.com/photos')
      const data = await response.json();
      setCards(data);
    }
    getData();
  }, [])

  return(
        <>
          <div className="CardsWrapper">
              { !!cards.length && cards.slice(0, 3).map(res => {
                return(
                  <div className="CardWrapper">
                    <img className="CardImage" src={res.url}/>
                    <div className="CardBody">
                        Дата добавления:
                        <div className="CardDate">
                            11 октября 2022 года
                        </div>
                    </div>
                    <input className="hiddenBox" type="checkbox" id="button"/>
                    <svg className="CardLike" viewBox="0 0 32 29.6" width="16px">
                        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                    </svg>
                  </div>
                )
              })}
          </div>
          <ButtonLoad/>
        </>
      )
}

export default Cards;