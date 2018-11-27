import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../model/Post';
import { PostService } from '../service/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  @Input() posts: Post[];
  postsSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
