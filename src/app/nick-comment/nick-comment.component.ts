import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { products } from '../products';

@Component({
  selector: 'app-nick-comment',
  templateUrl: './nick-comment.component.html',
  styleUrls: ['./nick-comment.component.css']
})
export class NickCommentComponent implements OnInit {
  products = products;
  items;

  clearComments() {
    this.commentService.clearComments();
    this.items = [];
    return this.items;
  }

  removeComment(product) {
    this.commentService.removeComment(product);
    window.alert('Comment removed!' )
    console.log('The comment entitled--', product.description,'--has been removed')
    return this.items;
  }


  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.items = this.commentService.getComments();
  }
}
