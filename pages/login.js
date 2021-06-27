import Head from "next/head"
import Login from "../ui/auth/Login"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Login ! The vuze</title>
                <meta name='keywords' content='web dev' />
            </Head>
            <Login />
        </div>
    );
}
