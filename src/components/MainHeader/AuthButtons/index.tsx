import Typography from "@/components/UI/Typography";

const AuthButtons = () => {
  return (
    <>
      <button className="flex-1 btn btn-outline btn-secondary">
        <Typography
          variant="body1"
          fontWeight="semibold"
          type="span"
          className="text-nowrap"
        >
          Giriş Yap
        </Typography>
      </button>
      <button className="flex-1 btn  btn-secondary">
        <Typography
          variant="body1"
          fontWeight="semibold"
          type="span"
          className="text-brand-primary-600 text-nowrap"
        >
          Kayıt Ol
        </Typography>
      </button>
    </>
  );
};

export default AuthButtons;
