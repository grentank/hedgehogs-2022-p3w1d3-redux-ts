export type PostsSliceState = {
  posts: Post[];
  searchPosts: Post[];
};

export type Post = {
  id: number;
  body: string;
  authorId: number;
};
