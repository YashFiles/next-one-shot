export default async function Users(){
    // fetch data on the server
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return (
        <div>
        <h1> Users List (Server-side)</h1>
        <ul>
        {users.map(user => (
            <li key = {user.id}> {user.name} ({user.email})</li>
        ))}
        </ul>
        </div>
    );
}