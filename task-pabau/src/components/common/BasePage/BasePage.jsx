import { Header } from "../Header/Header";

export const BasePage = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
