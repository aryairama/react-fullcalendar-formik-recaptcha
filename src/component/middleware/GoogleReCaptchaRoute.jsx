import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
const GoogleReCaptchaRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <GoogleReCaptchaProvider language="id" reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY_V3}>
      <Component {...rest} location={location} navigate={navigate} />
    </GoogleReCaptchaProvider>
  );
};

export default GoogleReCaptchaRoute;
