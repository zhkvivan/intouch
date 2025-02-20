import React from 'react';
import {
  StyledDailyBonds,
  PersonPromoContainer,
  PersonPromo,
  PersonPromoImage,
  PersonPromoName,
  Data,
  PersonPromoDescription,
  PersonDetailsContainer,
} from './daily-bonds.style';
import { Gift, ChatDots, BellRinging } from '@phosphor-icons/react/dist/ssr';
import { Subheading } from './subheading';
import Button from '../Button/Button';

const DailyBonds = () => {
  return (
    <StyledDailyBonds>
      <Subheading
        text="Special Occasions"
        icon={<Gift size="100%" weight="light" />}
      />
      <PersonPromoContainer>
        <PersonPromo>
          <Data>Today</Data>
          <PersonPromoImage src="/portraits/portrait-1.jpg" alt="Person" />
          <PersonDetailsContainer>
            <PersonPromoName>John Doe</PersonPromoName>
            <PersonPromoDescription>Anniversary</PersonPromoDescription>
          </PersonDetailsContainer>
        </PersonPromo>
        <PersonPromo>
          <PersonPromoImage src="/portraits/portrait-1.jpg" alt="Person" />
          <PersonPromoName>John Doe</PersonPromoName>
          <PersonPromoDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </PersonPromoDescription>
          <Data>Last talked 10 minutes ago</Data>
        </PersonPromo>
      </PersonPromoContainer>
      <Subheading
        text="Time to reconnect"
        icon={<ChatDots size="100%" weight="light" />}
      />
      <Subheading
        text="Latest updates"
        icon={<BellRinging size="100%" weight="light" />}
      />
      {/* <PersonPromoContainer>
        <PersonPromo>
          <PersonPromoImage src="/portraits/portrait-1.jpg" alt="Person" />
          <PersonPromoName>John Doe</PersonPromoName>
          <PersonPromoDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </PersonPromoDescription>
          <LastTalked>Last talked 10 minutes ago</LastTalked>
          <Button label="Contact" />
        </PersonPromo>
        <PersonPromo>
          <PersonPromoImage src="/portraits/portrait-2.jpg" alt="Person" />
          <PersonPromoName>John Doe</PersonPromoName>
          <PersonPromoDescription>
            Haven&apos;t talked in 2 months ⏳
          </PersonPromoDescription>
          <LastTalked>Last talked: 2 months ago</LastTalked>
          <Button label="Contact" />
        </PersonPromo>
        <PersonPromo>
          <PersonPromoImage src="/portraits/portrait-3.jpg" alt="Person" />
          <PersonPromoName>John Doe</PersonPromoName>
          <PersonPromoDescription>
            Anniversary tomorrow 🎉
          </PersonPromoDescription>
          <LastTalked>Last talked: 15 days ago</LastTalked>
          <Button label="Contact" />
        </PersonPromo>
      </PersonPromoContainer> */}
    </StyledDailyBonds>
  );
};

export default DailyBonds;
