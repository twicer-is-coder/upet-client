import React, { useContext, useState } from 'react'

export type IMenu = "Dashboard" | "Settings" | "Proxies";

export interface IFormFields {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNo: string,
}

interface IUser {
    formFields: IFormFields,
    setFormFields: React.Dispatch<React.SetStateAction<IFormFields>>,
}

const UserContext = React.createContext<IUser>({} as IUser);

const UserProvider = ({ children }: any) => {

    const [formFields, setFormFields] = useState<IFormFields>({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        phoneNo: ""
    })

    const user: IUser = {
        formFields,
        setFormFields
    }
    return (
        <UserContext.Provider
            value={user}>
            {children}
        </UserContext.Provider>
    )
};

const useUser = () => useContext(UserContext)

export { UserProvider, useUser }
