import { FC } from "react";

import { logo, logo2x } from "@/assets/images";
import { Container } from ".";

const Hero: FC = () => {
  return (
    <section className="py-8">
      <Container className="flex items-center justify-center max-w-[610px]" type="custom">
        <img className="w-full" src={logo} alt="logo" width="610" height="225" srcSet={`${logo} 1x, ${logo2x} 2x`} />
      </Container>
    </section>
  );
};

export default Hero;
