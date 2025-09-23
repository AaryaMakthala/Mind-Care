import axios from 'axios';

export async function POST(req) {
  const { query } = await req.json();

  if (!query || query.length < 3) {
    return new Response(JSON.stringify([]), { status: 200 }); // return empty array if <3 chars
  }

  try {
    const response = await axios.post(
      'https://colleges-api-india.fly.dev/colleges/search',
      null,
      { headers: { Keyword: query } }
    );

    // Extract college names for suggestions
    const suggestions = response.data.map(c => c[2]);
    return new Response(JSON.stringify(suggestions), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify([]), { status: 500 });
  }
}