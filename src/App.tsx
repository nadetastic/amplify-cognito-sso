// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { fetchAuthSession, signOut } from "aws-amplify/auth";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App() {
  // const [s, sets] = useState("");
  window.onfocus = async () => {
    try {
      console.log("will try to get current session");
      const session = await fetchAuthSession({ forceRefresh: true });
      console.log("got current session", session);
    } catch (error) {
      console.log("some error", error);
      await history.pushState("", "", "/signIn");
    }
  };
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Authenticator>
          {({ user }) => (
            <main>
              <h1>Hello {user?.username}</h1>
              <button onClick={async () => await signOut()}>Sign out</button>
            </main>
          )}
        </Authenticator>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
