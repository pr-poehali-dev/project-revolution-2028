import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: "Сколько времени нужно на установку?",
    answer: "Наш специалист приезжает за 1 час до начала мероприятия. Установка и настройка оборудования занимает 30–45 минут. К началу праздника всё будет готово к работе.",
  },
  {
    question: "Входит ли оператор в стоимость?",
    answer: "Да, во всех пакетах работает наш оператор. Он помогает гостям, следит за качеством снимков, устраняет технические вопросы и делает всё, чтобы ваши гости получали максимум удовольствия.",
  },
  {
    question: "Сколько фото можно сделать?",
    answer: "Количество снимков неограничено! В стоимость входит безлимитная печать на протяжении всей аренды. Каждый гость может сделать столько снимков, сколько захочет.",
  },
  {
    question: "Работаете ли вы за городом или в другом городе?",
    answer: "Мы работаем в Краснодаре и Краснодарском крае. Выезд за пределы города рассчитывается индивидуально в зависимости от расстояния. Уточните детали при оформлении заявки.",
  },
  {
    question: "Можно ли сделать фирменные рамки с нашим логотипом?",
    answer: "Конечно! Мы создаём индивидуальный дизайн рамки специально под ваше мероприятие — с именами, датой, логотипом компании или любой другой тематикой. Это входит в стоимость бесплатно.",
  },
  {
    question: "Что нужно для размещения фотобудки?",
    answer: "Нам нужна площадь 3×3 метра и розетка 220В рядом. Мы предусмотрим место заранее вместе с вами при согласовании деталей.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 px-4 md:px-8 bg-[#fafafa]" id="faq">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-24"
            >
              <p className="text-xs uppercase tracking-widest text-[#156d95] font-mono mb-4">FAQ</p>
              <h2 className="text-[40px] leading-tight font-medium text-[#111] tracking-tight mb-6">
                Часто задаваемые вопросы
              </h2>
              <p className="text-[#666] leading-6">
                Не нашли ответ? Напишите нам — ответим в течение 15 минут.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {defaultFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="border-b border-[#e5e5e5] last:border-b-0"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-6 text-left group hover:opacity-70 transition-opacity duration-150"
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-lg leading-7 text-[#202020] pr-8 font-normal">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      className="flex-shrink-0"
                    >
                      <Plus className="w-6 h-6 text-[#202020]" strokeWidth={1.5} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-12">
                          <p className="text-lg leading-6 text-[#666666]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
