import React from 'react';
import { motion } from 'framer-motion';
import { Map, Zap, MessageCircle } from 'lucide-react';

const TheClass: React.FC = () => {
  const parts = [
    {
      icon: <Map className="w-8 h-8 text-brand-purple" />,
      time: "Primeira Parte (30 min)",
      title: "O Mapa",
      desc: "Entender por que você acumulou tanto sem conseguir praticar. Não é palestra. É o mapa que explica onde você está presa."
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-gold" />,
      time: "Segunda Parte (70 min)",
      title: "A Magia Acontece",
      desc: "Você vai PRATICAR comigo, ao vivo:",
      bullets: [
        "Respiração Tântrica (mover energia presa)",
        "Meditação nos 7 Centros (sensação real)",
        "Decodificar Mensagens (sentir o corpo)",
        "Despertar Sensibilidade (acessar intuição)"
      ],
      highlight: true
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-brand-purple" />,
      time: "Terceira Parte (20 min)",
      title: "Integração",
      desc: "Perguntas, respostas, e como levar isso pro dia a dia. Você vai aprender uma prática de 11 minutos por dia. Simples. Orgânica. Que cola porque não é forçada."
    }
  ];

  return (
    <section className="py-20 px-4 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-4">Essa não é uma aula.</h2>
          <p className="text-xl text-brand-muted uppercase tracking-widest text-sm font-bold text-brand-purple">É uma experiência de 2 horas ao vivo.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {parts.map((part, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative p-8 rounded-2xl ${
                part.highlight 
                  ? "bg-brand-dark text-white shadow-2xl scale-105 md:-mt-4 border border-brand-gold/30" 
                  : "bg-white text-brand-dark shadow-lg border border-stone-100"
              }`}
            >
              <div className="mb-6">{part.icon}</div>
              <span className={`text-xs font-bold uppercase tracking-wider ${part.highlight ? 'text-brand-gold' : 'text-brand-purple'}`}>
                {part.time}
              </span>
              <h3 className="font-serif text-2xl mt-2 mb-4">{part.title}</h3>
              <p className={`text-sm leading-relaxed ${part.highlight ? 'text-gray-300' : 'text-brand-muted'}`}>
                {part.desc}
              </p>
              
              {part.bullets && (
                <ul className="mt-6 space-y-3">
                  {part.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5 shrink-0"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheClass;