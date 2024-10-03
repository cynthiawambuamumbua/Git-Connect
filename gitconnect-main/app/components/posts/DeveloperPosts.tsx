'use client'

import React, { useState } from 'react';

interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  likes: number;
  dislikes: number;
  comments: Comment[];
}

interface Comment {
  id: string;
  content: string;
  authorId: string;
}

const dummyPosts: Post[] = [
  {
    id: '1',
    title: 'Understanding TypeScript',
    content: 'TypeScript is a superset of JavaScript that compiles to plain JavaScript.',
    authorId: 'dev1',
    likes: 10,
    dislikes: 2,
    comments: [
      { id: 'c1', content: 'Great article!', authorId: 'user1' },
      { id: 'c2', content: 'Very informative!', authorId: 'user2' },
    ],
  },
  {
    id: '2',
    title: 'Next.js vs. React',
    content: 'Next.js provides server-side rendering capabilities that React lacks.',
    authorId: 'dev2',
    likes: 5,
    dislikes: 1,
    comments: [],
  },
];

const DeveloperPosts: React.FC<{ authorId: string }> = ({ authorId }) => {
  const [posts, setPosts] = useState<Post[]>(dummyPosts);

  const handleLike = (postId: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleDislike = (postId: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, dislikes: post.dislikes + 1 } : post
      )
    );
  };

  const handleDeletePost = (postId: string) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  };

  return (
    <div className="my-4 mx-6">
        <div className='flex justify-between'>
        <h2 className="text-2xl  font-bold">Latest Posts</h2>
        <p className=" font-bold p-2 text-white bg-gray-900">View All</p>
        </div>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-gray-700">{post.content}</p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-2">
                <button onClick={() => handleLike(post.id)} className="text-blue-500">
                  👍 {post.likes}
                </button>
                <button onClick={() => handleDislike(post.id)} className="text-red-500">
                  👎 {post.dislikes}
                </button>
                <button onClick={() => handleDeletePost(post.id)} className="text-red-500">
                  Delete
                </button>
              </div>
              <span className="text-gray-500">{post.comments.length} Comments</span>
            </div>
            {/* Comment Section */}
            <div className="mt-2 border-t pt-2">
              {post.comments.map(comment => (
                <div key={comment.id} className="text-gray-600 py-1 border-b">
                  {comment.content}
                </div>
              ))}
            </div>
            {/* Comment Input Field (Optional) */}
            <div className="mt-2">
              <input
                type="text"
                placeholder="Add a comment..."
                className="border rounded p-2 w-full"
              />
              <button className="mt-2 bg-blue-500 text-white rounded px-4 py-1">Comment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperPosts;
