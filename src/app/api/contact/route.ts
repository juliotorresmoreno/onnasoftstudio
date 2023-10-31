import config from "@/config";
import prisma from "@/lib/prisma";
import { MakeEmailProvider } from "@/services/email";
import { welcomeTemplate } from "@/templates/welcome";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany({
    where: {},
  });

  return NextResponse.json(
    { data: users },
    {
      status: 200,
    }
  );
}

type POSTPayload = {
  name: string;
  email: string;
  terms: boolean;
  description: string;
};

export async function POST(request: NextRequest) {
  const payload: POSTPayload = await request.json();
  if (!payload.terms) {
    return Response.json(
      { success: false, error: "You must accept the terms" },
      { status: 400 }
    );
  }

  let user = await prisma.user.findUnique({
    where: { email: payload.email },
  });
  if (!user) {
    user = await prisma.user.create({
      data: {
        email: payload.email,
        fullname: payload.name,
      },
    });
  }

  await prisma.message.create({
    data: {
      authorId: user.id,
      content: payload.description,
    },
  });

  const emailManager = MakeEmailProvider();

  emailManager.send({
    to: payload.email,
    from: config.SITE_EMAIL,
    subject:
      "Welcome, your request has been registered, I will assist you soon",
    html: welcomeTemplate({
      name: payload.name,
      supportURL: config.SITE_URL,
      supportEmail: config.SITE_EMAIL,
    }),
  });
  emailManager.send({
    to: config.EMAIL,
    from: config.SITE_EMAIL,
    subject: "I am interested in knowing more about your services.",
    html: payload.description,
  });

  return NextResponse.json(
    { success: true },
    {
      status: 200,
    }
  );
}
