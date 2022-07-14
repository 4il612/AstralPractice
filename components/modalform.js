import clientAAA from './apollo-client'
import { ApolloProvider, useMutation } from '@apollo/client'
import { useState } from 'react'
import { CREATE_CARD } from '../mutations/card'


const ModalForm = () => {
    const [newCard] = useMutation(CREATE_CARD)
    const [url, setUrl] = useState('');
    const [alt, setAlt] = useState('');
    const [date, setDate] = useState('');

    const addCard = (e) =>{
        e.preventDefault();
        newCard({
            variables:{
                createCardInput:{
                    url: url,
                    alt: alt,
                    date: date
                }
            }
        })
    }

    return(
        <ApolloProvider client={clientAAA}>
            <div id="modal" className="modal-form">
                <form>
                <div class="field">
                    <label for="url">Изображение</label>
                    <input value={url} onChange={e => setUrl(e.target.value)} type="text" id="url" />
                </div>
                <div class="field">
                    <label for="alt">Название</label>
                    <input value={alt} onChange={e => setAlt(e.target.value)} type="text" id="alt" />
                </div>
                <div class="field">
                    <label for="date">Дата</label>
                    <input value={date} onChange={e => setDate(e.target.value)} type="text" id="date" />
                </div>
                <button onClick={(e) => addCard(e)} id='formBTN'>ADD</button>
                </form>
            </div>
        </ApolloProvider>
    )
}
    

export default ModalForm;