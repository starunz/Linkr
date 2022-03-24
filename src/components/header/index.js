import { 
    Container,
    Logo, 
    ImageUser, 
    ChevronIcon, 
    QuickAccess,
    Input,
} from "./styles";

import { useState, useRef, useEffect } from "react";

import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

export default function Header() {
    const [quickAccess, setQuickAccess] = useState(false);

    let ref = useRef();

    const { logoff } = useAuth();

    useEffect(() => {
        function OutsideClick(e) {
            if (quickAccess && ref.current && !ref.current.contains(e.target)) {
              setQuickAccess(false)
            }
        }

        document.addEventListener("mousedown", OutsideClick)

        return () => {
            document.removeEventListener("mousedown", OutsideClick)
        }
    }, [quickAccess]);

    return(
        <Container ref={ref}>
            <Logo to="/timeline">Linkr</Logo>

            <Input 
                placeholder="Search for people and friends"
            />

            <ImageUser 
                onClick={() => setQuickAccess(!quickAccess)}
                alt="profile picture"
            />

            <ChevronIcon
                transfrom={quickAccess ? "rotate(180deg)" : "rotate(0deg)"}
                onClick={() => setQuickAccess(!quickAccess)}
                size="30px"
            />

            <QuickAccess to="#" ref={ref} display={quickAccess ? "inherit" : "none"}>
                <Link to="/">
                    <span onClick={() => logoff()} >Logout</span>
                </Link>
            </QuickAccess>
        </Container>
    );
}