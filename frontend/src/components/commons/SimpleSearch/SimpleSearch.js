import {
    Alert,
    Button,
    Col,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Spinner
} from "reactstrap";
import {useState} from "react";

const SimpleSearch = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [identifier, setIdentifier] = useState("");
    const [exercise, setExercise] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    const setters = {
        "name": setName,
        "identifier": setIdentifier,
        "exercise": setExercise
    };

    const onChange = (e) => {
        const key = e.target.name;
        setters[key](e.target.value);
    };

    const search = () => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");

        const payload = {
            "name": name,
            "identifier": identifier,
            "exercise": exercise
        };

        const request = {
            "method": "POST",
            "body": JSON.stringify(payload),
            "headers": headers
        };
        setIsLoading(true);
        setTimeout(() =>
            fetch("/enterprise/search", request)
                .then(res => res.json())
                .then(res => {
                    let rs = [];
                    for (let i = 0; i < res.result.length; i++)
                    {
                        rs.push(<option value={res.result[i].identifier}>{res.result[i].name}</option>)
                    }
                    setError("");
                    setResults(rs);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.error("Unexpected", err);
                    setIsLoading(false);
                    setResults([]);
                    setError(`${err}`);
                })
        , 2000);
    };

    const close = () => {
        setResults([]);
        setError("");
        props.setIsOpen(false);
        for(let k in setters)
        {
            setters[k]("");
        }
    };

    return (
        <Modal size={"lg"} fade centered backdrop={"static"} isOpen={props.isOpen}>
            <ModalHeader>Empresa</ModalHeader>
            <ModalBody>
                <Alert color={"danger"} hidden={error === ""}>
                    {error}
                </Alert>
                <FormGroup row>
                    <Label sm={2} className="fw-bold" for="name">Nombre</Label>
                    <Col sm={10}>
                        <Input value={name} id="name" name="name" onChange={onChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2} className="fw-bold" for="identifier">Identificador</Label>
                    <Col sm={10}>
                        <Input value={identifier} id="identifier" name="identifier" onChange={onChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2} className="fw-bold" for="exercise">Ejercicio</Label>
                    <Col sm={10}>
                        <Input value={exercise} id="exercise" name="exercise" onChange={onChange} />
                    </Col>
                </FormGroup>
                <FormGroup hidden={results.length === 0} row>
                    <Label sm={2} className="fw-bold" for="enterprise">Empresa</Label>
                    <Col sm={8}>
                        <Input id="enterprise" name="enterprise" type={"select"}>
                            <optgroup>
                                {results}
                            </optgroup>
                        </Input>
                    </Col>
                    <Col sm={2}>
                        <Button outline color={"primary"} hidden={results.length === 0}>Usar</Button>
                    </Col>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                {isLoading && <Spinner className="m-auto" size={"lg"} color={"primary"} />}
                <Button hidden={isLoading} type={"button"} color={"primary"} onClick={search}>Buscar</Button>
                <Button hidden={isLoading} type={"button"} color={"secondary"} onClick={close}>Cancelar</Button>
            </ModalFooter>
        </Modal>
    )
};

export default SimpleSearch;