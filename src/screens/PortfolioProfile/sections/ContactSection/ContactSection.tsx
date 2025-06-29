import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import WhatsApp from "../../../../components/ui/WhatsApp";
import { Element } from "react-scroll";
import { useState } from "react";

export const ContactSection = (): JSX.Element => {
  const subject = "New Contact Form Submission";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  function getMailtoLink(
    name: string,
    email: string,
    message: string,
    website: string
  ) {
    return `mailto:timileyinabdulazeez27@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      "Name: " +
        name +
        "\n" +
        "Email: " +
        email +
        "\n" +
        "Website: " +
        website +
        "\n\n" +
        message
    )}`;
  }

  function handleMailtoClick() {
    const mailtoLink = getMailtoLink(name, email, message, website);

    window.location.href = mailtoLink;
  }

  // Form fields data
  const formFields = [
    { id: "name", placeholder: "Your name", type: "text" },
    { id: "email", placeholder: "Email", type: "email" },
    { id: "website", placeholder: "Your website (If exists)", type: "url" },
  ];

  // Social media icons data
  const socialLinks = [
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      filled: true,
      alt: "LinkedIn",
      id: "icon1",
      link: "https://www.linkedin.com/in/oluwatimileyin-akande-0a68ba290",
    },
    {
      icon: <TwitterIcon className="w-5 h-5" />,
      filled: false,
      alt: "Twitter",
      id: "icon2",
      link: "https://x.com/abdultymee?s=11",
    },
    {
      icon: <WhatsApp />,
      filled: false,
      alt: "WhatsApp",
      id: "icon3",
      link: "https://wa.me/2347083321894?text=Hello%20Abdulazeez,%20I%20would%20like%20to%20get%20in%20touch!",
    },
    {
      icon: <InstagramIcon className="w-5 h-5" />,
      filled: false,
      alt: "Instagram",
      id: "icon4",
      link: "https://www.instagram.com/abdul_tymee/",
    },
  ];

  return (
    <section className=" items-start py-[60px] bg-white">
      <Element name="contact">
        <div className="flex max-sm:flex-col flex-wrap items-center justify-between w-full gap-8">
          {/* Contact Form */}
          <div className="flex flex-col items-start justify-center py-5 flex-1 max-sm:w-full ">
            <div className="flex flex-col items-start gap-5 w-full">
              {formFields.map((field) => (
                <div key={field.id} className="w-full max-w-[500px]">
                  <Input
                    name={field.id}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (field.id === "name") setName(value);
                      if (field.id === "email") setEmail(value);
                      if (field.id === "website") setWebsite(value);
                    }}
                    id={field.id}
                    placeholder={field.placeholder}
                    type={field.type}
                    className="h-14 px-6 py-4 rounded border-[1.4px] border-black font-heading-h6-regular text-zinc-500"
                  />
                </div>
              ))}

              <div className="w-full max-w-[500px]">
                <Textarea
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  placeholder="How can I help?*"
                  className="h-[140px] px-6 py-4 rounded border-[1.4px] border-black font-heading-h6-regular text-zinc-500 resize-none"
                />
              </div>

              <div className="flex items-start gap-6 flex-wrap">
                <Button
                  onClick={handleMailtoClick}
                  className="h-14 px-5 py-4 bg-primaryblack rounded font-button-text-semibold text-primarywhite"
                >
                  Get In Touch
                </Button>

                {socialLinks.map((icon, index) => (
                  <a
                    key={index}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                        className={`w-5 h-5 bg-[100%_100%]`}
                        aria-hidden="true"
                      >
                        {icon.icon}
                      </div>
                    </Button>
                  </a>
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
                    <span className="font-displaytext-extra-bold max-md:text-[32px] max-sm:leading-[35px] font-[number:var(--displaytext-extra-bold-font-weight)] text-primaryblack text-[length:var(--displaytext-extra-bold-font-size)] tracking-[var(--displaytext-extra-bold-letter-spacing)] leading-[var(--displaytext-extra-bold-line-height)] whitespace-nowrap [font-style:var(--displaytext-extra-bold-font-style)]">
                      Let&apos;s
                    </span>
                    <span className="drop-shadow-[0_0_3px_black] max-md:text-[32px] max-sm:leading-[35px] font-[number:var(--outlined-extra-bold-font-weight)] text-white text-[length:var(--outlined-extra-bold-font-size)] tracking-[var(--outlined-extra-bold-letter-spacing)] leading-[var(--outlined-extra-bold-line-height)] whitespace-nowrap font-outlined-extra-bold [font-style:var(--outlined-extra-bold-font-style)]">
                      talk
                    </span>
                    <span className="font-displaytext-extra-bold max-md:text-[32px] max-sm:leading-[35px] font-[number:var(--displaytext-extra-bold-font-weight)] text-primaryblack text-[length:var(--displaytext-extra-bold-font-size)] tracking-[var(--displaytext-extra-bold-letter-spacing)] leading-[var(--displaytext-extra-bold-line-height)] whitespace-nowrap [font-style:var(--displaytext-extra-bold-font-style)]">
                      for
                    </span>
                  </div>
                  <span className="font-displaytext-extra-bold max-md:text-[32px] max-sm:leading-[35px] font-[number:var(--displaytext-extra-bold-font-weight)] text-primaryblack text-[length:var(--displaytext-extra-bold-font-size)] tracking-[var(--displaytext-extra-bold-letter-spacing)] leading-[var(--displaytext-extra-bold-line-height)] whitespace-nowrap [font-style:var(--displaytext-extra-bold-font-style)]">
                    Something special
                  </span>
                </div>
                <p className="font-paragraph-p2-regular text-zinc-500 tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)]">
                  I seek to push the limits of creativity to create
                  high-engaging, user-friendly, and memorable interactive
                  experiences.
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
      </Element>
    </section>
  );
};
