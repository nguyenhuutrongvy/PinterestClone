import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  /* postList: Post[] = [
    {
      id: '324de8c8-1c2c-46b9-816b-91ed1d05e8a0',
      image: 'https://random.imagecdn.app/400/250',
      name: 'Corporate Intranet Assistant',
      description: 'Saepe ut maxime voluptas id officia.',
    },
    {
      id: '74ccb566-a04d-43b5-b119-18c5f2899584',
      image: 'https://random.imagecdn.app/400/250',
      name: 'Senior Tactics Officer',
      description: 'Pariatur culpa sit aut non dolorem porro dignissimos.',
    },
    {
      id: '5ec67ba9-8279-47fd-be6f-391f93067273',
      image: 'https://random.imagecdn.app/400/250',
      name: 'Internal Response Designer',
      description: 'Eaque quas qui iure minima quo impedit.',
    },
    {
      id: '452899e8-f799-4974-a893-0eb76b14c787',
      image: 'https://random.imagecdn.app/400/250',
      name: 'Human Mobility Designer',
      description: 'Cum quia et recusandae.',
    },
    {
      id: 'f2261079-3943-4e3f-bbaf-8f254d235642',
      image: 'https://random.imagecdn.app/400/250',
      name: 'Customer Response Officer',
      description: 'Est debitis rerum explicabo placeat dignissimos et velit.',
    },
    {
      id: '4e40f9c4-4c6c-4c7d-b1b7-de9a929a4f61',
      image: 'https://random.imagecdn.app/400/250',
      name: 'Senior Interactions Planner',
      description:
        'Laudantium non voluptas dicta esse doloremque commodi voluptatem est.',
    },
    {
      id: '3d76f2bc-8b2e-45f2-b659-9af13f768240',
      image: 'https://random.imagecdn.app/400/250',
      name: 'Dynamic Paradigm Associate',
      description:
        'Beatae dignissimos dolorem et et aut dolorem inventore officia.',
    },
    {
      id: '67d808f8-d5af-4900-9153-f726b1d65eac',
      image: 'https://random.imagecdn.app/400/250',
      name: 'Senior Directives Director',
      description: 'Minima numquam quaerat nesciunt qui itaque velit.',
    },
    {
      id: 'eba6da98-ec9d-4b7e-b851-60eb592fe9da',
      image: 'https://random.imagecdn.app/400/250',
      name: 'Principal Branding Executive',
      description:
        'Enim nesciunt dolor reprehenderit magnam aliquid nemo reiciendis mollitia.',
    },
    {
      id: '8bbba333-5fd3-403e-9136-0041f86f7c96',
      image: 'https://random.imagecdn.app/400/250',
      name: 'Global Group Specialist',
      description: 'Dolore beatae occaecati nam.',
    },
  ]; */

  url = 'https://pinterest-clone-4j5x.onrender.com/posts';

  constructor() {}

  /* getAllPosts(): Post[] {
    return this.postList;
  } */

  async getAllPosts(): Promise<Post[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  /* getPostById(id: string): Post | undefined {
    return this.postList.find((post) => post.id === id);
  } */

  async getPostById(id: string): Promise<Post | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? [];
  }
}
