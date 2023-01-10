import { useState, createContext, useContext } from 'react';

const userContext = createContext();

export default function Component1() {
    const [user, setUser] = useState('Krut with context API');

    return (
        <userContext.Provider value={user}>
            <h1>
                {`Hello ${user}!`}
            </h1>
            <Component2 user={user} />
        </userContext.Provider>
    )
}

function Component2() {
    return (
        <>
            <Component3 />
        </>
    )
}

function Component3() {
    return (
        <>
            <Component4 />
        </>
    )
}
function Component4() {
    return (
        <>
            <Component5 />
        </>
    )
}
function Component5() {

    const user = useContext(userContext);

    return (
        <>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    )
}