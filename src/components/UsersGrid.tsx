import UserCard from "./UserCard";
import UsersContext from "../state-management/context/usersContext";
import { useContext } from "react";
import { ClipLoader } from "react-spinners";

const UsersGrid = () => {
  const { filteredUsers, error, isLoading } = useContext(UsersContext);

  if (error) {
    return <p className="text-red-500 text-lg text-center">{error}</p>;
  }
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <ClipLoader color="black" size="28px" />
      </div>
    );
  }
  if (filteredUsers.length === 0) {
    return (
      <p className="text-[var(--text-text)] text-lg text-center">
        No users found.
      </p>
    );
  }

  return (
    <>
      <div className="max-w-[95%] sm:max-w-[90%] lg:max-w-[80%] text-[var(--text-text)] mx-auto">
        {/* Table headers Tablet/Desktop */}
        <div className="hidden md:grid grid-cols-3 font-bold gap-4 px-4 py-1 border-b-1 shadow-sm bg-white">
          <h2 className="table-header">Name</h2>
          <h2 className="table-header">Cell number</h2>
          <h2 className="table-header">Email</h2>
        </div>
        {filteredUsers.map((user, index) => (
          <UserCard key={user.id + "-" + index} user={user} />
        ))}
      </div>
    </>
  );
};

export default UsersGrid;
