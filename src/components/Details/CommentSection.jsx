import React, { useState } from 'react';

function CommentSection() {
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        //Here you can handle the submitted comment, e.g., send it to a server
        console.log('Submitted comment:', comment);
        setComment('');
    };

    return (
        <form onSubmit={handleSubmit} classNae="comment-form">
            <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Your comment..."
            required
            />
            <button type="submit" className="Submit-comment-button">Submit</button>
        </form>
    );
}

export default CommentSection