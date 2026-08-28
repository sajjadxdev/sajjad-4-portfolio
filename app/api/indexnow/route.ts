import { NextResponse } from 'next/server';

export async function POST() {
  const host = 'sajjadahmadai.vercel.app';
  const key = '8c238e7bb3b94808b74bd61633f5ec31';

  const urlList = [
    `https://${host}/`,
    `https://${host}/about`,
    `https://${host}/services`,
    `https://${host}/services/ai-agent-development`,
    `https://${host}/services/rag-development`,
    `https://${host}/services/generative-ai`,
    `https://${host}/services/mcp-development`,
    `https://${host}/services/ai-automation`,
    `https://${host}/services/computer-vision`,
    `https://${host}/locations`,
    `https://${host}/locations/islamabad`,
    `https://${host}/locations/pakistan`,
    `https://${host}/locations/uae`,
    `https://${host}/locations/germany`,
    `https://${host}/locations/usa`,
    `https://${host}/blog`,
    `https://${host}/blog/how-can-ai-agents-increase-sales-for-your-business`,
    `https://${host}/blog/what-is-agentic-ai`,
    `https://${host}/blog/what-is-mcp`,
  ];

  const payload = {
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList,
  };

  try {
    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: true,
      status: response.status,
      message: 'URLs submitted to IndexNow endpoint successfully.',
      urlsSubmitted: urlList.length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
