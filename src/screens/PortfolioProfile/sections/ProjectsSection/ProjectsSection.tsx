import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Element } from "react-scroll";

// Project data for mapping
const projects = [
  {
    id: "01",
    title: "Residence",
    description:
      "Residence is a student-focused digital housing platform built to solve one of the biggest challenges in Nigeria's academic ecosystem — finding safe, affordable, and accessible hostel accommodation. By eliminating the need for unregulated agents and introducing a verified, tech-enabled booking system, Residence empowers students to book hostels with ease and landlords to manage their properties seamlessly. This case study outlines the user experience process behind building a platform that brings transparency and trust to student housing in Nigeria.",
    image: "/residence.png",
    imagePosition: "left",
    link: "https://www.behance.net/gallery/227442733/Residence",
  },
  {
    id: "02",
    title: "Nasfat Official Mobile App",
    description:
      "The NASFAT Mobile App is your all-in-one platform for connecting with the NASFAT community. Designed to enhance your spiritual journey, the app offers services such as membership management, donations, counseling, events management, personal safety support, and access to a wide range of Islamic content. Stay updated with community events, contribute to charitable causes, and engage with the marketplace—all from the convenience of your mobile device. Join NASFAT Mobile today and strengthen your connection with faith and community.",
    imagePosition: "right",
    multipleImages: [
      "/nasfat-1.png",
      "/nasfat-2.png",
      "/nasfat-3.png",
      "/nasfat-4.png",
      "/nasfat-5.png",
      "/nasfat-6.png",
      "/nasfat-7.png",
      "/nasfat-8.png",
    ],
    link: "https://www.behance.net/gallery/209029045/Nasfat-App",
  },
  {
    id: "03",
    title: "Nile Mssn Website",
    description:
      "The Nile MSSN Website serves as the official online platform for the Islamic Mosque Group MSSN, providing visitors with essential information about the school's mission, programs, and community. The site offers a user-friendly interface where students, parents, and community members can explore various sections such as admissions, academic offerings, extracurricular activities, and religious programs. Visitors can also access resources such as the school's calendar, event summaries, and updates on important school activities. The website includes dedicated sections for online registration, book downloads for registered students, and a Hijrah calendar, ensuring a comprehensive digital experience that aligns with the school's values of combining education with Islamic principles",
    image: "/nile-mssn-proj.png",
    imagePosition: "left",
    link: "https://www.behance.net/gallery/209030183/Nile-University-Mssn-Website",
  },
];

export const ProjectsSection = (): JSX.Element => {
  return (
    <section className="bg-primaryblack py-[60px] px-5 md:px-20">
      <Element name="project">
        <div className="max-w-[1280px] mx-auto px-4 max-sm:px-0 md:px-8">
          <header className="flex items-center gap-4 py-5">
            <h2 className="font-displaytext-regular text-primarywhite tracking-[var(--displaytext-regular-letter-spacing)] leading-[var(--displaytext-regular-line-height)] text-[length:var(--displaytext-regular-font-size)]">
              My
            </h2>
            <h2 className="font-displaytext-extra-bold text-primarywhite tracking-[var(--displaytext-extra-bold-letter-spacing)] leading-[var(--displaytext-extra-bold-line-height)] text-[length:var(--displaytext-extra-bold-font-size)]">
              Projects
            </h2>
          </header>

          {projects.map((project) => (
            <Card key={project.id} className="bg-transparent border-none py-5">
              <CardContent className="p-0">
                <div
                  className={`flex flex-col ${
                    project.imagePosition === "right"
                      ? "md:flex-row-reverse"
                      : "md:flex-row"
                  } gap-10 items-center`}
                >
                  {project.imagePosition === "left" ? (
                    <div className="w-full md:w-[594px] h-auto">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-square h-auto object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full md:w-[594px] h-[476px] flex items-center justify-end overflow-hidden">
                      <div className="relative w-full h-[460px]">
                        <div className="grid grid-cols-4 grid-rows-2 gap-1">
                          {project.multipleImages?.map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt={`${project.title} screenshot ${i + 1}`}
                              className="w-full h-[220px] object-cover"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-6 flex-1">
                    <div className="flex flex-col gap-5">
                      <span className="font-displaytext-extra-bold text-primarywhite tracking-[var(--displaytext-extra-bold-letter-spacing)] leading-[var(--displaytext-extra-bold-line-height)] text-[length:var(--displaytext-extra-bold-font-size)]">
                        {project.id}
                      </span>

                      <h3 className="font-heading-h2-bold text-primarywhite tracking-[var(--heading-h2-bold-letter-spacing)] leading-[var(--heading-h2-bold-line-height)] text-[length:var(--heading-h2-bold-font-size)]">
                        {project.title}
                      </h3>

                      <p className="font-paragraph-p2-regular text-white tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] text-[length:var(--paragraph-p2-regular-font-size)]">
                        {project.description}
                      </p>

                      <Button
                        variant="link"
                        className="p-0 h-auto font-bold text-primarywhite text-xl tracking-[-0.40px] leading-10 justify-start"
                      >
                        <a target="_blank" href={project.link}>
                          View More
                        </a>
                        <ArrowRightIcon className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Element>
    </section>
  );
};
