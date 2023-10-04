import React from "react";
import { ironOptions } from "../lib/ironOptions";
import { withIronSessionSsr } from "iron-session/next";

export const AuthContext = React.createContext({});

export const getUserFromSession = withIronSessionSsr(async ({ req }) => {

  if (req.session.user === undefined) {
    return null;
  } else {
    const user = req.session.user;
    return user;
  }
}, ironOptions);