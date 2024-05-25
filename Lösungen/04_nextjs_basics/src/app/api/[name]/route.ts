import { NextRequest } from "next/server";
export async function GET(req: NextRequest, { params }: { params: { name: string } }) {
  return Response.json({ message: `Hello from the API, ${params.name}!` });
}
