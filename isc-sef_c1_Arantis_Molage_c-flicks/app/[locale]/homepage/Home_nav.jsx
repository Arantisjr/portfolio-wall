"use client";
import Button from "../components/Button";
import React, { useEffect, useState } from "react";
import "../styles/NavBar.scss";
import Link from "next/link";
import Language from "../components/LanguageSwitcher";
import { useParams } from "next/navigation";
import { FaCircleUser } from "react-icons/fa6";

const Home_nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change 50 to your preferred scroll threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    const { locale } = useParams();
  // alert(locale);

  return (
    <>
      <div className={`NavBarMainContainer ${scrolled ? "scrolled" : ""}`}>
        <p className="logo_name"> C-FLICKS </p>
        <div className="Nav_left_section">
          <Language currentLocale={locale} />

          <Link href='/dashboard'>
          <FaCircleUser className="user-icon" />
          </Link>
          {/* <Link href="/">
            <Button text="Sign out" />{" "}
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Home_nav;
