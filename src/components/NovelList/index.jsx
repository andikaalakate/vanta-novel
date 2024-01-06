import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

const NovelList = () => {
  return (
    <div className="animate__animated animate__fadeInUp animate__slow mini:grid-cols-2 mini:gap-6 hmin:grid-cols-2 mx-auto grid p-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default NovelList;
