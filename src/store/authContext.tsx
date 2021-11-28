export {};
// import React, { useReducer } from "react";
// import jwtDecode, { JwtPayload } from 'jwt-decode';
// import { setApiToken } from "../lib/sessionStorage";

// export const LOGIN = "LOGIN";
// export const LOGOUT = "LOGOUT";

// export interface AuthDefinition {
//   isLoggedIn: boolean;
//   apiToken: string;
//   userRoles: string[];
// }

// const authInitState: AuthDefinition = {
//   isLoggedIn: false,
//   apiToken: "",
//   userRoles: Array<string>(),
// };

// export interface AuthPayload {
//   isLoggedIn: boolean,
//   apiToken  : string,
//   userRoles : string[],
// }
// type AuthAction = 
// { type: "LOGOUT" } |
// { type: "LOGIN"; payload: AuthPayload };

// export const authReducer = (state: any, action: AuthAction) => {
//   switch (action.type) {
//     case LOGIN:
//       let decodedToken = jwtDecode<JwtPayload>(action.payload.apiToken);
//       console.log('decodedToken', decodedToken);

//       var obj:AuthPayload = {
//         isLoggedIn: true,
//         apiToken  : action.payload.apiToken, 
//         userRoles : action.payload.userRoles,
//       };
//       setApiToken(JSON.stringify(obj));
//       return {...obj};

//     case LOGOUT:
//       // eslint-disable-next-line    
//       var obj:AuthPayload = {
//         isLoggedIn: false,
//         apiToken  : '',
//         userRoles : Array<string>(),
//       };
//       setApiToken(JSON.stringify(obj));
//       return {...obj};

//     default:
//       return state;
//   }
// };




// export const AuthContext = React.createContext<{
//   state: AuthDefinition;
//   dispatch: React.Dispatch<any>;
// }>({ state: authInitState, dispatch: () => null });

// const AuthProvider: React.FC = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, authInitState);
//   return (
//     <AuthContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// export default AuthProvider;
