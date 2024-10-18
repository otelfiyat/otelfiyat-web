import AuthButtons from "../AuthButtons";

const SidebarSubHeader = () => {
  //TODO: Implement user authentication and show different components based on user authentication status

  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <>
          <hr className="text-brand-primary-100" />
          <p className="text-brand-primary-700 font-semibold size-title2 ms-4">
            Müşteri Adı
          </p>
        </>
      ) : (
        <div className="flex flex-col gap-3 mt-2">
          <p className="text-brand-neutral-900 font-medium size-body1">
            Üyelere özel fiyatları kaçırmayın!
          </p>

          <div className="flex gap-2">
            <AuthButtons />
          </div>
        </div>
      )}
      <hr className="text-brand-primary-100" />
    </>
  );
};

export default SidebarSubHeader;
