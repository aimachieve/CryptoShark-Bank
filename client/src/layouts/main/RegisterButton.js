// material
import CloseIcon from "@material-ui/icons/Close";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
} from "@material-ui/core";
import useAuth from "hooks/useAuth";
import Logo from "components/Logo";
import { RegisterForm } from "components/authentication/register";

export default function RegisterButton() {
  const { authModal, setAuthModal } = useAuth();

  const handleClickOpen = () => {
    setAuthModal("register");
  };
  const handleClose = () => {
    setAuthModal(null);
  };

  const open = Boolean(authModal === "register");

  return (
    <>
      <Button variant="outlined" sx={{ color: "#09d960", borderColor: "#09d960", bgcolor: 'white', "&:hover": {bgcolor: '#09d960', color: "white", borderColor: "#09d960"}}} onClick={handleClickOpen}>
        Create Account
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ px: 10, pb: 5 }}>
          <Logo sx={{ mx: "auto", width: '250px' }} />
          <Typography
            variant="h2"
            color="#09d960"
            sx={{
              fontWeight: 400,
              mb: 5,
              fontFamily: "Abril Fatface, cursive",
              textAlign: "center",
            }}
          >
            Let's Get Started
          </Typography>
          <RegisterForm />
          <Typography variant="subtitle1" align="center" sx={{ mt: 3 }}>
            Don’t have an account?&nbsp;
            <Button
              variant="outlined"
              size="large"
              sx={{ ml: 2, borderColor: "#09d960", color: "#09d960" }}
              onClick={() => setAuthModal("login")}
            >
              Login
            </Button>
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            align="center"
            color="grey.500"
            sx={{ px: 5, mt: 3 }}
          >
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="privacy-policy" color="black">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="terms-conditions" color="black">
              Terms and Conditions
            </a>{" "}
            apply
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}
