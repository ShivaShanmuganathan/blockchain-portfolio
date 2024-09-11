import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

function openResumeNewTab(){
  const url = 'https://1drv.ms/b/c/3ac34a3632394d23/EekB_cdT5rJGo5QmgeHRItABkJkpwXwn3NoG950K9bUdzA?e=638Go0';
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
        Seasoned Solidity Developer <br /> 
        Building Full Stack Decentralized Applications <br />
        </SectionText>
        <SectionText>
        💼 Currently Working At Laguna Games
        </SectionText>
        <Button onClick={openResumeNewTab}>Download Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;