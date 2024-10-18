import Typography from "@/components/UI/Typography";

const AuthButtons = () => {
  return (
    <>
      <button className="flex-1 btn btn-outline btn-secondary max-h-10 min-h-10">
        <Typography
          variant="span"
          fs={{
            mobile: "body1",
            tablet: "body1",
            desktop: "body1",
          }}
          fw="semibold"
          className="text-nowrap"
        >
          Giriş Yap
        </Typography>
      </button>
      <button className="flex-1 btn btn-secondary max-h-10 min-h-10">
        <Typography
          variant="span"
          fs={{
            mobile: "body1",
            tablet: "body1",
            desktop: "body1",
          }}
          fw="semibold"
          className="text-brand-primary-600 text-nowrap"
        >
          Kayıt Ol
        </Typography>
      </button>
    </>
  );
};

export default AuthButtons;
