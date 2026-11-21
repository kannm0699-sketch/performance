export async function onRequest() {
  const IMAGE_URL = "https://raw.githubusercontent.com/kannm0699-sketch/performance/refs/heads/main/1584.gif";

  const response = await fetch(IMAGE_URL);

  if (!response.ok) {
    return new Response("GIF not found", { status: 404 });
  }

  return new Response(response.body, {
    status: 200,
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
