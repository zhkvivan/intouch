'use client';

import React, { useRef, useState } from 'react';
import {
  StyledDailyBonds,
  PersonPromoContainer,
  PersonPromo,
  PersonPromoImage,
  PersonPromoName,
  Data,
  PersonPromoDescription,
  PersonDetailsContainer,
  PersonPromoWrapper,
} from './daily-bonds.style';
import { Gift, ChatDots, BellRinging } from '@phosphor-icons/react/dist/ssr';
import { Subheading } from './subheading';

const DailyBonds = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    if (sliderRef.current) {
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;
    e.preventDefault();
    if (sliderRef.current) {
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 1;
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (sliderRef.current) {
      e.preventDefault();
      sliderRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <StyledDailyBonds>
      <Subheading
        text="Special Occasions"
        icon={<Gift size="100%" weight="light" />}
      />
      <PersonPromoWrapper>
        <PersonPromoContainer
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onWheel={handleWheel}
        >
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
      </PersonPromoWrapper>
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
