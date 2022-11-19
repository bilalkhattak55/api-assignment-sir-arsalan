import Card from './Card';
import Loading from './Loading';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UserApi = () => {
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState("");

    function getUser() {

        setLoading(false)
        axios.get("https://reqres.in/api/users?page=2")
            .then((res) => {
                setUser(res.data.data)
                    .catch((error) => {
                        setIsError(error.message)
                    })
            })

    }

    useEffect(() => {
        getUser()
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <div className="App">
            {isError !== "" && <h2>{isError}</h2>}
            <Card users={users} />
        </div>
    );
}

export default UserApi;
