import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Because having a personal website is less lame than having a pdf file.
        </SectionText>
        <Button onClick={props.handleClick}>Let's Begin!</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
