import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/Post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: Post;
  @Input() index: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addLoveIts() {
    this.postService.loveItsPost(this.index);
  }

  deleteLoveIts() {
    this.postService.dontLoveItsPost(this.index);
  }

  deletePost() {
    this.postService.removePost(this.index);
  }
}
