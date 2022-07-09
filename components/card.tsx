type Props = {
    url?: string
    alt?: string
    id?: string
    key?: string
    date?: string
}

const Card = ({key="0", url='Image.jpg', alt='default alt', id='0', date='00 января 0000 года'}:Props) => 
    <li className="CardWrapper" key={key}>
    <img className="CardImage" src={url} alt={alt}/>
    <div className="CardBody">
        Дата добавления:
        <div className="CardDate">
            {date}
        </div>
    </div>
    <input name="hiddenBox" className="hiddenBox" type="checkbox" id={"checkBox" + id}/>
    <svg className="CardLike" viewBox="0 0 32 29.6" width="16px">
        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
    </svg>
    <label htmlFor="hiddenBox">
    </label>
  </li>

export default Card