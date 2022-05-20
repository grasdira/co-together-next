import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // todo 儲存必要的個人資訊 user.displayName
        // todo 紀錄登入狀態，甚麼時候需重新登入?

        console.log(result, credential);
        // localStorage.setItem("isAuth", true);
        // setIsAuth(true);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.error(error, credential);
        // ...
      });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Co.together | Sign in</title>
        <meta name="description" content="給小團隊的任務管理 Web App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button
          className="bg-accent-500 p-2 hover:bg-accent-600 login-with-google-btn mb-3"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

// <form onSubmit={validateLogin()}>
//           <label htmlFor="email">Email:</label>
//           <input type="email" name="email" id="email" />

//           <label htmlFor="password">Password:</label>
//           <input type="password" name="password" id="password" />

//           <button type="submit">Submit</button>
//         </form>
