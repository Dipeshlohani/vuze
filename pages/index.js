import Head from "next/head"
import Home from "../ui/home"

export default function home() {
  return (
    <div>
      <Head>
        <title>The vuze</title>
        <meta name='keywords' content='web dev' />
      </Head>
      <Home />
    </div>
  );
}
