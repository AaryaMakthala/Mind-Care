"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css"; // Import the CSS

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Get Help", path: "/help" },
    { name: "Get Inspired", path: "/inspired" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <Link href="/" className="logo-container">
        <img
          src="https://img.freepik.com/free-vector/green-heart-check-mark-combined_78370-7363.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721112000"
          alt="Logo"
          className="logo"
        />
        <span className="logo-text">MindCare</span>
      </Link>

      {/* Hamburger Menu Button (Mobile) */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      {/* Right: Menu */}
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`menu-item ${pathname === item.path ? "active" : ""}`}
          >
            <Link href={item.path} className="menu-link" onClick={handleLinkClick}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}