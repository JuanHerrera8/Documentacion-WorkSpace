"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SLIDES, BLOCK_COLORS } from "./types";

// Import all slides
import { Slide01 } from "./slides/slide-01";
import { Slide02 } from "./slides/slide-02";
import { Slide03 } from "./slides/slide-03";
import { Slide04 } from "./slides/slide-04";
import { Slide05 } from "./slides/slide-05";
import { Slide06 } from "./slides/slide-06";
import {
  Slide07, Slide08, Slide09, Slide10, Slide11, Slide12,
  Slide13, Slide14, Slide15, Slide16, Slide17, Slide18,
  Slide19, Slide20, SlideCredits
} from "./slides/remaining-slides";

const SLIDE_COMPONENTS = [
  SlideCredits,
  Slide01, Slide02, Slide03, Slide04, Slide05, Slide06,
  Slide07, Slide08, Slide09, Slide10, Slide11, Slide12,
  Slide13, Slide14, Slide15, Slide16, Slide17, Slide18,
  Slide19, Slide20
];

export function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const totalSlides = SLIDE_COMPONENTS.length;

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
      setIsNavOpen(false);
    }
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    goToSlide(Math.min(currentSlide + 1, totalSlides - 1));
  }, [currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(Math.max(currentSlide - 1, 0));
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Escape") {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentSlideData = currentSlide > 0 && currentSlide <= SLIDES.length ? SLIDES[currentSlide - 1] : null;
  const isCreditsSlide = currentSlide === 0;
  const SlideComponent = SLIDE_COMPONENTS[currentSlide];
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-1 left-0 right-0 h-14 bg-slate-900/90 backdrop-blur-md border-b border-white/10 flex items-center px-4 md:px-6 gap-4 z-40">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <Menu className="w-5 h-5 text-slate-400" />
        </button>
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span className="font-mono text-sm font-bold text-indigo-400 shrink-0">Mercurio SED</span>
          <span className="text-slate-600">|</span>
          <span className="text-sm text-slate-400 truncate hidden sm:block">Documentación Técnica — Módulo Workspace</span>
        </div>
        <span className="font-mono text-xs bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full shrink-0">
          v2.0 | Abril 2026
        </span>
      </header>

      {/* Side Navigation */}
      <nav className={cn(
        "fixed top-[60px] left-0 w-72 h-[calc(100vh-60px)] bg-slate-900/95 backdrop-blur-md border-r border-white/10 overflow-y-auto z-30 transition-transform duration-300",
        isNavOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Navegación</span>
            <button onClick={() => setIsNavOpen(false)} className="p-1.5 rounded-lg hover:bg-slate-800 transition-colors">
              <X className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {SLIDES.map((slide, index) => {
            const blockColor = BLOCK_COLORS[slide.block];
            const isActive = currentSlide === index;

            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 mb-1",
                  isActive
                    ? "bg-indigo-500/20 border-l-2 border-indigo-500"
                    : "hover:bg-slate-800/50 border-l-2 border-transparent"
                )}
              >
                <span className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
                  isActive ? "bg-indigo-500 text-white" : "bg-slate-700 text-slate-400"
                )}>
                  {slide.step}
                </span>
                <div className="min-w-0 flex-1">
                  <span className={cn(
                    "text-sm font-medium block truncate",
                    isActive ? "text-white" : "text-slate-300"
                  )}>
                    {slide.title}
                  </span>
                  <span className={cn(
                    "text-[10px] uppercase tracking-wider",
                    blockColor.text
                  )}>
                    {slide.blockLabel}
                  </span>
                </div>
              </button>
            );
          })}

          {/* Credits link */}
          <button
            onClick={() => goToSlide(0)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 mt-4 border-t border-white/10 pt-4",
              currentSlide === 0
                ? "bg-indigo-500/20 border-l-2 border-indigo-500"
                : "hover:bg-slate-800/50 border-l-2 border-transparent"
            )}
          >
            <span className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
              currentSlide === 0 ? "bg-indigo-500 text-white" : "bg-slate-700 text-slate-400"
            )}>
              ★
            </span>
            <span className={cn(
              "text-sm font-medium",
              currentSlide === 0 ? "text-white" : "text-slate-300"
            )}>
              Créditos
            </span>
          </button>
        </div>
      </nav>

      {/* Overlay for mobile nav */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsNavOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 pt-[72px] pb-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
          {/* Slide Header */}
          {currentSlideData && !isCreditsSlide && (
            <div className="mb-8">
              <div className={cn(
                "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-4",
                BLOCK_COLORS[currentSlideData.block].bg,
                BLOCK_COLORS[currentSlideData.block].text
              )}>
                {currentSlideData.blockLabel}
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center font-mono text-lg font-bold text-indigo-400">
                  {String(currentSlideData.step).padStart(2, '0')}
                </span>
                <div>
                  <h1 className="font-mono text-2xl md:text-3xl font-bold text-white leading-tight">
                    {currentSlideData.title}
                  </h1>
                  <p className="text-slate-400 mt-1">{currentSlideData.subtitle}</p>
                </div>
              </div>
            </div>
          )}

          {/* Slide Content */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SlideComponent />
          </div>
        </div>
      </main>

      {/* Navigation Footer */}
      <footer className="fixed bottom-0 left-0 right-0 h-16 bg-slate-900/95 backdrop-blur-md border-t border-white/10 flex items-center justify-between px-4 md:px-8 z-40">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200",
            currentSlide === 0
              ? "text-slate-600 cursor-not-allowed"
              : "text-white bg-slate-800 hover:bg-slate-700 active:scale-95"
          )}
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Anterior</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-slate-400">
            {currentSlide + 1} / {totalSlides}
          </span>
          <div className="hidden md:flex items-center gap-1">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-200",
                  i === currentSlide
                    ? "w-6 bg-indigo-500"
                    : "bg-slate-700 hover:bg-slate-600"
                )}
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200",
            currentSlide === totalSlides - 1
              ? "text-slate-600 cursor-not-allowed"
              : "text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95"
          )}
        >
          <span className="hidden sm:inline">Siguiente</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </footer>

      {/* Keyboard hint */}
      <div className="fixed bottom-20 right-4 text-xs text-slate-600 hidden md:block">
        Usa ← → para navegar
      </div>
    </div>
  );
}
