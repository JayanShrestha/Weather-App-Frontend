import Header from "../Header";
import InputArea from "../InputArea";
import GoogleMap from "../GoogleMap";
import Card from "../UI/Card";
import { Car } from "lucide-react";

function Home() {


  return (
   <>
   <Header/>
   <InputArea/>
   <Card className = "w-[50%]">
  <GoogleMap />
   </Card>
    
   
    
   </>
  )
}
export default Home;