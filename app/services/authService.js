import { useAuth } from '../providers/authContext';
import { useAxios } from '../providers/axiosContext';


export const AuthService = () => {

  const { mainAxios } = useAxios();
  const { signIn, signOut } = useAuth();

  function login(user) {
    return new Promise((resolve, reject) => {

      // TODO: remove mock login
      let data = {
        user: {
          name: 'John',
          surname: 'Smith',
          email: 'jsmith@gmail.com',
        },
        token: 'sample_token'
      }
      signIn(data);
      resolve(data);

      /*
      let body = {
        mail: user.email,
        password: user.password
      }
      mainAxios.post(`/auth`, body)
        .then(res => {
          signIn(res.data.data);
          resolve(res.data.data);
        }).catch(err => {
          reject(err);
        });
        */
    })
  }

  function register(user) {
    return new Promise((resolve, reject) => {
      let body = {
        name: user.name,
        mail: user.email,
        password: user.password
      }
      mainAxios.post(`/users`, body)
        .then(res => {
          signIn(res.data.data);
          resolve(res.data.data);
        }).catch(err => {
          reject(err);
        });
    })
  }

  function sendResetPasswordCode(mail) {
    return new Promise((resolve, reject) => {
      mainAxios.put('/auth/recoveryPassword', { mail: mail })
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

  function resetPassword(userInfo) {
    return new Promise((resolve, reject) => {
      let body = {
        mail: userInfo.email,
        newPassword: userInfo.password,
        resetToken: userInfo.code
      }
      mainAxios.put(`/auth/createNewPassword`, body)
        .then(res => {
          resolve(res.data.data);
        }).catch(err => {
          reject(err);
        });
    });
  }

  function logout() {
    signOut();
  }

  return {
    login,
    register,
    sendResetPasswordCode,
    resetPassword,
    logout
  }
}