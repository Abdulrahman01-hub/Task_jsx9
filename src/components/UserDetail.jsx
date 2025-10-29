import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => console.log("Xəta baş verdi:", err));
    }, [id]);

    if (!user) return <p style={{ textAlign: "center" }}>Yüklənir...</p>;

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h2>{user.name}</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Company:</strong> {user.company?.name}</p>
        </div>
    );
}

export default UserDetail;