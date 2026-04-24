import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const promos = [
  {
    icon: "Gift",
    title: "3-й час в подарок",
    subtitle: "При заказе от 2 часов",
    description: "Закажите аренду на 2 часа и получите третий час совершенно бесплатно. Успеете порадовать всех гостей.",
    color: "#156d95",
    highlight: true,
  },
  {
    icon: "Star",
    title: "Ковровая дорожка бесплатно",
    subtitle: "К любому пакету",
    description: "Красная ковровая дорожка с ограждением и стойками — создаёт атмосферу кинопремьеры на вашем мероприятии.",
    color: "#f59e0b",
    highlight: false,
  },
  {
    icon: "Camera",
    title: "Фирменные рамки бесплатно",
    subtitle: "Дизайн под ваше событие",
    description: "Создадим индивидуальный дизайн рамки с именами, датой и тематикой вашего праздника совершенно бесплатно.",
    color: "#8b5cf6",
    highlight: false,
  },
];

const packages = [
  {
    name: "Старт",
    duration: "2 часа",
    price: "от 8 000 ₽",
    features: ["Фотобудка или зеркало", "Печать без ограничений", "Реквизит в наборе", "Фирменная рамка"],
    cta: "Выбрать",
    popular: false,
  },
  {
    name: "Праздник",
    duration: "3 часа",
    price: "от 11 000 ₽",
    features: ["Любое оборудование", "Безлимитная печать", "Расширенный реквизит", "Ковровая дорожка", "Цифровой архив"],
    cta: "Популярный выбор",
    popular: true,
  },
  {
    name: "Вечеринка",
    duration: "5 часов",
    price: "от 17 000 ₽",
    features: ["Всё оборудование сразу", "Оператор весь вечер", "AI-фото в подарок", "Ковровая дорожка", "Фотокнига на память"],
    cta: "Выбрать",
    popular: false,
  },
];

export function PricingSection() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-white px-4 md:px-8" id="promo">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-[#156d95] font-mono mb-4">Акции</p>
          <h2 className="text-[40px] md:text-[48px] font-medium leading-tight text-[#111] max-w-[560px]">
            Специальные предложения для вашего праздника
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {promos.map((promo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`rounded-[28px] p-8 flex flex-col gap-5 cursor-default transition-all duration-300 ${
                promo.highlight
                  ? "bg-[#0f0f0f] text-white"
                  : "border border-[#e8e8e8] hover:shadow-lg hover:shadow-black/5"
              }`}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${promo.color}${promo.highlight ? "30" : "15"}` }}
              >
                <Icon name={promo.icon} size={22} style={{ color: promo.color }} />
              </div>
              <div>
                <p className="text-xs font-medium mb-1" style={{ color: promo.color }}>{promo.subtitle}</p>
                <h3 className={`text-xl font-semibold mb-3 leading-snug ${promo.highlight ? "text-white" : "text-[#111]"}`}>
                  {promo.title}
                </h3>
                <p className={`text-sm leading-6 ${promo.highlight ? "text-white/60" : "text-[#666]"}`}>
                  {promo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-[#156d95] font-mono mb-4">Пакеты</p>
          <h2 className="text-[40px] font-medium leading-tight text-[#111]">Выберите пакет</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-[28px] p-8 flex flex-col gap-6 relative ${
                pkg.popular
                  ? "bg-[#0f0f0f] text-white ring-2 ring-[#156d95]"
                  : "border border-[#e8e8e8]"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#156d95] text-white px-4 py-1.5 rounded-full text-xs font-semibold">
                  Популярный
                </span>
              )}
              <div>
                <p className={`text-xs uppercase tracking-widest font-mono mb-2 ${pkg.popular ? "text-[#156d95]" : "text-[#999]"}`}>
                  {pkg.duration}
                </p>
                <h3 className={`text-2xl font-semibold mb-1 ${pkg.popular ? "text-white" : "text-[#111]"}`}>{pkg.name}</h3>
                <p className={`text-3xl font-bold mt-3 ${pkg.popular ? "text-white" : "text-[#111]"}`}>{pkg.price}</p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {pkg.features.map((f, i) => (
                  <li key={i} className={`flex items-center gap-3 text-sm ${pkg.popular ? "text-white/70" : "text-[#555]"}`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${pkg.popular ? "bg-[#156d95]/40" : "bg-[#156d95]/10"}`}>
                      <Icon name="Check" size={12} className="text-[#156d95]" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:rounded-2xl ${
                  pkg.popular
                    ? "bg-[#156d95] text-white hover:bg-[#1a85b5]"
                    : "border border-[#e8e8e8] text-[#111] hover:border-[#156d95] hover:text-[#156d95]"
                }`}
              >
                Забронировать
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-[#999] mt-8"
        >
          Точная стоимость зависит от даты, адреса и дополнительных опций. Оставьте заявку — рассчитаем индивидуально.
        </motion.p>
      </div>
    </section>
  );
}
