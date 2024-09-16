import Informatin from "@/components/InformationSection";
import RouterSection from "@/components/RouterSection";
import StayEmailLayout from "@/components/SubscribeEmail";
import BlogCards from "./blog-cards/page";

export default function Home() {
  return (
    <>
      <div>
        <RouterSection/>
        <BlogCards/>
        <StayEmailLayout
         heading="Subscribe Newsletter"
         subheading="Sign up to our Newsletter and get the discount code."
         buttonText="SUBCRIBE"
         />
      <Informatin/>
      </div>
      </>
  );
}
