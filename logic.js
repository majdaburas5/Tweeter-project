const Tweeter = function () {
  const _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  let postIdCounter = 3;

  let commentIdCounter = 7;

  function getPosts() {
    return _posts;
  }

  function addPost(Posttext) {
    let newPost = {
      text: Posttext,
      id: "p" + postIdCounter,
      comments: [],
    };
    _posts.push(newPost);
    postIdCounter++;
  }
  function removePost(postId) {
    for (let indx in _posts) {
      if (_posts[indx].id == postId) _posts.splice(indx, 1);
    }
  }

  function addComment(postId, comment) {
    let newComment = {
      id: "c" + commentIdCounter,
      text: comment,
    };
    for (let indx in _posts) {
      if (_posts[indx].id === postId) _posts[indx].comments.push(newComment);
    }
    commentIdCounter++;
  }
  function removeComment(postId, commentId) {
    for (let post of _posts) {
      if (post.id === postId) {
        for (let indx in post.comments) {
          if (post.comments[indx].id === commentId) {
            post.comments.splice(indx, 1);
          }
        }
      }
    }
  }
  return {
    getPosts: getPosts,
    addPost: addPost,
    removePost: removePost,
    addComment: addComment,
    removeComment: removeComment,
  };
};
