import React from "react";
import Footer from "../components/footer/index";
import {
  FooterTitle,
  FooterBreak,
  FooterLink,
  FooterRow,
  FooterColumn,
} from "../components/footer/index";

const FooterContainer = () => {
  return (
    <Footer>
      <FooterTitle>Questions? Contact us.</FooterTitle>
      <FooterBreak />
      <FooterRow>
        <FooterColumn>
          <FooterLink href="#">FAQ</FooterLink>
          <FooterLink href="#">Investor Relations</FooterLink>
          <FooterLink href="#">Wyas to Watch</FooterLink>
          <FooterLink href="#">Coperate Information</FooterLink>
          <FooterLink href="#">Netflix Original</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink href="#">Help Centre</FooterLink>
          <FooterLink href="#">Jobs</FooterLink>
          <FooterLink href="#">Terms of Use</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink href="#">Account</FooterLink>
          <FooterLink href="#">Gift Cards</FooterLink>
          <FooterLink href="#">Privacy</FooterLink>
          <FooterLink href="#">Speed Test</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink href="#">Media Centre</FooterLink>
          <FooterLink href="#">Buy Gift Cards</FooterLink>
          <FooterLink href="#">Cookie Preferences</FooterLink>
          <FooterLink href="#">Legal Notices</FooterLink>
        </FooterColumn>
      </FooterRow>
      <FooterBreak></FooterBreak>
      <FooterTitle>Netflix Romania</FooterTitle>
    </Footer>
  );
};
export default FooterContainer;
