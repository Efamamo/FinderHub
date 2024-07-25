import './UserCard.css'
function UserCard({name, image, link}){
    return (
        <div className="user-card">
            <a href={link}>
                <h3>{name}</h3>
                <img src={image} alt="user image"/>
            </a>
        </div>
    );
}

export default UserCard