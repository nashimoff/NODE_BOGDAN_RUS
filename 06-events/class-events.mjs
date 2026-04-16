import EventEmitter from "events";

class Post extends EventEmitter {
  constructor(author, text) {
    super();
    this.author = author;
    this.text = text;
    this.likesQty = 0;
  }

  like() {
    this.likesQty += 1;
    this.emit('likePost')
  }
}

const myPost = new Post("Bogdan", "My greate post!");
console.log(myPost.author);
console.log(myPost.text);
console.log(myPost.likesQty);
myPost.like();
console.log(myPost.likesQty);
