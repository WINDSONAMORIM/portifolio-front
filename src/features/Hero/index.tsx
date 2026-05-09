"use client";
import { AnimatedText } from "../../components/animatedText";
import { Logo } from "../../components/logo";
import { Wrapper } from "../../components/wrapper";

export const Hero = () => {
  return (
    <Wrapper>
      <div className="max-w-7xl w-full flex items-center justify-center">
        <div className="w-[33%] flex justify-center items-center min-w-[75]">
          <AnimatedText phrases={["Desenvolvedor Web Full Stack"]} />
        </div>
        <div className="w-[33%] flex justify-center items-center min-w-[75]">
          <Logo />
        </div>
        <div className="w-[33%] flex justify-center items-center min-w-[75]">
          <AnimatedText
            phrases={["Transforme suas ideias em experiências incríveis."]}
          />
        </div>
      </div>
    </Wrapper>
  );
};
