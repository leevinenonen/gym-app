import {
    Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <div>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/program" >
                        Program
                    </NavLink>
                    <NavLink to="/progress" >
                        Progress
                    </NavLink>
                    <NavLink to="/tracking" >
                        Tracking
                    </NavLink>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="signin">
                        Sign in
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    )
}

export default Navbar;