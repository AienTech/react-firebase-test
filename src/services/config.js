import Index from "../pages/index"
import Login from "../pages/login"
import Register from "../pages/register"
import Chat from "../pages/chat"

export default {
	firebase: {
		apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
		authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
		projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
		storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
		appId: process.env.REACT_APP_FIREBASE_APP_ID
	},
	routes: [
		{
			pathname: "/",
			componenet: Index,
			isProtected: false
		},
		{
			pathname: "/login",
			componenet: Login,
			isProtected: false
		},
		{
			pathname: "/register",
			componenet: Register,
			isProtected: false
		},
		{
			pathname: "/chat",
			componenet: Chat,
			isProtected: true
		}
	]
};