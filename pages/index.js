import Content from "../components/content"
import ButtonLoad from "../components/button"
import Card1 from "./cards/card1"

export default function Home(){
  return(
    <div>
      <div className="CardsWrapper">
        <Card1/>
        <Card1/>
        <Card1/>
        <Card1/>
        <Card1/>
        <Card1/>
        <Card1/>
      </div>
      <ButtonLoad/>
    </div>
  )
}