import { createContext, useState } from 'react';
export const RoleContext = createContext();

// This context provider is passed to any component requiring the context
export const RoleProvider
    = ({ children }) => {
        const [role, setRole] = useState("");

        return (
            <RoleContext.Provider
                value={{
                    role,
                    setRole
                }}
            >
                {children}
            </RoleContext.Provider>
        );
    };