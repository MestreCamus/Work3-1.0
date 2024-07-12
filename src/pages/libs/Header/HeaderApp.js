import React from "react";

const HeaderApp = () => {
    return (
        <header className="headerApp">
            <ul>
                <li><a href="/app">Bounties 💰</a></li>
                <li><a href="/app">Jobs 🧑‍💼</a></li>
            </ul>
            <ul>
                <li><a href="/app">DAOs 🏛️</a></li>
                <li><a href="/app">Freelancers 🧑‍💻</a></li>
            </ul>
            <ul>
                <li><a href="/app">Sign In 🔑</a></li>
            </ul>
        </header>
    )
}

export default HeaderApp;