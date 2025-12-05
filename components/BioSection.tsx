import React from 'react';
import { motion } from 'framer-motion';

const BioSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white border-y border-stone-200">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative"
        >
            <div className="absolute inset-0 rounded-full border-2 border-brand-gold transform rotate-6"></div>
            <img 
              src="https://picsum.photos/id/338/500/500" // Placeholder for Stephanie
              alt="Stephanie Borche" 
              className="w-full h-full object-cover rounded-full shadow-lg relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="font-serif text-3xl mb-6 text-brand-dark">Eu era exatamente você.</h2>
          <div className="space-y-4 text-brand-muted">
            <p>
              Lia tudo. Tentava tudo. Acumulava conhecimento como se isso fosse me proteger da vida.
              Sabia tudo sobre chakras na teoria. Vivia ansiosa na prática.
            </p>
            <p>
              Até que descobri uma verdade simples: <br/>
              <strong className="text-brand-dark">Espiritualidade que não desce pro corpo é só mais barulho mental.</strong>
            </p>
            <p>
              Parei de buscar lá fora. Comecei a sentir aqui dentro.
              E descobri que Tantra não era sobre o que eu pensava.
              Era sobre <strong>encarnar</strong> tudo que eu já sabia.
            </p>
            <p className="italic text-brand-purple pt-4">
              "Hoje, não te ensino nada novo. Eu te guio pra sentir o que você já sabe na cabeça mas esqueceu como acessar no corpo."
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t border-stone-200">
             <p className="font-serif text-xl text-brand-dark">Stephanie Borche</p>
             <p className="text-sm text-brand-muted uppercase tracking-wide">Terapeuta Tântrica • 5 anos guiando mulheres • 200+ praticantes</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BioSection;