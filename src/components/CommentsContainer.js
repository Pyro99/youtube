import React from "react";
import commentsData from "../commentsData";
import { user_logo } from "../constants";

const Comment = ({ data }) => {
  const { name, comment} = data;
  return (
    <div className="flex p-2 shadow-sm bg-gray-100 rounded-lg m-2">
      <img className="h-8" src={user_logo} alt="user_icon" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentsList = ({comments}) =>{
    return comments.map((comment) => (
      <div key={comment.id}>
        <Comment data={comment} />
        <div className="pl-5 border-l border-l-black">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    ));}

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments ={commentsData} />
    </div>
  );
};

export default CommentsContainer;
