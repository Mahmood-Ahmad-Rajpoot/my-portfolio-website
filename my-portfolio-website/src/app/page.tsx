import Link from "next/link";
    
 import Homepage from "@/Components/HomeComponent/Home";
export default function Home() {
 function abb(){
   console.log(mb);
   console.log(ab);
   var mb = 5;
  
 }
 abb();
  return (
    <>
        <Homepage/>
    </>
  );
}
