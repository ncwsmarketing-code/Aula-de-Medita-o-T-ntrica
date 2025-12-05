import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-brand-dark text-white overflow-hidden py-20 px-4">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://picsum.photos/id/1042/1920/1080")' }} // Abstract/Moody image
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/90 to-brand-dark"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-brand-purple/30 border border-brand-purple/50 rounded-full px-4 py-1.5 text-sm font-medium text-purple-200 mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
          </span>
          Apenas 12 vagas • 18 de Dezembro
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          Você Já Leu os <span className="text-brand-gold italic">Livros Todos</span>.<br />
          Agora Precisa <span className="text-brand-gold italic">Sentir de Verdade</span>.
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10 font-light leading-relaxed"
        >
          <strong className="block text-white mb-2 font-medium">Aula ao vivo de Meditação Tântrica</strong>
          Para a mulher que já leu todos os livros, tem todos os cristais,<br className="hidden md:block" />
          mas ainda sente um vazio onde a espiritualidade deveria estar.
        </motion.p>

        {/* Details Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6 mb-10 text-sm md:text-base"
        >
          <div className="flex items-center gap-2 text-gray-300">
            <Calendar className="w-5 h-5 text-brand-gold" />
            <span>18 de Dezembro, 20h</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-700"></div>
          <div className="flex items-center gap-2 text-gray-300">
            <Clock className="w-5 h-5 text-brand-gold" />
            <span>2 horas ao vivo (Zoom)</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-700"></div>
          <div className="flex items-center gap-2 text-gray-300">
            <Sparkles className="w-5 h-5 text-brand-gold" />
            <span>Com Stephanie Borche</span>
          </div>
        </motion.div>

        {/* Price & CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="text-center">
             <span className="text-3xl font-serif text-white">R$ 80</span>
             <span className="block text-xs text-gray-400">ou 12x de R$ 8,03</span>
          </div>
          <a 
            href="https://pay.cakto.com.br/nngb8dm_660995"
            className="bg-brand-gold hover:bg-yellow-600 text-brand-dark font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all transform hover:scale-105 inline-block"
          >
            QUERO MINHA VAGA
          </a>
          <p className="text-xs text-gray-400 mt-2">
            Gravação incluída • Certificado oficial • Grupo de apoio • 7 dias de garantia
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;