"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./button";

export default function Logo() {
  const [width, setWidth] = useState(0);

  //   update width of the logo
  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);
  return <div>Logo</div>;
}
