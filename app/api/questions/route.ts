export  async function POST(req: Request) {
    const body = await req.json();
    console.log(body)
    return new Response(body)
}