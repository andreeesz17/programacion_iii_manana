import { useRoutes } from "react-router-dom";
import { appRoutes } from "./routes";

export default function App(): JSX.Element {
  const routes = useRoutes(appRoutes);
  return <>{routes}</>;
}