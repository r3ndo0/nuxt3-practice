export default defineEventHandler(async (event) => {
  if (event.node.req.method === "POST") {
    const body = await readBody(event);
    const { username, password } = body;
    return { username };
  }
});
