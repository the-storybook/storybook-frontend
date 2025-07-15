import FiltersSection from "@/components/filters/filters-section";
import StoryCard from "@/components/story/story-card";
import React from "react";

const ExplorePage = () => {
  return (
    <div className="flex">
      <FiltersSection />
      <div className="flex flex-1 flex-col gap-8 border-l p-8">
        <StoryCard
          imageUrl="https://img.wattpad.com/cover/189816851-256-k708609.jpg"
          title="Waindale"
          author="TheSydneyMarie"
          tags={[
            "alpha",
            "badboy",
            "fantasy",
            "fantasy-romance",
            "highschool",
            "humanxwerewolf",
            "illusion",
            "love",
            "luna",
            "mate",
            "mates",
            "mortal",
            "pack",
            "possessive",
            "romance",
            "smalltown",
            "smalltowns",
            "supernatural",
            "teenfiction",
            "teenromance",
            "texttospeech",
            "werewolf",
            "werewolves",
          ]}
          description="Wrenley returns to Waindale hoping for a peaceful escape, but the dark secrets lurking in the woods soon pull her into a dark mystery-one she'll be forced to confront. *** Wrenley moves to Waindale-the place where her mother grew up and where her grandmother still lives. Between the pine trees and above the wet ground, she soon realizes that Waindale is anything but the perfect place she remembers it as. Dark things stalk the woods. Dark things are pulling her in."
          views="1.6M"
          loves="59.5K"
          parts={58}
        />
        <StoryCard
          imageUrl="https://img.wattpad.com/cover/224983809-256-k528060.jpg"
          title="Knee Pads"
          author="violadavis"
          tags={[
            "angst",
            "college",
            "collegeromance",
            "dreamlandbooks",
            "enemiestolovers",
            "girlxgirl",
            "gxg",
            "lgbt",
            "litfic",
            "love",
            "mentalhealth",
            "newadult",
            "newadultreads",
            "pride",
            "realisticfiction",
            "rollerderby",
            "rollerskating",
            "romance",
            "sapphic",
            "slowburn",
            "sports",
            "sportsromance",
            "texttospeech",
            "wlw",
          ]}
          description="Wren's life takes an unexpected turn when she joins a roller derby team led by the elusive Corinne Fontaine. ***** Moving to Connecticut had never been in former figure skater Wren Wu's plans, yet there she is. She's there for her brother's sake, against her will, and is feeling like her whole world is slipping out of her hands. When she's offered an opportunity to try out for the university roller derby team, captained by the infuriatingly beautiful Corinne Fontaine, everything inside her tells her it's a bad idea, but she's never been one to make good decisions anyway."
          views="86.2K"
          loves="5K"
          parts={35}
        />
        <StoryCard
          imageUrl="https://img.wattpad.com/cover/258988576-256-k691256.jpg"
          title="See Me"
          author="TellaAlvarez"
          tags={[
            "badboy",
            "betrayal",
            "bipoc",
            "contemporary",
            "grief",
            "healing",
            "lovewins",
            "mentalhealth",
            "newadult",
            "newadultromance",
            "romance",
            "secret",
            "selfdiscovery",
            "selflove",
            "shygirl",
            "slowburn",
            "therapy",
            "tragicpast",
            "trauma",
            "youngadult",
          ]}
          description={`(Complete) After Seren is assaulted by someone in her friend group, she begins to fall deeper into the depths of her depression. No one seems to notice, except for the former bad boy and his friends. "Seriously, this is probably the best book I've read on Wattpad." -@dowries "I thought you were bluffing in the description but dang, you got me. Ima say- this truly is one of the best books on Wattpad." -@jamzeverywhere "Easily the best book I have ever read and I'm not exaggerating." - @purelyaureila `}
          views="19.7M"
          loves="735K"
          parts={79}
        />
      </div>
    </div>
  );
};

export default ExplorePage;
