export const HeroSection = (): JSX.Element => {
  // Social media links data for mapping

  return (
    <section className="w-full py-[80px] max-sm:py-[40px] relative overflow-hidden">
      {/* Main Content */}
      <div className="flex max-lg:flex-col-reverse w-full items-center justify-between px-8 py-0">
        <div className="flex flex-col w-full max-w-[862px] items-start gap-12 py-5">
          <div className="flex flex-col items-start gap-8 w-full">
            <div className="flex flex-wrap flex-col items-start max-sm:gap-2 gap-5 w-full">
              {/* Name Section */}
              <div className="flex flex-wrap items-start gap-4 max-sm:gap-2">
                <span className="font-display text-regular max-sm:text-[30px] font-[number:var(--displaytext-regular-font-weight)] text-primaryblack text-[length:var(--displaytext-regular-font-size)] tracking-[var(--displaytext-regular-letter-spacing)] max-sm:leading-[35px] leading-[var(--displaytext-regular-line-height)] whitespace-nowrap [font-style:var(--displaytext-regular-font-style)]">
                  Hello I&apos;m
                </span>
                <span className="font-displaytext-extra-bold max-sm:text-[30px] font-[number:var(--displaytext-extra-bold-font-weight)] text-primaryblack text-[length:var(--displaytext-extra-bold-font-size)] tracking-[var(--displaytext-extra-bold-letter-spacing)]  max-sm:leading-[35px] leading-[var(--displaytext-extra-bold-line-height)] whitespace-nowrap [font-style:var(--displaytext-extra-bold-font-style)]">
                  Abdulazeez Akande
                </span>
              </div>

              {/* Title Section */}
              <div className="flex items-start gap-4">
                <span className="font-displaytext-extra-bold max-sm:text-[30px] font-[number:var(--displaytext-extra-bold-font-weight)] text-primaryblack text-[length:var(--displaytext-extra-bold-font-size)] tracking-[var(--displaytext-extra-bold-letter-spacing)]  max-sm:leading-[35px] leading-[var(--displaytext-extra-bold-line-height)] whitespace-nowrap [font-style:var(--displaytext-extra-bold-font-style)]">
                  Product
                </span>
                <span className="drop-shadow-[0_0_3px_black] max-sm:text-[30px] font-[number:var(--outlined-extra-bold-font-weight)] text-white text-[length:var(--outlined-extra-bold-font-size)] tracking-[var(--outlined-extra-bold-letter-spacing)]  max-sm:leading-[35px] leading-[var(--outlined-extra-bold-line-height)] whitespace-nowrap font-outlined-extra-bold [font-style:var(--outlined-extra-bold-font-style)]">
                  Designer
                </span>
              </div>

              {/* Location Section */}
              <div className="flex items-start gap-4">
                <span className="font-displaytext-regular max-sm:text-[30px] font-[number:var(--displaytext-regular-font-weight)] text-primaryblack text-[length:var(--displaytext-regular-font-size)] tracking-[var(--displaytext-regular-letter-spacing)]  max-sm:leading-[35px] leading-[var(--displaytext-regular-line-height)] whitespace-nowrap [font-style:var(--displaytext-regular-font-style)]">
                  Based In
                </span>
                <span className="font-displaytext-extra-bold max-sm:text-[30px] font-[number:var(--displaytext-extra-bold-font-weight)] text-primaryblack text-[length:var(--displaytext-extra-bold-font-size)] tracking-[var(--displaytext-extra-bold-letter-spacing)]  max-sm:leading-[35px] leading-[var(--displaytext-extra-bold-line-height)] whitespace-nowrap [font-style:var(--displaytext-extra-bold-font-style)]">
                  Nigeria
                </span>
              </div>
            </div>

            {/* Bio Section */}
            <p className="font-paragraph-p2-regular max-sm:text-[16px] font-[number:var(--paragraph-p2-regular-font-weight)] text-black text-[length:var(--paragraph-p2-regular-font-size)] text-justify tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
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
          className="w-auto sm:h-[350px] object-cover max-sm:w-full "
          alt="Abdulazeez Akande profile"
          src="/timi_hero_img.png"
        />
      </div>
    </section>
  );
};
