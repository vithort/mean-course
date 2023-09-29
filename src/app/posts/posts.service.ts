import { Injectable } from "@angular/core";

import { Post } from "./post.model";

@Injectable({ providedIn: "root" })
export class PostsService {
  private posts: Post[] = [];

  getPosts(): Post[] {
    return [...this.posts];
  }

  addPost(title: string, content: string): void {
    const post: Post = { title: title, content: content };
    this.posts.push(post);
  }
}
