import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Bazaar, we&apos;re passionate about bringing style, comfort, and
            quality to every member of your family. Specializing in clothing for
            men, women, and kids, we offer a diverse selection that caters to
            all tastes and occasions. Whether you&apos;re looking for casual
            everyday wear, sophisticated outfits, or cozy winter essentials, our
            collections are designed to meet the highest standards. With an eye
            on the latest trends and a commitment to exceptional quality, we aim
            to make fashion accessible and enjoyable for everyone.
          </p>
          <p>
            We take pride in offering a seamless shopping experience, from
            browsing our collections to receiving your order. Our team carefully
            curates each item, ensuring that it meets our quality standards and
            brings value to your wardrobe.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to inspire confidence and individuality through
            clothing that speaks to personal style while providing comfort and
            durability. We believe in empowering our customers with choices that
            reflect their unique personality and needs—whether it&apos;s
            versatile basics, elegant pieces, or warm winterwear. With a focus
            on quality craftsmanship and sustainable practices, we&apos;re
            dedicated to offering clothing that not only looks great but also
            stands the test of time. Join us in redefining style for every
            season, every occasion, and every member of the family.
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">
            Our commitment to quality assurance means that every piece we offer
            is crafted with attention to detail and durability. We conduct
            thorough checks to ensure our products meet high standards in
            comfort, fabric, and finish, guaranteeing a lasting addition to your
            wardrobe that you can trust and enjoy with every wear.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-600">
            We prioritize convenience at every step of your shopping experience.
            From easy navigation on our website to secure payment options and
            reliable delivery, we&apos;ve designed a process that&apos;s as
            effortless as it is enjoyable. Our goal is to make finding your
            favorite styles simple, fast, and stress-free, so you can focus on
            what matters—looking and feeling your best.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-600">
            Our dedication to exceptional customer service means we&apos;re here
            for you every step of the way. Whether you need help with sizing,
            order tracking, or product details, our friendly and knowledgeable
            team is ready to assist. We believe in building trust through
            prompt, personalized support, ensuring that your experience with us
            is as satisfying as the products you purchase.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
