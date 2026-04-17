import EventEmitter from "events";

class Post extends EventEmitter {
  constructor(author, text) {
    super();
    this.author = author;
    this.text = text;
    this.likesQty = 0;
    this.on("likePost", (username) => {
  console.log(`${username} liked your post!`);
});
  }

  like(username) {
    if (!username) {
        this.emit('error')
    }
    this.likesQty += 1;
    this.emit("likePost", username);
  }
}

const myPost = new Post("Bogdan", "My greate post!");


// console.log(myPost.author);
// console.log(myPost.text);
// console.log(myPost.likesQty);
myPost.like("alice");
setTimeout(() => myPost.like("bob"), 1000);
setTimeout(() => myPost.like("alex"), 2000);
// console.log(myPost.likesQty);
