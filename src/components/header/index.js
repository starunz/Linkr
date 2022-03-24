import { Container, Logo, Input, ImageUser, ChevronIcon, QuickAccess } from "./styles";

import { useState, useRef, useEffect } from "react";

export default function Header() {
    const [quickAccess, setQuickAccess] = useState(false);

    let ref = useRef();

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
                        
            <ImageUser 
                onClick={() => setQuickAccess(!quickAccess)}
                alt="profile picture"
            />

            <ChevronIcon
                transfrom={quickAccess ? "rotate(180deg)" : "rotate(0deg)"}
                onClick={() => setQuickAccess(!quickAccess)}
                size="30px"
            />

            <QuickAccess ref={ref} display={quickAccess ? "inherit" : "none"}>
                <span>Logout</span>
            </QuickAccess>
        </Container>
    );
}

//<Input placeholder="Search for people"/>