import UserCard from "./UserCard";
import UsersContext from "../state-management/context/usersContext";
import { useContext } from "react";
import { ClipLoader } from "react-spinners";

const UsersGrid = () => {
  const { filteredUsers, error, isLoading } = useContext(UsersContext);

  if (error) return <p className="text-red-500 text-lg text-center">{error}</p>;

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <ClipLoader color="black" size="28" />
        </div>
      ) : (
        <div className="max-w-[95%] sm:max-width-[90%] md:max-width-[80%] lg:max-width-[70%] text-[var(--text-text)] mx-auto">
          <div className="hidden md:grid grid-cols-4 font-bold gap-4 px-4 py-1 border-b-1 shadow-sm bg-white">
            <h2 className="table-header">Name</h2>
            <h2 className="table-header">Cell number</h2>
            <h2 className="table-header">Email</h2>
            <div className="flex justify-center">
              <h2 className="table-header">Details</h2>
            </div>
          </div>
          {filteredUsers.map((user, index) => (
            <UserCard key={user.id + "-" + index} user={user} />
          ))}
        </div>
      )}
    </>
  );
};

export default UsersGrid;
