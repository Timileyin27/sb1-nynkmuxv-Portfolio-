import { FigmaIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Element } from "react-scroll";

// Define skills data for easy mapping
const skillsData = [
  {
    id: 1,
    name: "Product Design",
    icon: "/prod-design-logo.png",
    isImage: true,
  },
  {
    id: 2,
    name: "Frontend",
    icon: "/js-logo.png",
    isImage: true,
  },
  {
    id: 3,
    name: "Ux Research",
    icon: "/ux-research-logo.png",
    isImage: true,
    iconClass:
      "max-sm:w-10 max-sm:h-10  absolute w-[50px] h-[50px] top-[3px] left-[3px]",
  },
  {
    id: 4,
    name: "Figma",
    icon: "/figma-logo.png",
    isImage: true,
    iconClass: "max-sm:w-10 max-sm:h-10  w-[37.33px] h-14",
  },
  {
    id: 5,
    name: "Adobe Xd",
    icon: "/xd-logo.png",
    isImage: true,
    iconClass: "max-sm:w-10 max-sm:h-10 w-[57.44px] h-14",
  },
  {
    id: 6,
    name: "Problem Solving",
    icon: "/prob-solving-logo.png",
    isImage: true,
  },
  {
    id: 7,
    name: "Visual Design",
    icon: "/visual-design-logo.png",
    isImage: true,
  },
  {
    id: 8,
    name: "Wireframing",
    icon: "/wireframing-logo.png",
    isImage: true,
  },
  {
    id: 9,
    name: "Information Architecture",
    icon: "/info-archi-logo.png",
    isImage: true,
  },
  {
    id: 10,
    name: "Team Work",
    icon: "/teamwork-logo.png",
    isImage: true,
  },
];

export const SkillsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center py-[60px]">
      <Element name="skills">
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
            <div className="grid grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full">
              {skillsData.map((skill) => (
                <Card
                  key={skill.id}
                  className="flex flex-col w-full  max-sm:h-[165px] h-[186px] items-center justify-center gap-8 p-6 bg-primarywhite rounded border-2 border-solid border-black"
                >
                  <CardContent className="flex flex-col items-center justify-center gap-8 p-0">
                    {skill.isImage ? (
                      skill.id === 3 ? (
                        <div className="relative max-sm:w-10 max-sm:h-10 w-14 h-14">
                          <img
                            className={
                              skill.iconClass ||
                              "max-sm:w-10 max-sm:h-10 w-14 h-14 object-cover"
                            }
                            alt={skill.name}
                            src={skill.icon}
                          />
                        </div>
                      ) : (
                        <img
                          className={
                            skill.iconClass ||
                            "max-sm:w-10 max-sm:h-10 w-14 h-14 object-cover"
                          }
                          alt={skill.name}
                          src={skill.icon}
                        />
                      )
                    ) : (
                      <FigmaIcon className="max-sm:w-10 max-sm:h-10 w-14 h-14" />
                    )}
                    <h3 className="font-heading-h5-bold max-sm:text-[18px] font-[number:var(--heading-h5-bold-font-weight)] text-primaryblack text-[length:var(--heading-h5-bold-font-size)] text-center tracking-[var(--heading-h5-bold-letter-spacing)] leading-[var(--heading-h5-bold-line-height)] [font-style:var(--heading-h5-bold-font-style)]">
                      {skill.name}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};
