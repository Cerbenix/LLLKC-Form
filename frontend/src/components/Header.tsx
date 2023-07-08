import React from "react";
import Link from "./Link";

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    onLogout();
    window.location.href = '/'
  };

  return (
    <header className="flex flex-row justify-between items-center mx-10 my-2 border-b-2">
      <h1 className="text-7xl font-extralight">LLKC Form</h1>
      <nav className="">
        <Link href="/">Home</Link>
        {isAuthenticated && <Link href="/user/table">User Table</Link>}
        {!isAuthenticated && <Link href="/user/register">Register</Link>}
        {!isAuthenticated && <Link href="/user/login">Login</Link>}
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
};

export default Header;
