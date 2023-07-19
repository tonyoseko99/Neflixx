"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./button";

export default function Logo() {
  const [width, setWidth] = useState(0);
  const [showButton, setShowButton] = useState(false);

  //   change nav button on resize
  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 760) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  //   update width of the logo
  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);
  return (
    <>
      <Link href="/" style={{ display: showButton ? "none" : "block" }}>
        <Image
          src="/../public/studio.png"
          alt="logo"
          width={width < 1024 ? 120 : 150}
          height={width < 1024 ? 120 : 150}
          className="relative"
        />
        <div style={{ display: showButton ? "block" : "none" }}>
          <Button />
        </div>
      </Link>
    </>
  );
}
