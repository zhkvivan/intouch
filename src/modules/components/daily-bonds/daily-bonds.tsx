import React from 'react';
import {
  StyledDailyBonds,
  PersonPromoContainer,
  PersonPromo,
  PersonPromoImage,
  PersonPromoName,
  PersonPromoDescription,
  LastTalked,
} from './daily-bonds.style';
import Button from '../Button/Button';

const DailyBonds = () => {
  return (
    <StyledDailyBonds>
      <PersonPromoContainer>
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
      </PersonPromoContainer>
    </StyledDailyBonds>
  );
};

export default DailyBonds;
