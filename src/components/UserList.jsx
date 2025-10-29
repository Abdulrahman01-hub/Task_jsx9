import { useEffect, useState } from "react";
import UserCard from "./UserCard";

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log("Xəta baş verdi:", err));
    }, []);

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "20px" }}>
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}

export default UserList;