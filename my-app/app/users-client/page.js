"use client";
import {useEffect , useState} from 'react';

export default function ClientUsers(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/api/hello").then(res => res.json()).then(data => setUsers(data));
    }, [])
    return <pre>{JSON.stringify(users, null, 2)}</pre>
}