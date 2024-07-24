"use client";

import { useState } from "react";
import Console from "./components/console";
import ServerAdd from "./components/serverAdd";
import ServerList from "./components/serverList";

const Home = () => {
    const [serverID, setServerID]: any = useState("");
    const [serverName, setServerName]: any = useState("? select a server ?");

    return (
        <main className="flex">
            <article className="flex justify-center w-28">
                <ServerList
                    setServerID={setServerID}
                    setServerName={setServerName}
                />
            </article>
            <article className=" flex flex-col gap-8 w-full p-5">
                <ServerAdd />
                <Console serverName={serverName} serverID={serverID} />
            </article>
        </main>
    );
};

export default Home;
