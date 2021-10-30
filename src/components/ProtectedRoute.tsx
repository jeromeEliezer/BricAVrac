import { RouteProps } from "react-router";
import {BrowserRouter as  Route, Redirect} from 'react-router-dom';


interface Props extends RouteProps {
    isAuth: Boolean;
}

const ProtectedRoute = ({isAuth, ...routeProps }: Props) => {
    if(isAuth) {
        return <Route {...routeProps} />
    }
    return <Redirect to='/login' />;
};

export default ProtectedRoute