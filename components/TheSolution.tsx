import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TheSolution: React.FC = () => {
  const problems = [
    { if: "Se você só PENSA sobre presença", result: "Fica Na cabeça" },
    { if: "Se você só ESTUDA sobre energia", result: "Fica Na teoria" },
    { if: "Se você só LÊ sobre intuição", result: "Fica Confusa" },
  ];

  const solutions = [
    { if: "Se você SENTE presença no corpo", result: "Acontece Transformação" },
    { if: "Se você MOVE energia no corpo", result: "Acontece Real" },
    { if: "Se você PRATICA no corpo", result: "Acontece Clareza" },
  ];

  return (
    <section className="py-24 px-4 bg-brand-dark text-white overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
              Tantra é a <span className="text-brand-gold">ponte</span> que faltava.
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Não, não é sobre sexo. (Esse é o maior mito que inventaram.) <br/>
              Tantra é o sistema de 5.000 anos que ensina espiritualidade <strong>através</strong> do corpo, não apesar dele.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
            >
                {problems.map((item, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 opacity-70">
                        <div className="text-gray-400 text-sm mb-1">{item.if}</div>
                        <div className="text-white text-lg font-serif">→ {item.result}</div>
                    </div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
            >
                {solutions.map((item, idx) => (
                    <div key={idx} className="bg-brand-purple/20 backdrop-blur-sm p-6 rounded-xl border border-brand-gold/30 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                        <div className="text-brand-gold/80 text-sm mb-1">{item.if}</div>
                        <div className="text-white text-lg font-bold font-serif">→ {item.result}</div>
                    </div>
                ))}
            </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-2xl font-serif">
            Você já sabe de tudo. Agora precisa <span className="border-b-2 border-brand-gold">descer isso pro corpo</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TheSolution;