"use client";
import Image from "next/image";
import { addServer } from "../server/server";

const ServerAdd = () => {
    const handleSubmit = async (formData: any) => {
        const name = formData.get("name") as string;
        const ip = formData.get("ip") as string;
        const port = formData.get("port") as number;
        const password = formData.get("password") as string;

        await addServer(name, ip, port, password);
        return;
    };

    return (
        <div className="flex flex-col gap-1 w-fit">
            <h1 className="font-semibold text-xl">Add Server</h1>
            <form action={handleSubmit} className="flex gap-2">
                <div className="flex flex-col gap-2">
                    <input
                        required
                        className="text-input"
                        name="name"
                        placeholder="name"
                        type="text"
                    />
                    <div className="flex gap-1">
                        <input
                            required
                            className="text-input"
                            name="ip"
                            placeholder="ip"
                            type="text"
                        />
                        <input
                            required
                            className="text-input w-20"
                            name="port"
                            placeholder="port"
                            type="number"
                        />
                    </div>
                    <input
                        className="text-input"
                        name="password"
                        placeholder="password"
                        type="text"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-white h-full w-10 flex items-center justify-center rounded-md"
                    >
                        <Image
                            src="/svg/plus.svg"
                            height={24}
                            width={24}
                            alt="plus-icon"
                        />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ServerAdd;
