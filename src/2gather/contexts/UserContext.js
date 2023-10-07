import React, {createContext, useState} from 'react';

export const UserContext = createContext();

export default function UserProvider({children}){

    const[signed, setSigned] = useState(false);
    const[name, setName] = useState(false);

    return (

        <UserContext.Provider>
            value-{{
                signed,
                setSigned,
                name,
                setName,

            }}
        </UserContext.Provider>
    );
}

export function useUser(){
    const contex = UserContext(UserContext);
    const { signed, setSigned, name, setName } = context;
    return { signed, setSigned, name, setName };

}