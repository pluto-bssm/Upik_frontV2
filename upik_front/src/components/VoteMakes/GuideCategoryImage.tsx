import Image from "next/image";
import { Domitory, MakeSchool, Humor } from "@/app/Library/Images";

export default function GuideCategoryImage({ category }: { category: string }) {
  if (category === "학교생활") {
    return <Image src={MakeSchool} alt="MakeSchool" width={100} height={100} />;
  }
  if (category === "기숙사") {
    return <Image src={Domitory} alt="Domitory" width={100} height={100} />;
  }
  if (category === "유머") {
    return <Image src={Humor} alt="Humor" width={100} height={100} />;
  }
  return null;
}