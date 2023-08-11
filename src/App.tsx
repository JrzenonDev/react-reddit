import { Header } from "./components/layout/Header";
import Routes from "./routes/Routes";

function App() {
  return (
    <main>
      <Header />
      <section className="container">
        <div className="content">
          <Routes />
        </div>
      </section>
    </main>
  );
}

export default App;
