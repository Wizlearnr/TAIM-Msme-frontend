import { ReactNode } from "react";
import { ProfileActionProvider } from "./_context/CreateEditProfileContext";

export async function generateStaticParams() {
  return [{ action: "create" }, { action: "edit" }];
}

export default function Layout({ children }: { children: ReactNode }) {
  return <ProfileActionProvider>{children}</ProfileActionProvider>;
}
