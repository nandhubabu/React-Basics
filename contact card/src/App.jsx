// import { Footer } from "./component/Footer";
// import { Header } from "./component/Header";
// import { Note } from "./component/Note";

import Contacts from "./contacts";
import Card  from "./card";

function App(){
    return(
        <div>
      
            <h1>My Contacts</h1>
            <Card
                name = {Contacts[0].name}
                img = {Contacts[0].img}
                tel = {Contacts[0].phone}
                email = {Contacts[0].email}
                />

            <Card
                name = {Contacts[1].name}
                img = {Contacts[1].img}
                tel = {Contacts[1].phone}
                email = {Contacts[1].email}
                />

            <Card
                name = {Contacts[2].name}
                img = {Contacts[2].img}
                tel = {Contacts[2].phone}
                email = {Contacts[2].email}
                />

            <Card
                name = {Contacts[3].name}
                img = {Contacts[3].img}
                tel = {Contacts[3].phone}
                email = {Contacts[3].email}
                />




      

        </div>
    )
}
export default App;