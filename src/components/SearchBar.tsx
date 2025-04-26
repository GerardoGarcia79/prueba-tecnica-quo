import { useContext } from "react";
import UsersContext from "../state-management/context/usersContext";

const SearchBar = () => {
  const { setSearchValue, error, isLoading } = useContext(UsersContext);

  if (error || isLoading) return null;

  return (
    <div className="flex justify-center">
      <input
        placeholder="Search users by name..."
        className="w-[80%] md:w-[60%] border-2 rounded-md border-[var(--text-text)] focus:border-[var(--btn-primary)] transition-colors p-2 outline-0 mb-5"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
