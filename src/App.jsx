import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import CommonLoginScreen from "./Components-Login/CommonLoginScreen";
import ForgotPassword from "./Components-ForgotPassword/ForgotPassword";
import PlacementReset from "./Components-PlacementReset/PlacementReset";
import ResetPassword from "./ResetPassword/ResetPassword";
import SuccessfulPage from "./Components-Successfulpage/Successfulpage";
import Candidate from "./Components-CandidateRegistration/Candidate";
import LandingPage from "./Components-LandingPage/LandingPage";

const router = createBrowserRouter([
	{
		path: "/register",
		element: <Candidate />,
	},
	{
		path: "/login",
		element: <CommonLoginScreen />,
	},
	{
		path: "/forgot-password",
		element: <ForgotPassword />,
	},
	{
		path: "/reset-link",
		element: <PlacementReset />,
	},
	{
		path: "/reset-password",
		element: <ResetPassword />,
	},
	{
		path: "/success",
		element: <SuccessfulPage />,
	},
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "*",
		element: <Navigate to="/login" replace />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
