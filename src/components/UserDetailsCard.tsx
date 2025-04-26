import { useContext } from "react";
import UsersContext from "../state-management/context/usersContext";
import { IoCloseCircle } from "react-icons/io5";

const UserDetailsCard = () => {
  const { openModal, setOpenModal, selectedUser } = useContext(UsersContext);
  const user = selectedUser;

  if (!openModal || !selectedUser) return null;

  return (
    <div
      onClick={() => setOpenModal(false)}
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/50"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative w-[90%] md:w-[70%] lg:w-[40%] p-6 rounded shadow-lg bg-[var(--bg-bg)] text-[var(--text-text)]"
      >
        <button
          className="absolute top-2 right-4 text-2xl font-bold text-red-500 cursor-pointer"
          onClick={() => setOpenModal(false)}
        >
          <IoCloseCircle color="red" size="40" />
        </button>
        <div className="flex flex-col items-center space-y-4">
          <img
            src={user?.image}
            alt="User Image"
            className="h-40 w-40 rounded-full"
          />
          <h2 className="text-xl font-semibold">{selectedUser.name}</h2>
          <p>
            <strong>Cell:</strong> {selectedUser.cell}
          </p>
          <p>
            <strong>Email:</strong> {selectedUser.email}
          </p>
          <p>
            <strong>Location:</strong> {selectedUser.address.street},{" "}
            {selectedUser.address.city}, {selectedUser.address.country}
          </p>
          <p>
            <strong>Gender:</strong> {selectedUser.gender}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;
