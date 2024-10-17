import AuthButtons from "../AuthButtons";
import ProfileDropdown from "../ProfileDropdown";

const UserActions = () => {
  //TODO: Implement user authentication and show different components based on user authentication status

  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <ProfileDropdown />
      ) : (
        <div className="hidden lg:flex lg:items-center lg:gap-4 lg:w-64">
          <AuthButtons />
        </div>
      )}
    </>
  );
};

export default UserActions;
