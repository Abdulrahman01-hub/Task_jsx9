import { useNavigate } from "react-router-dom";

function UserCard({ user }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/users/${user.id}`);
    };

    return (
        <div
            onClick={handleClick}
            style={{
                cursor: "pointer",
                background: "#00B4DB",
                color: "#fff",
                padding: "15px",
                margin: "10px",
                borderRadius: "10px",
                width: "200px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                transition: "transform 0.2s",
            }}
            onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
        >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    );
}

export default UserCard;