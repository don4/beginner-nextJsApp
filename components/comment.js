const Comment = ({ comment }) => {
    return (
        <>
        <h3>Comments:</h3>
        <h3>{`${comment.id} comment by ${comment.name} and user's email : ${comment.email}`}</h3>
        <p>{comment.body}</p>
        </>
        
    )
}

export default Comment