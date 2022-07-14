import "./App.css";

function submit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
}

function App() {
  return (
    <div className="App">
      <form onSubmit={(e) => submit(e)}></form>
    </div>
  );
}

type AppProps = {
  prop: string;
};

export const Bpp = ({ prop }: AppProps): JSX.Element => {
  return <div></div>;
};

export default App;
