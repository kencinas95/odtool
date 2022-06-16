import {Nav, Navbar, NavbarBrand, NavbarText, NavItem, NavLink} from "reactstrap";
import {useState} from "react";

const getDate = (dt) => {
    let day = dt.getDay();
    let month = dt.getMonth();
    const year = dt.getFullYear();
    let hours = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    hours = hours < 10 ? '0' + hours : hours;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    return `${day}/${month}/${year} ${hours}:${min}:${sec}`;
};

const Header = () => {
    const [dt, setDt] = useState(getDate(new Date()));

    setTimeout(() => {
        setDt(getDate(new Date()));
    }, 1000);

    return (
        <Navbar color={"dark"} expand={"lg"} dark={true} fixed={"top"}>
            <NavbarBrand href={"/"}>
                <b>EditorUniversal</b> v0.1
            </NavbarBrand>
            <Nav className="me-auto" navbar>
                <NavItem>
                    <NavLink href={"/enterprises"}>Empresas</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={"/parts"}>Partes</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={"/books"}>Libros</NavLink>
                </NavItem>
            </Nav>
            <NavbarText>{dt}</NavbarText>
        </Navbar>
    );
};

export default Header;