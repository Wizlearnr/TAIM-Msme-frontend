"use client";

import { ReactNode } from "react";
import { ProfileActionProvider } from "./_context/CreateEditProfileContext";

export default function Layout({ children }: { children: ReactNode }) {
  return <ProfileActionProvider>{children}</ProfileActionProvider>;
}
