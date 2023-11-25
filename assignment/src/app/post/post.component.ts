import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="post.image"
        alt="Exterior photo of {{ post.name }}"
      />
      <h2 class="listing-heading">{{ post.name }}</h2>
      <p class="listing-description">
        {{ post.description }}
      </p>
      <a [routerLink]="['/details', post.id]">Learn More</a>
    </section>
  `,
  styleUrl: './post.component.css',
})
export class PostComponent {
  @Input() post!: Post;
}
