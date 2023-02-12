const Renderer = function () {
  function renderPosts(postsArr) {
    for (let post of postsArr) {
      $("#posts").append(
        `<div class ="post" id="${post.id}">${post.text}</div>`
      );
      for (let indx in post.comments) {
        $(`#${post.id}`).append(
          `<div><span class="delete-comment" data-id="${post.id}" data-commentid="${post.comments[indx].id}" >X</span><div class="comments">${post.comments[indx].text}</div></div>`
        );
      }

      $(`#${post.id}`).append(
        `<input id="commentVal" placeholder= "Got something to say?">`
      );

      $(`#${post.id}`).append(
        `<button class="comments" data-id="${post.id}" >Comment</button> `
      );

      $(`#${post.id}`).append(
        `<div><button class="delete" data-id="${post.id}" >Delete Post</button></div>`
      );
    }
  }
  return {
    renderPosts: renderPosts,
  };
};
