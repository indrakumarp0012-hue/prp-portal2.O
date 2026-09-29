import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import PlacementReset from "./Components-PlacementReset/PlacementReset";

const resetPasswordPath = "/PRP_Portal/ResetPassword";

const router = createBrowserRouter([
	{
		path: resetPasswordPath,
		element: <PlacementReset />,
	},
	{
		path: "/",
		element: <Navigate to={resetPasswordPath} replace />,
	},
	{
		path: "*",
		element: <Navigate to={resetPasswordPath} replace />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
