function formatName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function FullName(props) {
    return (
        <p>User: {formatName(props)}</p>
    )
}

export default FullName;