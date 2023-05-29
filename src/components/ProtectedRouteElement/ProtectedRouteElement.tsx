import { useSelector } from "react-redux";
import { postProfileEmail, postProfileName } from "../../services/selectors/profile";
import { SIGN_IN } from "../../constants/constants";
import { Navigate, useLocation } from "react-router-dom";
import { ReactElement } from "react";

type ProtectedRouteElementType = {
  onlyUnAuth?: boolean,
  component: ReactElement
};

export default function ProtectedRouteElement({ onlyUnAuth = false, component }: ProtectedRouteElementType) {
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