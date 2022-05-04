import React, { useState } from "react";
import axios from 'axios'

export const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content
    })

    setContent('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="input-c">New Comment</label>
          <input
            type="text"
            id='input-c'
            className="form-control"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}