import { CheckIcon } from "lucide-react";
import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Testimonial data for mapping
const testimonials = [
  {
    id: 1,
    image: "/photo-2024-07-22-19-09-26-1.png",
    text: "An inspiring designer whose creativity has no bound, bringing vision to life  with sheer brillliance",
    name: "Akande Muritala",
    role: "Designer",
    isDark: false,
  },
  {
    id: 2,
    image: "/photo-2024-09-13-19-31-27-1.png",
    text: "Timileyin's work captivaties, leaving a desire for more collaboration; remarkable designs perfectly match projects",
    name: "Eeman Adeniran",
    role: "Developer",
    isDark: true,
  },
  {
    id: 3,
    image: "/img-3242-1.png",
    text: "Timi is a design maestro, pouring heart and soul into each projects",
    name: "Akinwande Akindele",
    role: "Developer",
    isDark: false,
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex items-start py-[60px] px-20 bg-primarywhite">
      <div className="flex flex-col items-center justify-center gap-5 w-full px-8">
        <header className="flex items-center justify-center gap-4 py-5 w-full">
          <h2 className="text-black font-displaytext-regular font-[number:var(--displaytext-regular-font-weight)] text-[length:var(--displaytext-regular-font-size)] tracking-[var(--displaytext-regular-letter-spacing)] leading-[var(--displaytext-regular-line-height)] whitespace-nowrap [font-style:var(--displaytext-regular-font-style)]">
            My
          </h2>
          <h2 className="text-black font-displaytext-extra-bold font-[number:var(--displaytext-extra-bold-font-weight)] text-[length:var(--displaytext-extra-bold-font-size)] tracking-[var(--displaytext-extra-bold-letter-spacing)] leading-[var(--displaytext-extra-bold-line-height)] whitespace-nowrap [font-style:var(--displaytext-extra-bold-font-style)]">
            Testimonial
          </h2>
        </header>

        <div className="flex items-center justify-between px-6 py-10 w-full">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className={`flex flex-col w-[370px] items-center justify-center gap-6 p-10 rounded-[20px] shadow-[0px_8px_16px_-6px_#18274b14,0px_6px_8px_-6px_#18274b1f] ${
                testimonial.isDark ? "bg-primaryblack" : "bg-primarywhite"
              }`}
            >
              <CardContent className="flex flex-col items-center justify-center gap-6 p-0">
                <div className="relative">
                  <Avatar className="w-24 h-24">
                    <img
                      src={testimonial.image}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </Avatar>
                  <div className="absolute bottom-0 right-0 inline-flex items-center justify-center">
                    <div
                      className={`relative w-[30px] h-[30px] ${
                        testimonial.isDark
                          ? "bg-primarywhite"
                          : "bg-primaryblack"
                      } rounded-[15px] flex items-center justify-center`}
                    >
                      <CheckIcon className="w-[13px] h-[9px] text-white" />
                    </div>
                  </div>
                </div>

                <p
                  className={`text-center font-button-text-2-regular font-[number:var(--button-text-2-regular-font-weight)] text-[length:var(--button-text-2-regular-font-size)] tracking-[var(--button-text-2-regular-letter-spacing)] leading-[var(--button-text-2-regular-line-height)] [font-style:var(--button-text-2-regular-font-style)] ${
                    testimonial.isDark
                      ? "text-primarywhite"
                      : "text-primaryneutral"
                  }`}
                >
                  {testimonial.text}
                </p>

                <Separator
                  className={`w-[120px] h-0.5 ${
                    testimonial.isDark ? "bg-primarywhite" : "bg-primaryblack"
                  }`}
                />

                <h3
                  className={`text-center font-heading-h5-semibold font-[number:var(--heading-h5-semibold-font-weight)] text-[length:var(--heading-h5-semibold-font-size)] tracking-[var(--heading-h5-semibold-letter-spacing)] leading-[var(--heading-h5-semibold-line-height)] [font-style:var(--heading-h5-semibold-font-style)] ${
                    testimonial.isDark
                      ? "text-primarywhite"
                      : "text-primaryneutral"
                  }`}
                >
                  {testimonial.name}
                </h3>

                <p
                  className={`text-center font-heading-h6-semibold font-[number:var(--heading-h6-semibold-font-weight)] text-[length:var(--heading-h6-semibold-font-size)] tracking-[var(--heading-h6-semibold-letter-spacing)] leading-[var(--heading-h6-semibold-line-height)] [font-style:var(--heading-h6-semibold-font-style)] ${
                    testimonial.isDark ? "text-primarywhite" : "text-zinc-500"
                  }`}
                >
                  {testimonial.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
