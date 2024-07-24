"use server";
import { Rcon } from "rcon-client";
import { getServer } from "./server";

export const sendRcon = async (id: string, command: string) => {
    const server = await getServer(id);

    const rcon = new Rcon({
        host: server.ip,
        port: server.port,
        password: server.password,
    });

    try {
        await rcon.connect();
        const response = await rcon.send(command);
        await rcon.end();

        return `> ${response as string}`;
    } catch (error) {
        return "error: Error connecting to RCON server";
    }
};
