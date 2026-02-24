import { NextResponse } from "next/server";

export const maxDuration = 60;

export async function POST(request) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: body.model || "claude-sonnet-4-20250514",
        max_tokens: body.max_tokens || 8192,
        system: body.system || "",
        messages: body.messages || [],
        stream: true,
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text().catch(() => "");
      return NextResponse.json(
        { error: "Anthropic API error: " + resp.status, detail: errText },
        { status: resp.status }
      );
    }

    // Pipe the SSE stream straight through — keeps connection alive
    return new Response(resp.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error: " + err.message },
      { status: 500 }
    );
  }
}
