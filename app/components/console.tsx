"use client";

import { useState } from "react";
import { sendRcon } from "../server/rcon";
import Image from "next/image";

const Console = ({ serverID, serverName }: any) => {
    const [response, setResponse]: any = useState(["> web-rcon"]);

    const handleCommandSubmit = async (formData: any) => {
        const command = formData.get("command") as string;

        const res = await sendRcon(serverID, command);

        return setResponse((prev: any) => [res, ...prev]);
    };

    return (
        <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-xl">{serverName+" -> "}</h1>
            <form action={handleCommandSubmit} className="flex gap-2">
                <input
                    required
                    className="text-input"
                    name="command"
                    placeholder="command"
                    type="text"
                />

                <button
                    type="submit"
                    className="bg-white h-9 w-10 flex items-center justify-center rounded"
                >
                    <Image
                        src="/svg/send.svg"
                        height={24}
                        width={24}
                        alt="send-icon"
                    />
                </button>
            </form>

            <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-xl">Responses</h1>
                <div className="border-white rounded-xl border-2 max-w-3xl h-96 p-2 overflow-hidden">
                    <div className="w-full h-full overflow-y-scroll scroll">
                        {response.map((str: any, index: any) => (
                            <p key={index}>{str}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Console;
