import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Выбираете дату и оборудование",
    description: "Оставляете заявку или звоните. Вместе подбираем формат под ваше мероприятие — фотобудка, зеркало или AI-станция.",
    tag: "Бронирование",
    color: "#156d95",
  },
  {
    num: "02",
    title: "Мы приезжаем и всё настраиваем",
    description: "За час до начала наш специалист привезёт оборудование, установит и настроит. Расходники, реквизит и фон — уже с нами.",
    tag: "Подготовка",
    color: "#10b981",
  },
  {
    num: "03",
    title: "Гости фотографируются и веселятся",
    description: "На протяжении всего мероприятия наш оператор помогает гостям, следит за качеством и мгновенно печатает снимки.",
    tag: "Мероприятие",
    color: "#8b5cf6",
  },
  {
    num: "04",
    title: "Получаете все фото в цифре",
    description: "После события отправляем полный архив всех снимков в высоком качестве. Ваши воспоминания — навсегда.",
    tag: "Результат",
    color: "#f59e0b",
  },
];

export const CaseStudiesCarousel = () => {
  return (
    <section className="w-full py-24 px-4 md:px-8 bg-white" id="how">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-[#156d95] font-mono mb-4">Процесс</p>
          <h2 className="text-[40px] md:text-[48px] font-medium leading-tight text-[#111] max-w-[560px]">
            Как это работает
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="border border-[#e8e8e8] rounded-[28px] p-8 flex flex-col gap-6 group hover:shadow-lg hover:shadow-black/5 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between">
                <span
                  className="text-[56px] font-bold leading-none"
                  style={{ color: `${step.color}20` }}
                >
                  {step.num}
                </span>
                <span
                  className="text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: `${step.color}15`, color: step.color }}
                >
                  {step.tag}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111] mb-3 leading-snug group-hover:text-[#156d95] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[#666] text-sm leading-6">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
