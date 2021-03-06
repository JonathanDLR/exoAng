import { Subject } from 'rxjs';
import { Post } from '../model/Post';

export class PostService {

    posts: Post[] = [
        new Post("Mon premier post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
        new Post("Mon deuxième post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
        new Post("Mon troisième post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
    ];

    postsSubject = new Subject<Post[]>();

    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    createNewPost(newPost: Post) {
        this.posts.push(newPost);
        this.emitPosts();
    }

    removePost(i: number) {
        this.posts.splice(i, 1);
        this.emitPosts();
    }

    loveItsPost(i: number) {
        this.posts[i].loveIts += 1;
        this.emitPosts();
    }

    dontLoveItsPost(i: number) {
        this.posts[i].loveIts -= 1;
        this.emitPosts();
    }
}