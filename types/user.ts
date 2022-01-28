import { ReactNode } from "react";

export type User = {
  id: string | undefined;
  email: string | undefined;
  children?: ReactNode;
};
