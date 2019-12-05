import { Injectable } from '@angular/core';


@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class CommentService {
  comments = [];

  addToComments(product) {
    this.comments.push(product);
  }

  getComments() {
    return this.comments;
  }

  removeComment(product) {

    let index = this.comments.indexOf(product);
    this.comments.splice(index, 1);
    return this.comments;
  }

  clearComments() {
    this.comments = [];
    return this.comments;
  }

  constructor() { }

}
