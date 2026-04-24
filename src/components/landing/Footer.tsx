import { motion } from "framer-motion";
import { Phone, Mail, Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5"
          >
            <h3 className="text-2xl font-bold text-white mb-3">ФотоМомент</h3>
            <p className="text-white/50 text-sm leading-6 max-w-xs mb-8">
              Аренда фотобудки и селфи-зеркала для незабываемых мероприятий в Краснодаре.
            </p>

            <div className="flex flex-col gap-3">
              <a href="tel:+79001234567" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-150 text-sm">
                <Phone className="w-4 h-4 text-[#156d95]" />
                +7 (900) 123-45-67
              </a>
              <a href="mailto:info@fotomoment.ru" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-150 text-sm">
                <Mail className="w-4 h-4 text-[#156d95]" />
                info@fotomoment.ru
              </a>
              <span className="flex items-center gap-3 text-white/60 text-sm">
                <Instagram className="w-4 h-4 text-[#156d95]" />
                @fotomoment_krd
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <h4 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">Навигация</h4>
            <ul className="space-y-3">
              {[
                { label: "Оборудование", href: "#equipment" },
                { label: "Как это работает", href: "#how" },
                { label: "Акции и пакеты", href: "#promo" },
                { label: "Вопросы и ответы", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4"
          >
            <h4 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">Забронировать</h4>
            <p className="text-white/50 text-sm leading-6 mb-6">
              Оставьте заявку и мы свяжемся в течение 15 минут. Работаем без выходных.
            </p>
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-[#156d95] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-[#1a85b5] hover:rounded-2xl transition-all duration-200"
            >
              Оставить заявку
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-white/30">
            © {currentYear} ФотоМомент. Краснодар. Все права защищены.
          </p>
          <a href="#privacy" className="text-sm text-white/30 hover:text-white/60 transition-colors duration-150">
            Политика конфиденциальности
          </a>
        </motion.div>
      </div>
    </footer>
  );
};
