import "./App.css";
// import {Button} from "./components/ui/button"
import AppLayout from "./layouts/app-layout"
import LandingPage from "./pages/landing"
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        // {
        //   path: "/onboarding",
        //   element: (
        //     <ProtectedRoute>
        //       <Onboarding />
        //     </ProtectedRoute>
        //   ),
        // },
        // {
        //   path: "/jobs",
        //   element: (
        //     <ProtectedRoute>
        //       <JobListing />
        //     </ProtectedRoute>
        //   ),
        // },
        // {
        //   path: "/post-job",
        //   element: (
        //     <ProtectedRoute>
        //       <PostJob />
        //     </ProtectedRoute>
        //   ),
        // },
        // {
        //   path: "/my-jobs",
        //   element: (
        //     <ProtectedRoute>
        //       <MyJobs />
        //     </ProtectedRoute>
        //   ),
        // },
        // {
        //   path: "/saved-jobs",
        //   element: (
        //     <ProtectedRoute>
        //       <SavedJobs />
        //     </ProtectedRoute>
        //   ),
        // },
        // {
        //   path: "/job/:id",
        //   element: (
        //     <ProtectedRoute>
        //       <JobPage />
        //     </ProtectedRoute>
        //   ),
        // },
      ],
    },
  ]);


  return <RouterProvider router={router}/>
}

export default App;
