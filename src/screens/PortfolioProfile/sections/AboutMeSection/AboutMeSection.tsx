import { Card, CardContent } from "../../../../components/ui/card";
import { Element } from "react-scroll";

export const AboutMeSection = (): JSX.Element => {
  const aboutMeText = `As a passionate UX Designer at Velox Technology, I bring a unique blend of design and technical skills to create user-centered digital experiences. My journey in the tech world began during my SIWES internship at Aiteo Energy Resources, where I served as an IT Support Technician, gaining hands-on experience in solving technical challenges.

My expertise lies in UX design, user research, and UI design, with proficiency in industry-standard tools like Figma, Adobe XD, and Sketch. Additionally, I possess a strong foundation in programming with Python and have a solid understanding of front-end development, including HTML, CSS, JavaScript, and Bootstrap.

Driven by a desire to continuously learn and grow, I have taken on freelance projects such as the New Little Angels website, NASFAT app, and the Muslim Student Site website for Nile University. These projects, currently in development, reflect my commitment to delivering impactful digital solutions.As I approach the completion of my final year in Software Engineering at Nile University, my career goals are clear: to build a large network community, establish a stable career in technology, and ultimately launch a tech company that will be recognized globally.`;

  return (
    <section className="flex items-center justify-center py-[60px] px-10 md:px-20">
      <Element name="about">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1280px] w-full">
          <div className="w-full md:w-auto">
            <img
              className="w-full md:w-[469.64px] h-auto md:h-[572px] object-cover rounded-md"
              alt="Profile image"
              src="/timi_hero_img.png"
            />
          </div>

          <Card className="border-none shadow-none bg-transparent w-full md:max-w-[610px]">
            <CardContent className="p-0">
              <div className="flex items-start gap-4 py-5 mb-5">
                <h2 className="font-displaytext-regular text-primaryblack text-[length:var(--displaytext-regular-font-size)] tracking-[var(--displaytext-regular-letter-spacing)] leading-[var(--displaytext-regular-line-height)]">
                  About
                </h2>
                <h2 className="font-displaytext-extra-bold text-primaryblack text-[length:var(--displaytext-extra-bold-font-size)] tracking-[var(--displaytext-extra-bold-letter-spacing)] leading-[var(--displaytext-extra-bold-line-height)]">
                  Me
                </h2>
              </div>

              <div className="font-paragraph-p2-regular text-black text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)]">
                {aboutMeText.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Element>
    </section>
  );
};
