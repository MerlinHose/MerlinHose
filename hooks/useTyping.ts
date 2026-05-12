"use client";

import { useEffect, useRef, useState } from "react";

interface UseTypingOptions {
  /** Strings to cycle through */
  words: string[];
  /** Delay between typing each character (ms) */
  typeSpeed?: number;
  /** Delay between deleting each character (ms) */
  deleteSpeed?: number;
  /** Pause on complete word before deleting (ms) */
  pauseAfterWord?: number;
  /** Pause before typing next word (ms) */
  pauseBeforeNext?: number;
}

export function useTyping({
  words,
  typeSpeed = 65,
  deleteSpeed = 35,
  pauseAfterWord = 1800,
  pauseBeforeNext = 300,
}: UseTypingOptions) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const tick = () => {
      setDisplayText((prev) => {
        if (!isDeleting) {
          const next = currentWord.slice(0, prev.length + 1);
          if (next === currentWord) {
            // Word complete — pause before deleting
            setIsPaused(true);
            timeoutRef.current = setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, pauseAfterWord);
          }
          return next;
        } else {
          const next = prev.slice(0, prev.length - 1);
          if (next === "") {
            // Deletion complete — pause before next word
            setIsPaused(true);
            timeoutRef.current = setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(false);
              setWordIndex((i) => (i + 1) % words.length);
            }, pauseBeforeNext);
          }
          return next;
        }
      });
    };

    if (!isPaused) {
      timeoutRef.current = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, wordIndex, isPaused, words, typeSpeed, deleteSpeed, pauseAfterWord, pauseBeforeNext]);

  return { displayText, isDeleting };
}
