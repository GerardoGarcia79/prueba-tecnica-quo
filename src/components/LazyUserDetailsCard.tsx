import { lazy, Suspense, useContext } from "react";
import UsersContext from "../state-management/context/usersContext";
import { ClipLoader } from "react-spinners";

const UserDetailsCard = lazy(() => import("./UserDetailsCard"));

const LazyUserDetailsCard = () => {
  const { openModal } = useContext(UsersContext);

  if (!openModal) return null;

  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <ClipLoader color="white" size="40px" />
        </div>
      }
    >
      <UserDetailsCard />
    </Suspense>
  );
};

export default LazyUserDetailsCard;
