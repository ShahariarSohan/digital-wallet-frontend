"use client";

import React, { useRef, useState } from "react";
import {
  BookOpen,
  Clock,
  FileText,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { termsSections, type TermsSection } from "@/constants/terms.data";
import { Link } from "react-router";

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [readProgress, setReadProgress] = useState<number>(0);

  // 🔑 Refs for scroll navigation
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const progress = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
    setReadProgress(progress);
  };

  const handleNavClick = (index: number) => {
    setActiveSection(index);
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-secondary/5 to-primary/5 pb-10">
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary via-secondary to-primary py-24 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 rounded-full mb-8">
          <BookOpen className="w-5 h-5 text-white" />
          <span className="text-white font-bold text-sm">TERMS OF SERVICE</span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
          ePay Terms & Conditions
        </h1>

        <p className="text-white/90 text-xl max-w-3xl mx-auto mb-8">
          Clear, comprehensive guidelines for using our digital wallet platform
        </p>

        <div className="flex justify-center gap-6">
          <div className="px-6 py-4 bg-white/10 rounded-xl flex items-center gap-3">
            <Clock className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Dec 24, 2025</span>
          </div>
          <div className="px-6 py-4 bg-white/10 rounded-xl flex items-center gap-3">
            <FileText className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Version 3.0</span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className=" hidden lg:sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
        <div className="h-1 bg-primary/20">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all"
            style={{ width: `${readProgress}%` }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <span className="text-sm font-semibold text-foreground">
            Reading Progress: {Math.round(readProgress)}%
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto  py-16 grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="space-y-2 flex flex-col items-center">
          {termsSections.map((section: TermsSection, idx: number) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(idx)}
              className={`w-4/5 md:w-1/2 lg:w-full p-4 rounded-xl text-left transition-all ${
                activeSection === idx
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground border"
              }`}
            >
              {section.number} — {section.title}
            </button>
          ))}
        </div>

        {/* Scrollable Content */}
        <div
          className="container mx-auto px-4 lg:col-span-3 space-y-12 lg:pr-4 overflow-visible lg:overflow-y-auto max-h-none lg:max-h-[90vh]
                       "
          onScroll={handleScroll}
        >
          {termsSections.map((section: TermsSection, idx: number) => (
            <div
              key={section.id}
              ref={(el) => {
                sectionRefs.current[idx] = el;
              }}
            >
              <div
                className={`bg-gradient-to-r ${section.gradient} p-8 rounded-3xl text-white space-y-4`}
              >
                <section.icon className="w-10 h-10 mb-4" />
                <h2 className="text-3xl font-bold">{section.title}</h2>
                <p className="text-white/90">{section.shortDesc}</p>
              </div>

              <div className="p-8 mt-3 bg-card rounded-3xl border">
                <p className="italic text-foreground/80 mb-6">
                  {section.content.intro}
                </p>

                <div className="space-y-6">
                  {section.content.points.map((point, i) => (
                    <div key={i}>
                      <h3 className="font-bold text-foreground mb-2">
                        {point.label}
                      </h3>
                      <p className="text-foreground/70">{point.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* CTA */}
        </div>
      </div>
      <div className="bg-card container mx-auto  text-center py-12 rounded-3xl">
        <CheckCircle2 className="w-10 h-10 mx-auto mb-6 text-primary" />
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Ready to Get Started?
        </h2>
        <Link to="/register">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold inline-flex gap-2">
            Create Account <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TermsAndConditions;
