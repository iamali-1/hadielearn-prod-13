import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return <Link href={'/'}><Image height={50} width={150} src="/images/primary.svg" alt="logo" /></Link>;
};

export default Logo;
