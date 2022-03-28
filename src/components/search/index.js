import { useEffect, useRef, useState } from "react";

import { 
    SearchContainer, 
    SearchBox, 
    SearchInput, 
    SearchLink 
} from "./style";

import * as api from '../../services/api';

import {DebounceInput} from 'react-debounce-input';
export default function Search() {

    const [userText, setUserText] = useState('');
    const [userList, setUserList] = useState(null);

    useEffect(() => {
        if(userText.length >= 3)
        {
            const promise = api.getUsers(userText);
        promise.then(response => {
            let users = response.data;
            if(users.length)
            setUserList(users);
            else
            setUserList(null);
             })
            .catch(error => {
            alert("An error occured while trying to fetch the searched user, try reloading the page");
        });
        return;
        }
        setUserList(null);
    }, [userText]);
    const ref = useRef();
    function changeSearchText(e) {
        setUserText(e.target.value);
    }

    useEffect(() => {
        function OutsideClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
              setUserList(null);
              setUserText('');
            }
        }

        document.addEventListener("mousedown", OutsideClick)

        return () => {
            document.removeEventListener("mousedown", OutsideClick)
        }
    }, [userText]);

    return(
            <SearchContainer ref={ref}>
                <SearchBox>
                {(
                    userList?.map((user, i, userList) =>
                    <SearchLink  key={i} href={`/user/${user.id}`} isLast={i+1 === userList.length ? true : false}>
                        <img src={user.photoUrl} alt={user.name}/>
                            <span>{user.userName}</span>
                    </SearchLink>)
                )}
                </SearchBox>
                <DebounceInput 
                element={SearchInput}
                text="text"
                debounceTimeout={300}
                placeholder="Search for people"
                onChange={changeSearchText}
                value={userText}
                />
            </SearchContainer>
    );
}