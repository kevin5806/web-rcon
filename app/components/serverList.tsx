"use client";
import { useEffect, useState } from "react";
import { getServers } from "../server/server";
import Image from "next/image";

const ServerList = ({ setServerID, setServerName }: any) => {
    const [servers, setServers]: any = useState();

    useEffect(() => {
        const get = async () => {
            setServers(await getServers());
        };
        get();
    }, [setServers]);

    return (
        <div className="flex flex-col gap-3 p-3">
            <div className="flex items-center gap-1">
                <Image
                    src="/svg/server.svg"
                    height={18}
                    width={18}
                    alt="server-icon"
                />
                <h3>Servers</h3>
            </div>

            <div className="flex flex-col gap-2">
                {servers?.map((server: any) => (
                    <div
                        className="border-white border-1 p-1 overflow-hidden rounded cursor-pointer flex items-center justify-center"
                        key={server._id}
                        onClick={() => {
                            setServerID(server._id.toString());
                            setServerName(server.name);
                        }}
                    >
                        <p className="text-white">{server?.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServerList;
