import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

function openResumeNewTab(){
  const url = 'https://drive.google.com/file/d/1kknmh6WKoV3OVh5YC67S7QWvqA4jd3Oj/view?usp=sharing';
  window.open(url, '_blank');
}
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Shiva <br />
          Shanmuganathan
        </SectionTitle>
        <SectionText>
        New Graduate Learning & Building <br /> Full Stack Decentralized Applications
        </SectionText>
        <Button onClick={openResumeNewTab}>Download Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;