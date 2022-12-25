import { useState } from "react";
import { supabase } from "../supabase";

enum State {
  EnterEmail,
  Loading,
  EnterOTP,
}

export default function Auth() {
  const [state, setState] = useState(State.EnterEmail);
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");

  const handleRequestPassword = async (e: any) => {
    e.preventDefault();

    try {
      setState(State.Loading);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      setState(State.EnterOTP);
    } catch (error: any) {
      alert(error.error_description || error.message);
      setState(State.EnterEmail);
    }
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      setState(State.Loading);
      const { error } = await supabase.auth.verifyOtp({
        email: email,
        token: otp,
        type: "magiclink",
      });
      if (error) throw error;
    } catch (error: any) {
      alert(error.error_description || error.message);
      setState(State.EnterEmail);
    }
  };

  return (
    <div className="row flex-center flex">
      <div className="col-6 form-widget" aria-live="polite">
        <h1 className="header">Word Counter</h1>
        <p className="description">Sign in via magic link with your email below</p>
        {state === State.Loading ? (
          "Sending one-time password..."
        ) : state === State.EnterEmail ? (
          <form onSubmit={handleRequestPassword}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="button block" aria-live="polite">
              Send one-time code
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <label htmlFor="otp">Password</label>
            <input
              id="otp"
              className="inputField"
              type="text"
              placeholder="Password"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
            <button className="button block" aria-live="polite">
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
