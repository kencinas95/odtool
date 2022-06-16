import {Button} from "reactstrap";
import SimpleSearch from "../commons/SimpleSearch/SimpleSearch";
import {useState} from "react";
import {ButtonsDef} from "./HomeContext";
import './styles.css';

const Home = (props) => {
    const [searchFormIsOpen, setSearchFormIsOpen] = useState(false);
    const [enterprise, setEnterprise] = useState({});

    const buttonLists = [];
    for (let i = 0; i < ButtonsDef.length; i++)
    {
        const btn = ButtonsDef[i];
        buttonLists.push(
            <Button type={"button"} outline color={"primary"} onClick={() => setSearchFormIsOpen(true)}>{btn.title}</Button>
        );
    }

    return (
        <div>
            <SimpleSearch isOpen={searchFormIsOpen}
                          setIsOpen={setSearchFormIsOpen}
                          setResult={setEnterprise}/>
            <div className={"btnListContainer"}>
                {buttonLists}
            </div>
        </div>
    );
};

export default Home;