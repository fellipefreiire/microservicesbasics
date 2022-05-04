import React from 'react';
import { PostCreate } from './PostCreate';
import { PostList } from './PostList';

export const App = () => {
  return (
    <div className="contianer" style={{ marginRight: '10%', marginLeft: '10%' }}>
      <h1>Create Post!!!!!</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  )
}