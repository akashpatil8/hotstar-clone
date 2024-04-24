import { FaGooglePlay } from "react-icons/fa6";
import { GrApple } from "react-icons/gr";
import { LuFacebook, LuTwitter } from "react-icons/lu";
import { FooterColumn } from "./FooterColumn";
import { FooterColumnChildren } from "./FooterColumnChildren";

export function Footer() {
  return (
    <footer className="bg-black-background py-4 pl-4 lg:py-8 lg:pr-12">
      <div className="my-4 flex justify-between lg:my-8">
        <FooterColumn title={"Company"}>
          <FooterColumnChildren name={"About us"} />
          <FooterColumnChildren name={"Careers"} />
        </FooterColumn>
        <FooterColumn title={"View Website in"}>
          <FooterColumnChildren name={"English"} />
        </FooterColumn>
        <FooterColumn title={"Need help?"}>
          <FooterColumnChildren name={"Visit help center"} />
          <FooterColumnChildren name={"Share Feedback"} />
        </FooterColumn>
        <FooterColumn title={"Connect with Us"} isRow={true}>
          <FooterColumnChildren
            name={<LuFacebook className="text-2xl text-slate-100/90" />}
          />
          <FooterColumnChildren
            name={<LuTwitter className="text-2xl text-slate-100/90" />}
          />
        </FooterColumn>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="mb-1 mt-2 cursor-pointer text-sm font-normal capitalize text-slate-200/50 lg:text-base">
            © 2023 STAR. All rights reserved.
          </p>
          <div className="flex cursor-pointer gap-2 text-sm font-normal capitalize text-slate-200/50 lg:gap-4 lg:text-base">
            <p>Terms of use</p>
            <p>Privacy policy</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
          <div className="flex h-10 items-center gap-2 bg-black px-0.5 lg:h-12">
            <FaGooglePlay className="text-xl lg:text-3xl" />
            <div>
              <p className="-mb-1 text-[0.65rem] lg:text-xs">Get it on</p>
              <p className="font-medium lg:text-lg">Google Play</p>
            </div>
          </div>
          <div className="flex h-10 items-center gap-2 bg-black px-0.5 lg:h-12">
            <GrApple className="text-xl lg:text-3xl" />
            <div>
              <p className="-mb-1 text-[0.65rem] lg:text-xs">Download on</p>
              <p className="font-medium lg:text-lg">App Store</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
