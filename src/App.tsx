import UsersGrid from "./components/UsersGrid";

function App() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] flex justify-center">
      <div className="my-5 md:my-10">
        <h1 className="font-bold text-3xl text-text text-center mb-2 md:mb-5">
          Prueba Técnica Front-end Junior
        </h1>
        <UsersGrid />
      </div>
    </div>
  );
}

export default App;
