import { blogApiResponse } from "@/mocks/blogApiResponse";
export async function GET() {
  return Response.json(blogApiResponse);
}
