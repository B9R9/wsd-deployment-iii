import * as messageService from "./services/messageService.js";
import { serve } from "./deps.js";
import { configure, renderFile } from "./deps.js";

configure({
    views: `${Deno.cwd()}/views/`,
});

const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const redirectTo = (path) => {
    return new Response(`Redirecting to ${path}.`, {
        status: 303,
        headers: {
            Location: path,
        },
    });
};

const addPost = async (request) => {
    const formData = await request.formData();

    const sender = formData.get("sender");
    const message = formData.get("message");

    await messageService.addPost(sender, message);

    return redirectTo("/");
};

const listPost = async (request) => {
    const data = {
        messages: await messageService.getRecentMessages(),
    };
    return new Response(await renderFile("index.eta", data), responseDetails);
};

const handleRequest = async (request) => {
    const url = new URL(request.url);
    if (request.method === "POST") {
        return await addPost(request);
    }
    return await listPost(request);
};

serve(handleRequest, { port: 7777 });
