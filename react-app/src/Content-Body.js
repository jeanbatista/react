import FullName from "./FullName";
import Tick from "./Tick";

const users = [
    {
        firstName: "Cris",
        lastName: "Hussel"
    },
    {
        firstName: "Lewa",
        lastName: "Felix"
    }
]

function ContentBody() {
    return (
        <div>
            <h1>Application Content</h1>
            {users.map(user => <FullName firstName={user.firstName} lastName={user.lastName} />)}
            <Tick date={new Date().toLocaleTimeString()} />
        </div>
    );
}

export default ContentBody;