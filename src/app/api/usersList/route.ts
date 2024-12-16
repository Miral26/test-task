export async function GET() {
  try {
    const data =await fetch("https://dummyjson.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const userData =await data.json();

    return new Response(JSON.stringify({ data: userData }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: `Error in GET request ${error}` }),
      { status: 500 }
    );
  }
}
