import { Header } from "./components/layout/Header";
import Routes from "./routes/Routes";

function App() {
  return (
    <main>
      <Header />
      <div className="container">
        <Routes />
      </div>
    </main>
  );
}

export default App;
