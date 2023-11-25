import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="post?.image"
        alt="Exterior photo of {{ post?.name }}"
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ post?.name }}</h2>
        <p class="listing-description">
          {{ post?.description }}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this post</h2>
        <ul>
          <li>Description: {{ post?.description }}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  postService: PostService = inject(PostService);
  post: Post | undefined;

  /**
   *
   */
  constructor() {
    const postId = this.route.snapshot.params['id'];
    this.postService.getPostById(postId).then((post) => {
      this.post = post;
    });
  }
}
