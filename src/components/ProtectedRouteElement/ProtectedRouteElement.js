import { useSelector } from "react-redux";
// import { postProfileRefreshToken } from "../../services/selectors/profile";
// import { authChecked } from "../../services/selectors/checkAuth";
import { postProfileEmail, postProfileName } from "../../services/selectors/profile";
import { SIGN_IN } from "../../constants/constants";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRouteElement({ onlyUnAuth = false, component }) {
  // const accessToken = useSelector(postProfileRefreshToken);
  // const isAuthChecked = useSelector(authChecked);
  const profileEmail = useSelector(postProfileEmail);
  const profileName = useSelector(postProfileName);

  const location = useLocation();

  if (onlyUnAuth && profileEmail && profileName) {
    const { from } = location.state || { from: { pathname: '/'}}
    return <Navigate to={from} />
  }

  if (!onlyUnAuth && !profileEmail && !profileName) {
    return <Navigate to={SIGN_IN} state={{ from: location }} />
  }

  return component;
}