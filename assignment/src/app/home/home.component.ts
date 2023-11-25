import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../post/post.component';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PostComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by name or description" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-post *ngFor="let post of filteredPostList" [post]="post"> </app-post>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  postList: Post[] = [];
  filteredPostList: Post[] = [];
  postService: PostService = inject(PostService);

  /**
   *
   */
  constructor() {
    this.postService.getAllPosts().then((postList: Post[]) => {
      this.postList = postList;
      this.filteredPostList = postList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredPostList = this.postList;
      return;
    }

    text = text.trim().toLowerCase();

    this.filteredPostList = this.postList.filter(
      (post) =>
        post?.name.toLowerCase().includes(text) ||
        post?.description.toLowerCase().includes(text),
    );
  }
}
