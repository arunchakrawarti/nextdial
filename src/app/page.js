import Mainhome from "@/components/pages/report/Index";
import MainLayout from "@/components/templates/MainLayout";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
   <div>
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>

      <Mainhome/>
      </Suspense>
    </MainLayout>
   </div>
  );
}
