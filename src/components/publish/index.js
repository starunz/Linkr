import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Button, Container, Form, Image } from "./style";
import * as api from '../../services/api';
import Swal from 'sweetalert2';

export default function Publish() {

    const {auth} = useAuth();
    const [userData, setUserData] = useState({});
    const [publishData, setPublishData] = useState({link: '', description: ''}); 
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const promise = api.getUserData(auth);
        promise.then(response => {
            setUserData(response.data);
        });
    }, [auth]);

    function publish(e) {
        e.preventDefault();
        setIsLoading(true);
        const promise = api.publishPost({...auth, publishData: publishData});

        promise.then(response => {
            setIsLoading(false);
            setPublishData({link:'', description:''});
            window.location.reload();
            
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: "OOPS...",
                text: 'Email e/ou senha incorretos, insira os dados corretamente, por favor.',
            });
            setIsLoading(false);
        });
    }

    function handleChange(e) {
        setPublishData({ ...publishData, [e.target.name]: e.target.value });
    }

    return(
        <Container>
            <Image src={userData.photoUrl}/>

            <Form onSubmit={e => publish(e)}>
                <span>What are you going to share today?</span>
                <input 
                    type="text"
                    placeholder="http://..."
                    name="link"
                    onChange={handleChange}
                    value={publishData.link}
                    disabled={isLoading}
                    required
                />
                <textarea 
                    text="text"
                    placeholder="Awesome article about #javascript"
                    name="description"
                    onChange={handleChange}
                    value={publishData.description}
                    disabled={isLoading}
                />
                <Button disabled={isLoading} type="submit" >
                    {isLoading? "publishing..." : "Publish"}
                </Button>
            </Form>

        </Container>
    );
}