import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import {Card, CardBody} from "reactstrap";

function App() {
    const bodyStyles = {
        width: "80%",
        margin: "0 auto",
        marginTop: "4em",
    };

    return (
        <div>
            <Header/>
            <Card style={bodyStyles}>
                <CardBody>
                    <Router basename={`${process.env.PUBLIC_URL}`}>
                        <Routes>
                            <Route exact path={""} element={<Home/>} />
                        </Routes>
                    </Router>
                </CardBody>
            </Card>
        </div>
    );
}

export default App;
