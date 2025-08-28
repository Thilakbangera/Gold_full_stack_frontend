import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "Why is gold price prediction important?",
    answer:
      "The gold industry is highly dynamic, with price fluctuations affecting both buyers and sellers. Accurate prediction helps in better decision-making for investments, inventory, and financial planning."
  },
  {
    question: "What are the limitations of traditional gold valuation methods?",
    answer:
      "Traditional methods rely on expert opinions and historical data. While useful, they often lack efficiency, scalability, and objectivity when market conditions change rapidly."
  },
  {
    question: "How does machine learning improve gold price forecasting?",
    answer:
      "Machine learning analyzes complex patterns in large datasets. By using techniques like feature engineering and selection, ML models provide more accurate and data-driven predictions compared to traditional approaches."
  },
  {
    question: "Which algorithms are used in the prediction model?",
    answer:
      "The model applies the SARIMAX algorithm, which is effective in capturing seasonality and trends in time series data for accurate gold price forecasting."
  },
  {
    question: "How is model performance evaluated?",
    answer:
      "Performance is measured using metrics like Mean Absolute Percentage Error (MAPE), Root Mean Square Error (RMSE), and Mean Absolute Error (MAE). These metrics help assess accuracy and reliability."
  },
  {
    question: "Who benefits from accurate gold price predictions?",
    answer:
      "Stakeholders in industries such as automotive and finance can use insights from ML-driven predictions to make informed decisions about pricing, inventory management, and financial evaluations."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleIndex = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="max-w-4xl mx-auto p-6 md:p-12 text-white"
      aria-label="Frequently Asked Questions"
    >
      <h3 className="text-3xl font-semibold mb-10 text-center">FAQ</h3>

      <div className="space-y-4">
        {faqItems.map(({ question, answer }, i) => {
          const isOpen = i === openIndex;
          return (
            <div
              key={i}
              className="bg-white/10 glass rounded-lg shadow-lg p-5 cursor-pointer select-none"
              onClick={() => toggleIndex(i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleIndex(i);
              }}
            >
              {/* Question + Arrow */}
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold">{question}</h4>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold select-none"
                >
                  +
                </motion.span>
              </div>

              {/* Answer with smooth scaleY animation */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={`panel-${i}`}
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ transformOrigin: "top" }}
                    className="mt-3 text-white/80 overflow-hidden"
                  >
                    {answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
