import app from "./src/server";

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "localhost";

app.listen(port, host, null,() => {
  console.log(`Server is running on http://${host}:${port}`);
});
