import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactSection = (): JSX.Element => {
  // Form fields data
  const formFields = [
    { id: "name", placeholder: "Your name", type: "text" },
    { id: "email", placeholder: "Email", type: "email" },
    { id: "website", placeholder: "Your website (If exists)", type: "url" },
  ];

  // Social media icons data
  const socialIcons = [
    { id: "icon1", bgUrl: "/social-icon-2.svg", filled: true },
    { id: "icon2", bgUrl: "/subtract.svg", filled: false },
    { id: "icon3", bgUrl: "/social-icon-1.svg", filled: false },
    { id: "icon4", bgUrl: "/social-icon.svg", filled: false },
  ];

  return (
    <section className="flex flex-col w-full items-start px-20 py-[60px] bg-white">
      <div className="flex flex-wrap items-center justify-between w-full px-8 gap-8">
        {/* Contact Form */}
        <div className="flex flex-col items-start justify-center py-5 flex-1 min-w-[320px]">
          <div className="flex flex-col items-start gap-5 w-full">
            {formFields.map((field) => (
              <div key={field.id} className="w-full max-w-[500px]">
                <Input
                  id={field.id}
                  placeholder={field.placeholder}
                  type={field.type}
                  className="h-14 px-6 py-4 rounded border-[1.4px] border-black font-heading-h6-regular text-zinc-500"
                />
              </div>
            ))}

            <div className="w-full max-w-[500px]">
              <Textarea
                id="message"
                placeholder="How can I help?*"
                className="h-[140px] px-6 py-4 rounded border-[1.4px] border-black font-heading-h6-regular text-zinc-500 resize-none"
              />
            </div>

            <div className="flex items-start gap-6 flex-wrap">
              <Button className="h-14 px-5 py-4 bg-primaryblack rounded font-button-text-semibold text-primarywhite">
                Get In Touch
              </Button>

              {socialIcons.map((icon, index) => (
                <Button
                  key={icon.id}
                  variant={icon.filled ? "default" : "outline"}
                  size="icon"
                  className={`w-[58px] h-[58px] p-4 rounded ${
                    icon.filled
                      ? "bg-primaryblack"
                      : "border-2 border-black bg-transparent"
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-[url(${icon.bgUrl})] bg-[100%_100%]`}
                    aria-hidden="true"
                  />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-start justify-center gap-6 py-5 flex-1 min-w-[320px]">
          <div className="flex flex-col items-start justify-center gap-10 w-full">
            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex flex-col items-start gap-3 w-full">
                <div className="flex items-start gap-4 flex-wrap">
                  <span className="font-displaytext-extra-bold text-primaryblack tracking-[var(--displaytext-extra-bold-letter-spacing)] leading-[var(--displaytext-extra-bold-line-height)]">
                    Let&apos;s
                  </span>
                  <span className="[-webkit-text-stroke:3px_#000000] font-outlined-extra-bold text-transparent tracking-[var(--outlined-extra-bold-letter-spacing)] leading-[var(--outlined-extra-bold-line-height)]">
                    talk
                  </span>
                  <span className="font-displaytext-extra-bold text-primaryblack tracking-[var(--displaytext-extra-bold-letter-spacing)] leading-[var(--displaytext-extra-bold-line-height)]">
                    for
                  </span>
                </div>
                <h2 className="font-displaytext-extra-bold text-primaryblack tracking-[var(--displaytext-extra-bold-letter-spacing)] leading-[var(--displaytext-extra-bold-line-height)]">
                  Something special
                </h2>
              </div>
              <p className="font-paragraph-p2-regular text-zinc-500 tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)]">
                I seek to push the limits of creativity to create high-engaging,
                user-friendly, and memorable interactive experiences.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 w-full">
              <a
                href="mailto:timileyinabdulazeez27@gmail.com"
                className="font-heading-h3-semibold text-primaryblack tracking-[var(--heading-h3-semibold-letter-spacing)] leading-[var(--heading-h3-semibold-line-height)]"
              >
                timileyinabdulazeez27@gmail.com
              </a>
              <a
                href="tel:+2347083321894"
                className="font-heading-h3-semibold text-primaryblack tracking-[var(--heading-h3-semibold-letter-spacing)] leading-[var(--heading-h3-semibold-line-height)]"
              >
                + 234 (0) 708 332 1894
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
