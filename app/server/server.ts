"use server";

import { connectDB } from "../lib/db/db";
import Servers from "../lib/db/models/servers";

export const addServer = async (
    name: string,
    ip: string,
    port: number,
    password: string
) => {
    "use server";
    await connectDB();

    await Servers.create({ name, ip, port, password });
    return;
};

export const getServers = async () => {
    "use server";
    await connectDB();

    const data: any = await Servers.find({}).lean();

    const servers = data?.map((server: any) => ({
        ...server,
        _id: server._id.toString(),
    }));

    return servers;
};

export const getServer = async (id: string) => {
    "use server";
    await connectDB();

    let server: any = await Servers.findById(id).lean();

    server?._id.toString();

    return server;
};
