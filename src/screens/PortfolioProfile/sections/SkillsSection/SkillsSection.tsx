import { FigmaIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Define skills data for easy mapping
const skillsData = [
  {
    id: 1,
    name: "Product Design",
    icon: "/image-772.png",
    isImage: true,
  },
  {
    id: 2,
    name: "Frontend",
    icon: "/ri-javascript-fill.svg",
    isImage: true,
  },
  {
    id: 3,
    name: "Ux Research",
    icon: "/group-1.png",
    isImage: true,
    iconClass: "absolute w-[50px] h-[50px] top-[3px] left-[3px]",
  },
  {
    id: 4,
    name: "Figma",
    icon: "/logos-figma.svg",
    isImage: true,
    iconClass: "w-[37.33px] h-14",
  },
  {
    id: 5,
    name: "Adobe Xd",
    icon: "/vector.svg",
    isImage: true,
    iconClass: "w-[57.44px] h-14",
  },
  {
    id: 6,
    name: "Problem Solving",
    icon: "/image-775.png",
    isImage: true,
  },
  {
    id: 7,
    name: "Visual Design",
    icon: "/image-777.png",
    isImage: true,
  },
  {
    id: 8,
    name: "Wireframing",
    icon: "/image-773.png",
    isImage: true,
  },
  {
    id: 9,
    name: "Information Architecture",
    icon: "/image-774.png",
    isImage: true,
  },
  {
    id: 10,
    name: "Team Work",
    icon: "/image-776.png",
    isImage: true,
  },
];

export const SkillsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center px-20 py-[60px]">
      <div className="flex-col items-start gap-5 flex w-full max-w-[1280px] px-8">
        <header className="flex items-center justify-center gap-4 py-5 w-full">
          <h2 className="font-displaytext-regular font-[number:var(--displaytext-regular-font-weight)] text-primaryblack text-[length:var(--displaytext-regular-font-size)] tracking-[var(--displaytext-regular-letter-spacing)] leading-[var(--displaytext-regular-line-height)] whitespace-nowrap [font-style:var(--displaytext-regular-font-style)]">
            My
          </h2>
          <h2 className="font-displaytext-extra-bold font-[number:var(--displaytext-extra-bold-font-weight)] text-primaryblack text-[length:var(--displaytext-extra-bold-font-size)] tracking-[var(--displaytext-extra-bold-letter-spacing)] leading-[var(--displaytext-extra-bold-line-height)] whitespace-nowrap [font-style:var(--displaytext-extra-bold-font-style)]">
            Skills
          </h2>
        </header>

        <div className="flex-col items-center py-5 flex w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full">
            {skillsData.map((skill) => (
              <Card
                key={skill.id}
                className="flex flex-col w-full h-[186px] items-center justify-center gap-8 p-6 bg-primarywhite rounded border-2 border-solid border-black"
              >
                <CardContent className="flex flex-col items-center justify-center gap-8 p-0">
                  {skill.isImage ? (
                    skill.id === 3 ? (
                      <div className="relative w-14 h-14">
                        <img
                          className={
                            skill.iconClass || "w-14 h-14 object-cover"
                          }
                          alt={skill.name}
                          src={skill.icon}
                        />
                      </div>
                    ) : (
                      <img
                        className={skill.iconClass || "w-14 h-14 object-cover"}
                        alt={skill.name}
                        src={skill.icon}
                      />
                    )
                  ) : (
                    <FigmaIcon className="w-14 h-14" />
                  )}
                  <h3 className="font-heading-h5-bold font-[number:var(--heading-h5-bold-font-weight)] text-primaryblack text-[length:var(--heading-h5-bold-font-size)] text-center tracking-[var(--heading-h5-bold-letter-spacing)] leading-[var(--heading-h5-bold-line-height)] [font-style:var(--heading-h5-bold-font-style)]">
                    {skill.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
