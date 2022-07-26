import React, { useContext, useState, useEffect, useRef } from "react";
import Realm from "realm";
import realm from "../RealmApp";

/**
 * Cria um novo Context que vai ser servido aos filhos de AuthProvider
 */
const AuthContext = React.createContext(null);


/**
 * O AuthProvider é responsável por gerenciar os usuários e prover os valores de 
 * AuthContext para seus filhos. Qualquer elemento descendente de AuthProvider pode 
 * utilizar o hook useAuth() para acessar os valores do usuário autenticado.
 */

type Props = {
  children: React.ReactNode;
};

 export enum AuthState {
  None,
  Loading,
  LoginError,
  RegisterError,
}

const AuthProvider = ({ children }: Props) => {
  const [authState, setAuthState] = useState(AuthState.None);
  const [user, setUser] = useState(realm.currentUser);
  const realmRef = useRef(null);

  useEffect(() => {
    if (!user) {
      //console.warn("NO USER Logged In");
      return;
    }

    const config = {
      sync: {
        user,
        partitionValue: `user=${user.id}`,
      },
    };
    
    /**
     * Abre uma instância do Realm na partição do usuário logado a fim de 
     * recuperar apenas os links que o usuário logado adicionou.
     * (ao invés de recuperar todos os links de todos os usuários) 
     */
    Realm.open(config).then((userRealm) => {
      realmRef.current = userRealm;
    });

    return () => {
      // cleanup function
      const userRealm = realmRef.current;
      if (userRealm) {
        userRealm.close();
        realmRef.current = null;
      }
    };
  }, [user]);

  /**
   * A função signIn recebe um email e uma senha. Os dados são, então, repassados 
   * para o serviço de autenticação do próprio Realm. 
   * Para tanto devemos configurar o método de autenticação no nosso projeto Realm.
   * Documentação: https://docs.mongodb.com/realm/authentication/providers/
   */
  const signIn = async (email, password) => {
    setAuthState(AuthState.Loading);
    const credentials = Realm.Credentials.emailPassword(email, password);
    try {
      const newUser = await realm.logIn(credentials);
      setUser(newUser);
      setAuthState(AuthState.None);
    } catch (err) {
      console.log('Error logging in', err);
      setAuthState(AuthState.LoginError);
    }
  };

  /**
   * A função signUp recebe um email e uma senha. Os dados são, então, repassados 
   * para o serviço de registro de usuário do próprio Realm. 
   * Para tanto, devemos configurar o método de autenticação no nosso projeto Realm.
   * Documentação: https://docs.mongodb.com/realm/authentication/providers/
   */
  const signUp = async (email, password) => {
    setAuthState(AuthState.Loading);
    try {
      // Register the user...
      await realm.emailPasswordAuth.registerUser({ email, password });
      // ...then login with the newly created user
      const credentials = Realm.Credentials.emailPassword(email, password);
      const newUser = await realm.logIn(credentials);
      setUser(newUser);

      setAuthState(AuthState.None);
    } catch (err) {
      console.log('Error registering', e);
      setAuthState(AuthState.RegisterError);
    }
    
  };

  //A função signOut chama a função logOut para desautenticar o usuário atual.
  const signOut = () => {
    if (user == null) {
      console.warn("Se não está logado, não dá para deslogar");
      return;
    }
    user.logOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signUp, signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * O hook useAuth pode ser usado por componentes dentro de AuthProvider
 * para acessar os dados de autenticação do usuário.
 */
const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth == null) {
    throw new Error("useAuth() chamado fora do AuthProvider?");
  }
  return auth;
};

export { AuthProvider, useAuth };