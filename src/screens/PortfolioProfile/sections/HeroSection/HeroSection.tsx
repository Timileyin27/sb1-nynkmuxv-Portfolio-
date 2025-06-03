import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Social media links data for mapping
  const socialLinks = [
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      filled: true,
      alt: "LinkedIn",
    },
    {
      icon: <TwitterIcon className="w-5 h-5" />,
      filled: false,
      alt: "Twitter",
    },
    {
      icon: <FacebookIcon className="w-5 h-5" />,
      filled: false,
      alt: "Facebook",
    },
    {
      icon: <InstagramIcon className="w-5 h-5" />,
      filled: false,
      alt: "Instagram",
    },
  ];

  return (
    <section className="w-full px-20 py-[60px] relative overflow-hidden">
      {/* Social Media Links */}
      <div className="flex items-start gap-8 py-1 mt-12">
        {socialLinks.map((social, index) => (
          <Card
            key={index}
            className={`flex w-14 h-14 items-center justify-center p-4 rounded ${
              social.filled
                ? "bg-primaryblack"
                : "bg-transparent border-2 border-solid border-black"
            }`}
          >
            <CardContent className="p-0 flex items-center justify-center">
              {social.filled ? (
                <div className="text-white">{social.icon}</div>
              ) : (
                <div className="text-black">{social.icon}</div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex w-full items-center justify-between px-8 py-0">
        <div className="flex flex-col w-full max-w-[862px] items-start gap-12 py-5">
          <div className="flex flex-col items-start gap-8 w-full">
            <div className="flex flex-col items-start gap-5 w-full">
              {/* Name Section */}
              <div className="flex items-start gap-4">
                <span className="font-displaytext-regular font-[number:var(--displaytext-regular-font-weight)] text-primaryblack text-[length:var(--displaytext-regular-font-size)] tracking-[var(--displaytext-regular-letter-spacing)] leading-[var(--displaytext-regular-line-height)] whitespace-nowrap [font-style:var(--displaytext-regular-font-style)]">
                  Hello I&apos;m
                </span>
                <span className="font-displaytext-extra-bold font-[number:var(--displaytext-extra-bold-font-weight)] text-primaryblack text-[length:var(--displaytext-extra-bold-font-size)] tracking-[var(--displaytext-extra-bold-letter-spacing)] leading-[var(--displaytext-extra-bold-line-height)] whitespace-nowrap [font-style:var(--displaytext-extra-bold-font-style)]">
                  Abdulazeez Akande
                </span>
              </div>

              {/* Title Section */}
              <div className="flex items-start gap-4">
                <span className="font-displaytext-extra-bold font-[number:var(--displaytext-extra-bold-font-weight)] text-primaryblack text-[length:var(--displaytext-extra-bold-font-size)] tracking-[var(--displaytext-extra-bold-letter-spacing)] leading-[var(--displaytext-extra-bold-line-height)] whitespace-nowrap [font-style:var(--displaytext-extra-bold-font-style)]">
                  Product
                </span>
                <span className="[-webkit-text-stroke:3px_#000000] font-[number:var(--outlined-extra-bold-font-weight)] text-transparent text-[length:var(--outlined-extra-bold-font-size)] tracking-[var(--outlined-extra-bold-letter-spacing)] leading-[var(--outlined-extra-bold-line-height)] whitespace-nowrap font-outlined-extra-bold [font-style:var(--outlined-extra-bold-font-style)]">
                  Designer
                </span>
              </div>

              {/* Location Section */}
              <div className="flex items-start gap-4">
                <span className="font-displaytext-regular font-[number:var(--displaytext-regular-font-weight)] text-primaryblack text-[length:var(--displaytext-regular-font-size)] tracking-[var(--displaytext-regular-letter-spacing)] leading-[var(--displaytext-regular-line-height)] whitespace-nowrap [font-style:var(--displaytext-regular-font-style)]">
                  Based In
                </span>
                <span className="font-displaytext-extra-bold font-[number:var(--displaytext-extra-bold-font-weight)] text-primaryblack text-[length:var(--displaytext-extra-bold-font-size)] tracking-[var(--displaytext-extra-bold-letter-spacing)] leading-[var(--displaytext-extra-bold-line-height)] whitespace-nowrap [font-style:var(--displaytext-extra-bold-font-style)]">
                  Nigeria
                </span>
              </div>
            </div>

            {/* Bio Section */}
            <p className="font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-black text-[length:var(--paragraph-p2-regular-font-size)] text-justify tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
              My name is Abdulazeez Akande. I&#39;m excited to introduce myself
              as a dedicated and passionate UX/UI designer with a strong
              foundation in software engineering and a keen eye for detail,
              I&#39;m committed to crafting intuitive and user-centered
              experiences. My goal is to make technology more accessible and
              enjoyable for everyone.
            </p>
          </div>
        </div>

        {/* Profile Image */}
        <img
          className="w-auto h-[350px] object-cover"
          alt="Abdulazeez Akande profile"
          src="/img-3695-1-1.png"
        />
      </div>
    </section>
  );
};
