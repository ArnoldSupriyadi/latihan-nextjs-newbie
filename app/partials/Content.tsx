import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Content: FC<Props> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default Content;
