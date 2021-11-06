import React, { createContext, useContext, useState } from "react"

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
	const [user, setUser] = useState(null)

	const SignIn = (username) => {
		setUser(username)
	}

	const SignOut = () => {
		setUser(null)
	}

	return <AuthContext.Provider value={{
		User: user,
		SignIn,
		SignOut
	}}>
		{children}
	</AuthContext.Provider>
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)