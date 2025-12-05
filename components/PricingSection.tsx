import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

interface PricingProps {
    id?: string;
}

const PricingSection: React.FC<PricingProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 px-4 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-purple/20 via-brand-dark to-brand-dark"></div>
      
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <p className="text-gray-400 text-lg mb-2">Investimento:</p>
          <p className="text-xl text-gray-500 line-through decoration-brand-gold decoration-2 mb-6">R$ 300</p>
          
          <div className="mb-8">
            <span className="text-6xl md:text-8xl font-serif text-white">R$ 80</span>
            <span className="block text-brand-gold mt-2 text-lg">ou 12x de R$ 8,03</span>
          </div>

          <a 
            href="https://pay.cakto.com.br/nngb8dm_660995"
            className="w-full md:w-auto bg-brand-gold hover:bg-yellow-600 text-brand-dark font-bold text-xl py-5 px-12 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all transform hover:scale-105 mb-8 inline-block"
          >
            SIM, QUERO MINHA VAGA
          </a>

          <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-gray-400 border-t border-white/10 pt-6">
             <span className="flex items-center justify-center gap-2"><ShieldCheck className="w-4 h-4"/> Pagamento 100% seguro</span>
             <span>💳 Cartão, PIX ou boleto</span>
             <span>📧 Acesso imediato por e-mail</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;