
import {
    Footer,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from "flowbite-react";
  import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
  import React from "react";
  
  export function Footer_comp() {
    return (
      <Footer id="Contact" container>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-2">
              <div>
                <FooterTitle title="about" />
                <FooterLinkGroup col>
                  <FooterLink href="#About">WhatsApp - (404) 618 8995</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" icon={BsFacebook} />
              <FooterIcon href="#" icon={BsInstagram} />
              <FooterIcon href="#" icon={BsTwitter} />
            </div>
          </div>
        </div>
      </Footer>
    );
  }
  