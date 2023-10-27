export async function GET(request: Request) {
  return Response.json(
    { success: true },
    {
      status: 200,
    }
  );
}

type POSTPayload = {
  terms: boolean;
  description: string;
};

export async function POST(request: Request) {
  const payload: POSTPayload = await request.json();
  if (!payload.terms) {
    return Response.json(
      { success: false, error: "You must accept the terms" },
      { status: 400 }
    );
  }

  console.log(payload);

  return Response.json(
    { success: true },
    {
      status: 200,
    }
  );
}
