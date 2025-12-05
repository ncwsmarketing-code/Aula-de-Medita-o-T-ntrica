import React from 'react';
import { motion } from 'framer-motion';

const TheProblem: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
          <span className="uppercase tracking-widest text-xs font-bold text-brand-purple mb-4 block">
            A VERDADE QUE NINGUÉM FALA
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-8">
            O problema não é você.<br/>
            É onde você está.
          </h2>
          
          <div className="text-xl text-brand-muted space-y-6 leading-relaxed">
            <p>
              Você mora na cabeça. <br/>
              A espiritualidade mora no <strong className="text-brand-dark underline decoration-brand-gold decoration-2">corpo</strong>.
            </p>
            <p>
              Você já decorou todos os conceitos. Já entendeu todas as filosofias.
              Mas como você <strong>SE SENTE</strong> agora? Presente?
              Ou lendo isso enquanto a cabeça já pulou pra 15 outras coisas?
            </p>
          </div>

          <div className="my-12 p-6 bg-stone-50 border border-stone-200 rounded-lg text-left">
            <h3 className="font-serif text-xl mb-3 text-brand-dark">A culpa que você sente não é fracasso.</h3>
            <p className="text-brand-muted">
              Aquela vozinha que diz <em>"eu já deveria estar mais evoluída"</em> é apenas seu corpo pedindo atenção.
              Você não precisa de mais conhecimento. Você não tem "bloqueio espiritual".
            </p>
            <p className="mt-4 font-bold text-brand-purple">
              Você só esqueceu de trazer tudo isso pro corpo. E ninguém te ensinou como.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TheProblem;