import { loadEnvFile } from 'node:process';
loadEnvFile();

const HEADER: HeadersInit = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.LM_STUDIO_API_KEY}`,
};

export async function generateNames(
  prompt: string,
  length: number
): Promise<string[]> {
  const body = {
    model: process.env.MODEL,
    store: false,
    input: prompt,
  };

  let count = 0;
  let names: string[] = [];
  while (count < length) {
    const result = await fetch(process.env.LM_STUDIO_API!, {
      method: 'POST',
      headers: HEADER,
      body: JSON.stringify(body),
    });

    if (result.status === 200) {
      const response = await result.json();
      const message: { type: string; content: string } = (
        response.output as any[]
      ).find((r) => r.type === 'message');
      names = message.content.split(',').map((n) => n.trim());
      count = names.length;
    } else {
      console.warn(
        'Failed to generate a name',
        result.status,
        await result.json()
      );
      process.exit();
    }
  }

  return names;
}
