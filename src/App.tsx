import SearchBar from "./components/SearchBar";
import UsersGrid from "./components/UsersGrid";
import UsersProvider from "./state-management/UsersProvider";
import LazyUserDetailsCard from "./components/LazyUserDetailsCard";
import UIProvider from "./state-management/UIProvider";

function App() {
  return (
    <UsersProvider>
      <UIProvider>
        <div className="min-h-screen bg-[#f7f9fc] flex justify-center">
          <div className="w-full max-w-7xl my-5 md:my-10">
            <h1 className="font-bold text-3xl text-text text-center mb-2 md:mb-5 text-[var(--text-text)]">
              Prueba Técnica Front-end Junior
            </h1>
            <SearchBar />
            <UsersGrid />
            <LazyUserDetailsCard />
          </div>
        </div>
      </UIProvider>
    </UsersProvider>
  );
}

export default App;
