"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import styles from "../styles/image.module.css"

export default function Questions() {
  const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


const questions = [
  { question: "What is Image APIs?", answer: defaultContent },
  { question: "How do I access Image APIs?", answer: defaultContent },
  { question: "What can I do in Image APIs?", answer: defaultContent },
  { question: "How can I acquire virtual real estate in Image APIs?", answer: defaultContent },
  { question: "Are there any in-game currencies or tokens?", answer: defaultContent }
];
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-7xl p-6 md:p-4 grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-1 mb-4">
        <div className="flex flex-col justify-center">
          <h2 className={styles.text_1}>FAQ</h2>
          <h1 className={`${styles.textBold} mt-2`}>
            <span className={styles.textColor}>Image APIs</span> planet
          </h1>
          <p className={`${styles.textSlim} mt-4`}>
            Nichelmage is a decentralized network that powers the image generation API.
          </p>
        </div>
        <div className="p-3">
          <Accordion>
            {questions.map((ques, index) => (
              <AccordionItem key={index} aria-label={`Accordion ${index + 1}`} title={ques.question}>
                <div className={styles.answers}>
                  {ques.answer}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}