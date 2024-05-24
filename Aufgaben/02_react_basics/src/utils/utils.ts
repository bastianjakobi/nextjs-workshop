import { Post } from "../model/Post";

export function fetchBlogPosts(): Promise<Post[]> {
  return fetch("https://nextjs-workshop-evw.vercel.app/api").then((response) => {
    return response.json();
  });
}
