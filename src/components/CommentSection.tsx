"use client"; 

import { useState, useEffect } from "react";

export default function CommentSection() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  // Load comments from local storage

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Save comments to local storage

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Add a new comment

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  // Handle form submission (Enter key)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddComment();
  };

  // Delete a comment
  
  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Comments</h2>
      <form onSubmit={handleFormSubmit} className="mb-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 rounded-lg text-white px-4 py-2 mt-2 active:bg-blue-600 active:scale-95 transition transform"
        >
          Add Comment
        </button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} className="mb-2 border-b pb-2 flex justify-between items-center">
            {comment}
            <button
              onClick={() => handleDeleteComment(index)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}