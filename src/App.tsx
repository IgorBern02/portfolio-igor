import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { BackgroundParticles } from "./components/Background/BackgroundParticles";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <BackgroundParticles />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
