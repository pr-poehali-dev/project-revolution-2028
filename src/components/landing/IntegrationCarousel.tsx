import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const equipment = [
  {
    id: "booth",
    title: "Классическая фотобудка",
    badge: "Хит",
    badgeColor: "#156d95",
    description: "Закрытая кабинка с профессиональной камерой, кольцевым светом и мгновенной печатью. Поместится любая компания — от пары до 8 человек.",
    features: ["Мгновенная печать", "Забавный реквизит", "Фирменная рамка", "Цифровой архив"],
    icon: "Camera",
    color: "#156d95",
    bg: "from-[#156d95]/10 to-[#156d95]/3",
  },
  {
    id: "mirror",
    title: "Селфи-зеркало",
    badge: "Премиум",
    badgeColor: "#8b5cf6",
    description: "Огромное зеркало в полный рост с сенсорным экраном, анимациями и голосовыми подсказками. Идеально для свадеб и корпоративов.",
    features: ["Рост 180 см", "Сенсорное управление", "Анимации и стикеры", "Печать за 8 сек"],
    icon: "Sparkles",
    color: "#8b5cf6",
    bg: "from-[#8b5cf6]/10 to-[#8b5cf6]/3",
  },
  {
    id: "ai",
    title: "AI-фотостанция",
    badge: "Новинка",
    badgeColor: "#10b981",
    description: "Нейросеть создаёт художественные портреты прямо на мероприятии. Аниме, масляная живопись, неон, 3D — за 30 секунд.",
    features: ["20+ AI-стилей", "Без интернета", "Печать и цифра", "WOW-эффект гарантирован"],
    icon: "Cpu",
    color: "#10b981",
    bg: "from-[#10b981]/10 to-[#10b981]/3",
  },
];

export const IntegrationCarousel = () => {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full py-24 px-4 md:px-8 bg-[#fafafa]" id="equipment">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-[#156d95] font-mono mb-4">Оборудование</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-[40px] md:text-[48px] font-medium leading-tight text-[#111] max-w-[500px]">
              Три формата. Один результат — восторг гостей.
            </h2>
            <button
              onClick={scrollToContact}
              className="shrink-0 bg-[#156d95] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#1a85b5] hover:rounded-2xl transition-all duration-200"
            >
              Узнать стоимость
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {equipment.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`bg-gradient-to-br ${item.bg} border border-black/6 rounded-[28px] p-8 flex flex-col gap-6 group cursor-default hover:shadow-xl hover:shadow-black/8 transition-all duration-300`}
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <Icon name={item.icon} size={24} style={{ color: item.color }} />
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: `${item.badgeColor}15`, color: item.badgeColor }}
                >
                  {item.badge}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#111] mb-3 leading-snug">{item.title}</h3>
                <p className="text-[#555] text-sm leading-6">{item.description}</p>
              </div>

              <ul className="flex flex-col gap-2.5 mt-auto">
                {item.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-[#444]">
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
