import { createContext, useContext } from "react";
const AuthContext=createContext({isAuthenticated:false,isLoadingAuth:false,isLoadingPublicSettings:false,authError:null,navigateToLogin:()=>{}});
export const AuthProvider=({children})=><AuthContext.Provider value={AuthContext._currentValue}>{children}</AuthContext.Provider>;
export const useAuth=()=>useContext(AuthContext);
