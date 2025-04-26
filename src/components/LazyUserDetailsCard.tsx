import { lazy, Suspense, useContext } from "react";
import { ClipLoader } from "react-spinners";
import UIContext from "../state-management/context/uiContext";

const UserDetailsCard = lazy(() => import("./UserDetailsCard"));

const LazyUserDetailsCard = () => {
  const { openModal } = useContext(UIContext);

  if (!openModal) return null;

  return (
    // Suspense is used to show a spinner while loading the UserDetailsCard lazily
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
