import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white text-center">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-2 border-brand-gold/30 rounded-2xl p-8 bg-brand-gold/5"
        >
          <BadgeCheck className="w-16 h-16 text-brand-gold mx-auto mb-6" />
          <h2 className="font-serif text-2xl text-brand-dark mb-4">Garantia de 7 Dias</h2>
          <p className="text-brand-muted mb-6">
            Participa da aula. Pratica comigo. Sente no corpo.
            <br/><br/>
            <strong>Se em até 7 dias você não sentir diferença,</strong> me manda um e-mail e eu devolvo 100% do valor.
            Sem perguntas. Sem enrolação.
          </p>
          <p className="font-serif text-brand-purple text-lg">Eu assumo o risco. Você só precisa aparecer.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;