import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Define experience data for mapping
const experiences = [
  {
    title: "Product Designer at Residence",
    period: "Nov 2024 - Present",
    description:
      "During my SIWES program, I had the fantastic opportunity to dive into the world of UX design at Velox Technology Limited. Crafting seamless user experiences and innovative designs was not just a job but a passion. Grateful for the valuable lessons and growth this experience brought to my journey! \nSkills: Front-End Development · Product Design · Software Development · UIX · Ui ux · User Experience Design (UED) · User Interface Design · Web Development",
    highlighted: false,
  },
  {
    title: "Ux Designer at Velox Technology",
    period: "Jul 2024 - Oct 2024",
    description:
      "During my SIWES program, I had the fantastic opportunity to dive into the world of UX design at Velox Technology Limited. Crafting seamless user experiences and innovative designs was not just a job but a passion. Grateful for the valuable lessons and growth this experience brought to my journey! \nSkills: Front-End Development · Product Design · Software Development · UIX · Ui ux · User Experience Design (UED) · User Interface Design · Web Development",
    highlighted: true,
  },
  {
    title: "IT Support Technician at Aiteo Energy Resources",
    period: "Jul 2023 - Sep 2023",
    description:
      "During My Siwes program, I was able to add to my skills and gain a lot of knowledge for my supervisors. Knowledge like troubleshooting a computer hardware and software, Offering first aid to a computer and onsite first hand experience",
    highlighted: false,
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-primaryblack py-[60px] px-20">
      <div className="flex flex-col items-center justify-center gap-5 max-w-[1280px] mx-auto px-8">
        <header className="flex items-center justify-center gap-4 py-5 w-full">
          <h2 className="text-primarywhite font-displaytext-regular text-[length:var(--displaytext-regular-font-size)] tracking-[var(--displaytext-regular-letter-spacing)] leading-[var(--displaytext-regular-line-height)] [font-style:var(--displaytext-regular-font-style)]">
            My
          </h2>
          <h2 className="text-primarywhite font-displaytext-extra-bold text-[length:var(--displaytext-extra-bold-font-size)] tracking-[var(--displaytext-extra-bold-letter-spacing)] leading-[var(--displaytext-extra-bold-line-height)] [font-style:var(--displaytext-extra-bold-font-style)]">
            Experience
          </h2>
        </header>

        <div className="flex flex-col items-start gap-8 px-6 py-10 w-full">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className={`w-full border ${
                experience.highlighted
                  ? "bg-zinc-800 border-transparent"
                  : "bg-transparent border-[#71717a]"
              } rounded-[10px]`}
            >
              <CardContent className="flex flex-col items-start gap-7 px-6 py-[30px]">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-[30px]">
                    <h3 className="font-heading-h4-semibold text-primarywhite text-[length:var(--heading-h4-semibold-font-size)] tracking-[var(--heading-h4-semibold-letter-spacing)] leading-[var(--heading-h4-semibold-line-height)] [font-style:var(--heading-h4-semibold-font-style)]">
                      {experience.title}
                    </h3>
                  </div>
                  <span className="font-heading-h6-semibold text-zinc-300 text-[length:var(--heading-h6-semibold-font-size)] tracking-[var(--heading-h6-semibold-letter-spacing)] leading-[var(--heading-h6-semibold-line-height)] [font-style:var(--heading-h6-semibold-font-style)]">
                    {experience.period}
                  </span>
                </div>
                <p className="font-paragraph-p2-regular text-zinc-300 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
                  {experience.description.split("\n").map((text, i) => (
                    <React.Fragment key={i}>
                      {text}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
