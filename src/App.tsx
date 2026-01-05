import { BrowserRouter } from "react-router-dom";

export default function App() {

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <h1>Chinese words</h1>
    </BrowserRouter>
  );
}
