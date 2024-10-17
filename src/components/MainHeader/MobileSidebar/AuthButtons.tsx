import Typography from "@/components/UI/Typography";

const AuthButtons = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <Typography
          variant="body1"
          fontWeight="medium"
          type="p"
          className="text-brand-neutral-900"
        >
          Üyelere özel fiyatları kaçırmayın!
        </Typography>
        <div className="flex gap-2">
          <button className=" flex-1 btn btn-outline btn-secondary">
            <Typography
              variant="body1"
              fontWeight="medium"
              type="span"
              className="text-brand-secondary-500"
            >
              Giriş Yap
            </Typography>
          </button>
          <button className="flex-1 btn  btn-secondary">
            <Typography
              variant="body1"
              fontWeight="medium"
              type="span"
              className="text-brand-primary-600"
            >
              Kayıt Ol
            </Typography>
          </button>
        </div>
      </div>
      <hr className="text-brand-primary-100" />
    </>
  );
};

export default AuthButtons;
