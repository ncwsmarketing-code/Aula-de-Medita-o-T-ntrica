import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const TheMirror: React.FC = () => {
  const painPoints = [
    "Consome livros e cursos como se isso fosse resolver, mas na hora H, reage do mesmo jeito de sempre.",
    "Sua intuição fala, você até ouve, mas racionaliza tanto que perde a mensagem.",
    "Tem vergonha de admitir que ainda se sente sem rumo depois de tanto tempo nessa jornada.",
    "Sabe MUITA teoria, mas não consegue praticar no dia a dia (parece que precisa de 'condições especiais').",
    "Às vezes se sente uma fraude espiritual: 'Todo mundo evoluindo e eu aqui, sem sair do lugar'."
  ];

  return (
    <section className="py-20 px-4 bg-brand-light">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-6">
            O Espelho
          </h2>
          <div className="prose prose-lg mx-auto text-brand-muted">
            <p>
              Você sabe explicar o que são chakras. Conhece a diferença entre Ho'oponopono e Hooponopono.
              Já ouviu Osho, leu Eckhart Tolle, tem os cristais organizados.
            </p>
            <p className="font-medium text-brand-dark mt-4">
              Sua estante espiritual impressiona. Seu Instagram é uma curadoria impecável.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-brand-purple"
          >
            <h3 className="font-serif text-2xl mb-4 text-brand-dark">Mas...</h3>
            <p className="text-brand-muted mb-4">Segunda-feira, 7h da manhã.<br/>A ansiedade aperta.<br/>A reação automática volta.</p>
            <p className="font-bold text-lg text-brand-purple italic">
              "Por que nada do que eu aprendi funciona quando eu mais preciso?"
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-serif text-xl mb-4 text-brand-dark">Você já percebeu que:</h3>
            <ul className="space-y-4">
              {painPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-brand-purple shrink-0 mt-1" />
                  <span className="text-brand-muted text-sm md:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-brand-dark text-white p-8 rounded-xl"
        >
          <p className="text-lg md:text-xl font-serif">
            Se você acenou a cabeça pra qualquer uma dessas... <br/>
            <span className="text-brand-gold mt-2 block font-bold">Isso aqui é pra você.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TheMirror;