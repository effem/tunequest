import { setCookie } from "nookies";
import { v4 as uuid } from "uuid";
import {NextApiHandler} from "next";

const handler: NextApiHandler = (req, res) => {
    if (req.method === "GET") {
        const state = uuid();

        const clientId = process.env.SPOTIFY_CLIENT_ID || "";
        const scopes = process.env.SPOTIFY_SCOPES || "";
        const redirectUri = process.env.SPOTIFY_REDIRECT_URI || "";

        const redirectParams = new URLSearchParams({
            response_type: "code",
            client_id: clientId,
            scope: scopes,
            redirect_uri: redirectUri,
            state: state,
        });

        const secure = !req.headers.host?.includes("localhost");
        setCookie({ res }, "state", state, {
            maxAge: 3600000,
            secure: secure,
            httpOnly: true,
            path: "/",
        });

        const url = `${process.env.SPOTIFY_AUTHORIZE_URL}?${redirectParams.toString()}`;

        res.redirect(url);
    } else {
        res.status(405).send("Method Not Allowed");
    }
};

export default handler;