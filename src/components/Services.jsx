import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Guided by innovation, we not only identify these hidden prospects but also handcraft strategies that transform them into thriving successes.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting and customizing beautiful, high quality websites and web applications.
            </ListItem>
            <ListItem title="Blockchain development">
            We harness cutting-edge blockchain technology to forge breathtaking DApps(Decentralized applications) using smart contracts.
            </ListItem>
            <ListItem title="Social Media Management">
            At Aygenci we understand the importance of having a robust and
              social media designs. That’s why we handle all of our client social media platforms using stunning designs.
            </ListItem>
            <ListItem title="Cybersecurity">
            Security is the backbone of the digital presence.At Aygenci, we fortify your digital landscape through advanced cybersecurity solutions.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
