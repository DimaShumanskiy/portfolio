import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MySkills from "./components/MySkills/MySkills";
import MyWorks from "./components/MyWorks/MyWorks";
import OfferWorks from "./components/OfferWorks/OfferWorks";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <MySkills/>
            <MyWorks/>
            <OfferWorks/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
