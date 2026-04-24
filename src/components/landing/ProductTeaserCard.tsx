import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";

export const ProductTeaserCard = () => {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToEquipment = () => {
    const el = document.querySelector("#equipment");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full px-4 md:px-8 pt-28 pb-16" id="home">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
            className="col-span-12 lg:col-span-7 bg-[#0f0f0f] rounded-[40px] p-10 lg:p-16 flex flex-col justify-between min-h-[520px] overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(circle, #156d95 0%, transparent 70%)" }} />

            <div>
              <motion.span
                initial={{ transform: "translateY(20px)", opacity: 0 }}
                animate={{ transform: "translateY(0px)", opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1], delay: 0.3 }}
                className="text-xs uppercase tracking-widest font-mono text-[#156d95] flex items-center gap-2 mb-8"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Краснодар · Аренда фотобудки и селфи-зеркала
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[48px] md:text-[60px] leading-[1.05] tracking-tight text-white font-medium mb-6"
              >
                Сделайте праздник{" "}
                <span className="text-[#156d95]">незабываемым</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg leading-7 text-white/60 max-w-[480px] mb-10"
              >
                Фотобудка и селфи-зеркало для свадеб, корпоративов и дней рождения. Это не просто фото — это аттракцион, который заставляет гостей улыбаться.
              </motion.p>
            </div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-3 flex-wrap"
            >
              <li>
                <button
                  onClick={scrollToContact}
                  className="block cursor-pointer text-white bg-[#156d95] rounded-full px-[20px] py-[15px] text-base leading-4 whitespace-nowrap transition-all duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] hover:rounded-2xl hover:bg-[#1a85b5]"
                >
                  Забронировать дату
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToEquipment}
                  className="block cursor-pointer text-white border border-white/20 rounded-full px-[20px] py-[15px] text-base leading-4 whitespace-nowrap transition-all duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] hover:rounded-2xl hover:border-white/40"
                >
                  Смотреть оборудование
                </button>
              </li>
            </motion.ul>
          </motion.div>

          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-gradient-to-br from-[#156d95]/15 to-[#156d95]/5 border border-[#156d95]/20 rounded-[28px] p-8 flex-1 flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#156d95]/20 flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-[#156d95]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#156d95] mb-2">Готово за 5 минут</p>
                <h3 className="text-[28px] font-medium text-[#111] leading-tight mb-2">Привезём, установим, уберём сами</h3>
                <p className="text-[#555] text-sm leading-6">Ваша задача — наслаждаться праздником. Техника, оператор и расходники включены.</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "300+", label: "Успешных мероприятий" },
                { num: "5 лет", label: "Работаем в Краснодаре" },
                { num: "∞", label: "Снимков за аренду" },
                { num: "24/7", label: "Поддержка в день события" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="bg-[#f5f5f5] rounded-[20px] p-5 flex flex-col gap-1"
                >
                  <span className="text-2xl font-semibold text-[#111]">{stat.num}</span>
                  <span className="text-xs text-[#666] leading-4">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
