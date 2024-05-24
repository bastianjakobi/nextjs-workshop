import { blogApiResponse } from "@/mocks/blogApiResponse";
import { NextRequest } from "next/server";
// TODO: Allow CORS
export async function GET(req: NextRequest, { params }: { params: { postId: string } }) {
  const postId = params.postId;
  const data = blogApiResponse.find((post) => post.id === parseInt(postId));
  return Response.json(data);
}
