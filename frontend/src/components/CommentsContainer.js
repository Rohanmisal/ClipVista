const commentsData = [
  {
    name: "ROhan",
    text: "lorem ipsum dolor sit",
    replies: [],
  },

  {
    name: "Rohan Misal",
    text: "lorem ipsum dolor sit",
    replies: [
      {
        name: "shoham",
        text: "lorem ipsum dolor sit",
        replies: [],
      },
    ],
  },

  {
    name: "shoham",
    text: "lorem ipsum dolor sit",
    replies: [],
  },
  {
    name: "mohan Misal",
    text: "lorem ipsum dolor sit",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-8 h-8"
        src="https://www.bing.com/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&w=204&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
        alt="comment"
      />
      <div className="px-3">
        <h1 className="font-bold">{name}</h1>
        <p className="">{text}</p>
        {/* {replies.map((reply, index) => (
          <Comment key={index} data={reply} />
        ))} */}
      </div>
    </div>
  );
};

const CommentsList = ( comments ) => {
  // Don't use index as keys
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      {/* <CommentsList Comments={commentsData} /> */}
      <Comment data={commentsData} />
    </div>
  );
};

export default CommentsContainer;
