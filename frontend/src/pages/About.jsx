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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            cumque ut assumenda. Ullam dicta sequi quidem incidunt eveniet at
            dolore, sit repellendus aperiam perferendis recusandae possimus
            adipisci iusto, exercitationem velit voluptate illum, porro voluptas
            facilis ducimus sunt error aspernatur blanditiis odio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            commodi ipsum odit ullam optio deleniti iure id, animi illum eveniet
            vitae praesentium tempora, eaque corrupti amet incidunt sequi, ipsam
            molestias quae. Quas distinctio suscipit nobis sunt.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            magnam, natus veritatis laudantium aut tenetur tempore, eius aperiam
            excepturi ea necessitatibus voluptates, modi id in eum dolorum
            commodi voluptas facere.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est,
            sed consequatur vitae perspiciatis impedit magnam aliquam earum
            aspernatur animi totam rerum ex hic facere alias possimus assumenda
            temporibus veniam magni perferendis neque iure suscipit.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est,
            sed consequatur vitae perspiciatis impedit magnam aliquam earum
            aspernatur animi totam rerum ex hic facere alias possimus assumenda
            temporibus veniam magni perferendis neque iure suscipit.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est,
            sed consequatur vitae perspiciatis impedit magnam aliquam earum
            aspernatur animi totam rerum ex hic facere alias possimus assumenda
            temporibus veniam magni perferendis neque iure suscipit.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
