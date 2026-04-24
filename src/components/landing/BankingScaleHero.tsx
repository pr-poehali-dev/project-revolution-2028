import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Laugh",
    title: "Гости не стоят у стены",
    description: "Фотобудка — это активное развлечение. Очередь выстраивается сама, атмосфера оживает.",
    color: "#f59e0b",
  },
  {
    icon: "Gift",
    title: "Память, которую увезут домой",
    description: "Мгновенная печать фото с фирменной рамкой — гости уходят с подарком от вас.",
    color: "#10b981",
  },
  {
    icon: "Star",
    title: "Уникальный контент для соцсетей",
    description: "AI-фильтры, GIF, бумеранг — гости публикуют, ваш праздник в сторис десятков людей.",
    color: "#8b5cf6",
  },
  {
    icon: "Users",
    title: "Работает для любого формата",
    description: "Свадьба, корпоратив, детский праздник, день рождения — будка подходит везде.",
    color: "#156d95",
  },
  {
    icon: "Zap",
    title: "Никакого стресса для вас",
    description: "Мы привозим, настраиваем и дежурим на мероприятии. Вы просто радуетесь.",
    color: "#ef4444",
  },
  {
    icon: "Sparkles",
    title: "AI-фотографии за секунду",
    description: "Нейросеть накладывает арт-стили прямо на месте — такого не сделает ни один фотограф.",
    color: "#06b6d4",
  },
];

export const BankingScaleHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById("benefits-section");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#0f0f0f] py-24 px-4 md:px-8" id="benefits-section">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-[#156d95] font-mono mb-4">Почему это работает</p>
          <h2 className="text-[40px] md:text-[48px] font-medium leading-tight text-white max-w-[600px]">
            Это не просто фото.{" "}
            <span className="text-white/40">Это главное развлечение вечера.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/5 border border-white/8 rounded-[24px] p-7 flex flex-col gap-4 cursor-default group hover:bg-white/8 transition-colors duration-300"
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <Icon name={item.icon} size={22} style={{ color: item.color }} />
              </div>
              <div>
                <h3 className="text-white font-medium text-lg mb-2 leading-snug">{item.title}</h3>
                <p className="text-white/50 text-sm leading-6">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
