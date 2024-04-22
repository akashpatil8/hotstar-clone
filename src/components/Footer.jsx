import { FaGooglePlay } from "react-icons/fa6";
import { GrApple } from "react-icons/gr";
import { LuFacebook, LuTwitter } from "react-icons/lu";
import { FooterColumn } from "./FooterColumn";
import { FooterColumnChildren } from "./FooterColumnChildren";

export function Footer() {
  return (
    <footer className="bg-black-background py-8 pl-4 pr-12">
      <div className="my-8 flex justify-between">
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
          <p className="mb-1 mt-2 cursor-pointer text-base font-normal capitalize text-slate-200/50">
            © 2023 STAR. All rights reserved.
          </p>
          <div className="flex gap-4">
            <p className="cursor-pointer text-base font-normal capitalize text-slate-200/50">
              Terms of use
            </p>
            <p className="cursor-pointer text-base font-normal capitalize text-slate-200/50">
              Privacy policy
            </p>
            <p className="cursor-pointer text-base font-normal capitalize text-slate-200/50">
              FAQ
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex h-12 items-center gap-2 bg-black px-0.5">
            <FaGooglePlay className="text-3xl" />
            <div>
              <p className="-mb-1 text-xs">Get it on</p>
              <p className="text-lg font-medium">Google Play</p>
            </div>
          </div>
          <div className="flex h-12 items-center gap-2 bg-black px-0.5">
            <GrApple className="text-3xl" />
            <div>
              <p className="-mb-1 text-xs">Download on the</p>
              <p className="text-lg font-medium">App Store</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
