type Props = {
    func: { (): void }
}

const LoadButton = ({func=() => console.log('click')}:Props) =>
    <div className="LoadBTNWrapper">
        <button onClick={func} id="loadBTN" className="LoadBTN">
        ЗАГРУЗИТЬ ЕЩЕ
        </button>
    </div>

export default LoadButton