import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CommentService } from '../comment.service';


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  products = products;

  addToComments(product) {
    window.alert('Your comment has been added!');
    this.commentService.addToComments(product);
  }

  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {
  }

}
