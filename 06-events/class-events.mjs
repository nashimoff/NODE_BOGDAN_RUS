import EventEmitter from events;

class Post extends EventEmitter {
    constructor(author, text) {
        super()
        this.author = author
        this.text = text
        this.likeQty = 0
    }

    like() {
        this.likesQty += 1
    }
}

const myPost = new Post('Bogdan', 'My greate post!')
console.log(myPost.author)
console.log(myPost.author)
console.log(myPost.author)