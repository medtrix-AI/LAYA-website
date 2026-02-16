"use client";

import { ReactNode } from "react";
import { IdeaHero } from "./IdeaHero";
import { OutcomeSection } from "./OutcomeSection";
import { ReturnToCore } from "./ReturnToCore";
import type { OutcomeMetric } from "@/types";

interface IdeaPageTemplateProps {
  title: string;
  subtitle: string;
  accent: string;
  outcomeTitle: string;
  outcomes: OutcomeMetric[];
  children: ReactNode; // Scenario + decision logic slots
}

export function IdeaPageTemplate({
  title,
  subtitle,
  accent,
  outcomeTitle,
  outcomes,
  children,
}: IdeaPageTemplateProps) {
  return (
    <div>
      <IdeaHero title={title} subtitle={subtitle} accent={accent} />
      {children}
      <OutcomeSection title={outcomeTitle} metrics={outcomes} accent={accent} />
      <ReturnToCore />
    </div>
  );
}
