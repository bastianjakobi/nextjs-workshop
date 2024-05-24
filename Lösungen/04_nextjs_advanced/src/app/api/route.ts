import { blogApiResponse } from "@/mocks/blogApiResponse";
// TODO: Allow CORS
export async function GET() {
  return Response.json(blogApiResponse);
}
