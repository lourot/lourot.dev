export { Section, SectionWithAvatar };

import React from "react";
import avatarUrl from "../assets/avatar.jpeg";

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className={"mx-auto py-10 border-gray-300"}>{children}</section>
  );
}

function SectionWithAvatar({ children }: { children: React.ReactNode }) {
  return (
    <Section>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-x-10 gap-y-5">
        <div className="w-36 h-36 flex-none rounded-full overflow-hidden">
          <img
            src={avatarUrl}
            className="scale-105"
            alt="Aurélien's profile picture"
          />
        </div>
        <div>{children}</div>
      </div>
    </Section>
  );
}
