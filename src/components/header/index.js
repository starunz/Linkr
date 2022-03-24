import { Container, Logo, Input, ImageUser, ChevronIcon, QuickAccess } from "./styles";

import { useState, useRef } from "react";

export default function Header() {

    let ref = useRef();

    const [quickAccess, setQuickAccess] = useState(false);

    return(
        <Container>
            <Logo>linkr</Logo>
            
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