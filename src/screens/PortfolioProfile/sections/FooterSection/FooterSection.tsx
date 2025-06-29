import React from "react";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex w-full items-start max-sm:px-5 px-20 py-6 bg-primaryblack">
      <div className="flex w-full items-center justify-between px-8 max-sm:px-0 py-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            {/* <div className="relative w-[39.91px] h-10">
              <div className="relative w-[23px] h-[35px] top-[3px] left-2 bg-[url(/group-2.png)] bg-[100%_100%]" />
            </div> */}

            <div className="font-heading-h5-bold font-[number:var(--heading-h5-bold-font-weight)] text-primarywhite text-[length:var(--heading-h5-bold-font-size)] tracking-[var(--heading-h5-bold-letter-spacing)] leading-[var(--heading-h5-bold-line-height)] whitespace-nowrap [font-style:var(--heading-h5-bold-font-style)]">
              Personal
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3">
          <div className="mt-[-1.00px] font-heading-h6-semibold font-[number:var(--heading-h6-semibold-font-weight)] text-primarywhite text-[length:var(--heading-h6-semibold-font-size)] text-right tracking-[var(--heading-h6-semibold-letter-spacing)] leading-[var(--heading-h6-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-h6-semibold-font-style)]">
            @ 2024&nbsp;&nbsp;Personal
          </div>

          <div className="font-heading-h6-semibold font-[number:var(--heading-h6-semibold-font-weight)] text-primarywhite text-[length:var(--heading-h6-semibold-font-size)] text-right tracking-[var(--heading-h6-semibold-letter-spacing)] leading-[var(--heading-h6-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-h6-semibold-font-style)]">
            Made In Figma
          </div>
        </div>
      </div>
    </footer>
  );
};
