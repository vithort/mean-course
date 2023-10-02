import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { PageEvent } from "@angular/material";

import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit, OnDestroy {
  isLoading = false;
  posts: Post[] = [];
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  postsPerPage = 2;
  totalPosts = 0;

  private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.postsService.getPosts(this.postsPerPage, this.currentPage);
    this.postsSub = this.postsService
      .getPostUpdateListener()
      .subscribe((postData: { posts: Post[]; postCount: number }) => {
        this.isLoading = false;
        this.totalPosts = postData.postCount;
        this.posts = postData.posts;
      });
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId).subscribe(() => {
      this.postsService.getPosts(this.postsPerPage, this.currentPage);
    });
  }

  onChangePage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.totalPosts = pageData.length;
    this.postsService.getPosts(this.postsPerPage, this.currentPage);
  }
}
