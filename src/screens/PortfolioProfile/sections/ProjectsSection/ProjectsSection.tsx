import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Project data for mapping
const projects = [
  {
    id: "01",
    title: "Residence",
    description:
      "Residence is a student-focused digital housing platform built to solve one of the biggest challenges in Nigeria's academic ecosystem — finding safe, affordable, and accessible hostel accommodation. By eliminating the need for unregulated agents and introducing a verified, tech-enabled booking system, Residence empowers students to book hostels with ease and landlords to manage their properties seamlessly. This case study outlines the user experience process behind building a platform that brings transparency and trust to student housing in Nigeria.",
    image: "/rectangle.png",
    imagePosition: "left",
  },
  {
    id: "02",
    title: "Nasfat Official Mobile App",
    description:
      "The NASFAT Mobile App is your all-in-one platform for connecting with the NASFAT community. Designed to enhance your spiritual journey, the app offers services such as membership management, donations, counseling, events management, personal safety support, and access to a wide range of Islamic content. Stay updated with community events, contribute to charitable causes, and engage with the marketplace—all from the convenience of your mobile device. Join NASFAT Mobile today and strengthen your connection with faith and community.",
    imagePosition: "right",
    multipleImages: [
      "/rectangle-1.png",
      "/rectangle-2.png",
      "/rectangle-3.png",
      "/rectangle-4.png",
      "/rectangle-5.png",
      "/rectangle-6.png",
      "/rectangle-7.png",
      "/rectangle-8.png",
    ],
  },
  {
    id: "03",
    title: "Nile Mssn Website",
    description:
      "The Nile MSSN Website serves as the official online platform for the Islamic Mosque Group MSSN, providing visitors with essential information about the school's mission, programs, and community. The site offers a user-friendly interface where students, parents, and community members can explore various sections such as admissions, academic offerings, extracurricular activities, and religious programs. Visitors can also access resources such as the school's calendar, event summaries, and updates on important school activities. The website includes dedicated sections for online registration, book downloads for registered students, and a Hijrah calendar, ensuring a comprehensive digital experience that aligns with the school's values of combining education with Islamic principles",
    image: "/rectangle-9.png",
    imagePosition: "left",
  },
];

export const ProjectsSection = (): JSX.Element => {
  return (
    <section className="bg-primaryblack py-[60px] px-5 md:px-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <header className="flex items-center gap-4 py-5">
          <h2 className="font-displaytext-regular text-primarywhite tracking-[var(--displaytext-regular-letter-spacing)] leading-[var(--displaytext-regular-line-height)] text-[length:var(--displaytext-regular-font-size)]">
            My
          </h2>
          <h2 className="font-displaytext-extra-bold text-primarywhite tracking-[var(--displaytext-extra-bold-letter-spacing)] leading-[var(--displaytext-extra-bold-line-height)] text-[length:var(--displaytext-extra-bold-font-size)]">
            Projects
          </h2>
        </header>

        {projects.map((project, index) => (
          <Card key={project.id} className="bg-transparent border-none py-5">
            <CardContent className="p-0">
              <div
                className={`flex flex-col ${project.imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"} gap-10 items-center`}
              >
                {project.imagePosition === "left" ? (
                  <div className="w-full md:w-[594px] h-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover"
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
                            className="w-full h-[250px] object-cover"
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
                      View More
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
