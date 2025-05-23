import { useContext } from "react";
import { User } from "../types/User";
import UIContext from "../state-management/context/uiContext";

const UserCard = ({ user }: { user: User }) => {
  const { setOpenModal, setSelectedUser } = useContext(UIContext);

  return (
    <div
      onClick={() => {
        setOpenModal(true);
        setSelectedUser(user);
      }}
      className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 p-4 border-b-1 shadow-sm bg-white items-center text-text place-items-center md:place-items-start md:gap-y-2 md:gap-x-4 break-all text-center md:text-start mb-5 md:mb-0 hover:bg-[var(--btn-primary)] hover:cursor-pointer transition-colors"
    >
      {/* Mobile img and Tablet/Desktop Img/Name */}
      <div className="col-span-2 row-start-1 md:col-span-1 md:row-auto flex items-center space-x-4">
        <img
          src={user.image}
          alt={user.name}
          className="w-20 h-20 md:w-12 md:h-12 rounded-full"
        />
        <span className="hidden md:inline font-medium">{user.name}</span>
      </div>

      {/* Mobile name and cell */}
      <div className="col-span-2 row-start-2 md:col-span-1 md:row-auto md:hidden">
        <p className="font-medium">{user.name}</p>
        <p>{user.cell}</p>
      </div>

      {/* Tablet/Desktop Cell */}
      <div className="hidden h-full md:flex md:items-center md:justify-center col-span-2 row-start-3 md:col-span-1 md:row-auto">
        <p>{user.cell}</p>
      </div>

      {/* Email all */}
      <div className="h-full col-span-2 row-start-4 md:flex md:items-center md:col-span-1 md:row-auto">
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
