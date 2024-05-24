import { Post } from "../model/Post";

export function fetchBlogPosts(): Promise<Post[]> {
  return fetch("http://localhost:3000/api").then((response) => {
    return response.json();
  });
}
