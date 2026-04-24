import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

export const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", event: "", date: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const eventTypes = ["Свадьба", "Корпоратив", "День рождения", "Выпускной", "Другое"];

  return (
    <section className="w-full py-24 px-4 md:px-8 bg-[#0f0f0f]" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="text-xs uppercase tracking-widest text-[#156d95] font-mono mb-4">Заявка</p>
            <h2 className="text-[40px] md:text-[48px] font-medium leading-tight text-white mb-6">
              Забронируйте дату прямо сейчас
            </h2>
            <p className="text-white/50 leading-7 mb-10">
              Оставьте заявку — мы свяжемся в течение 15 минут, уточним детали и зафиксируем дату за вами.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: "Clock", title: "Ответ за 15 минут", text: "Работаем без выходных с 9:00 до 22:00" },
                { icon: "Shield", title: "Фиксируем дату", text: "После заявки дата закрепляется за вами" },
                { icon: "Sparkles", title: "Бесплатная консультация", text: "Подберём оборудование под ваш бюджет" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#156d95]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name={item.icon} size={18} className="text-[#156d95]" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{item.title}</p>
                    <p className="text-white/40 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#156d95]/20 flex items-center justify-center mb-6">
                    <Icon name="CheckCircle" size={32} className="text-[#156d95]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Заявка принята!</h3>
                  <p className="text-white/50 max-w-xs leading-6">
                    Мы перезвоним вам в течение 15 минут и уточним все детали мероприятия.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-white/40 uppercase tracking-wider">Ваше имя</label>
                      <input
                        type="text"
                        required
                        placeholder="Иван Иванов"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="bg-white/8 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#156d95]/60 transition-colors duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-white/40 uppercase tracking-wider">Телефон</label>
                      <input
                        type="tel"
                        required
                        placeholder="+7 (900) 000-00-00"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="bg-white/8 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#156d95]/60 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-white/40 uppercase tracking-wider">Тип мероприятия</label>
                    <div className="flex flex-wrap gap-2">
                      {eventTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm({ ...form, event: type })}
                          className={`px-4 py-2 rounded-full text-sm transition-all duration-150 ${
                            form.event === type
                              ? "bg-[#156d95] text-white"
                              : "bg-white/8 border border-white/10 text-white/60 hover:border-white/30"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-white/40 uppercase tracking-wider">Примерная дата</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="bg-white/8 border border-white/10 rounded-2xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#156d95]/60 transition-colors duration-200 [color-scheme:dark]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#156d95] text-white py-4 rounded-full text-base font-semibold hover:bg-[#1a85b5] hover:rounded-2xl transition-all duration-200 mt-2"
                  >
                    Отправить заявку
                  </button>
                  <p className="text-center text-xs text-white/25">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
