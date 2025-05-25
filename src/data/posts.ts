// src/data/posts.ts
export interface Post {
  date: string;
  title: string;
  slug: string;
}

export const posts: Post[] = [
  { date: '25-02-09', title: 'the stack', slug: 'intro' },
  { date: '25-02-10', title: 'learning', slug: 'learning' },
] as const;

// Get recent posts for display
export const getRecentPosts = () => posts.slice(0, 3);