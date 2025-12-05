import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white border-t border-stone-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl text-brand-dark mb-12">Você tem duas escolhas.</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-stone-100 text-brand-muted"
          >
            <h3 className="font-bold text-brand-dark mb-4">Escolha 1:</h3>
            <p className="font-semibold mb-2">Continuar acumulando.</p>
            <p>Mais um livro. Mais um curso. Esperando que "algum dia" tudo se conecte.</p>
            <p className="mt-4">Sozinha na jornada. Sem rede de apoio. Sem ninguém que realmente entende.</p>
            <p className="mt-4 text-sm italic">(Spoiler: não vai.)</p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="p-8 rounded-2xl bg-brand-purple text-white shadow-xl transform md:scale-105"
          >
            <h3 className="font-bold text-white mb-4">Escolha 2:</h3>
            <p className="font-semibold mb-2">Parar de buscar lá fora. Começar a sentir aqui dentro.</p>
            <p>Descer da cabeça pro corpo.</p>
            <p className="mt-4 font-semibold text-brand-gold">E fazer isso junto com outras mulheres que estão no mesmo caminho.</p>
            <p className="mt-4">Em 2 horas, você vai sentir algo diferente. E mais importante: você não vai estar sozinha nisso.</p>
          </motion.div>
        </div>

        <div className="bg-brand-dark text-white rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="font-serif text-2xl mb-2">Última Chamada</h3>
                <div className="text-5xl font-serif mb-2">R$ 80</div>
                <div className="text-sm text-gray-400 mb-8">12x de R$ 8,03</div>
                
                <a 
                  href="https://pay.cakto.com.br/nngb8dm_660995"
                  className="bg-brand-gold hover:bg-yellow-600 text-brand-dark font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-transform hover:scale-105 inline-block"
                >
                    QUERO SENTIR DE VERDADE
                </a>
                
                <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 text-sm text-gray-300">
                    <span>✓ Gravação vitalícia</span>
                    <span>✓ Certificado oficial de conclusão</span>
                    <span>✓ Comunidade de praticantes</span>
                    <span>✓ 7 dias de garantia</span>
                </div>
                
                <div className="mt-6 text-brand-gold font-medium">
                   18 de Dezembro, 20h • Online no Zoom
                </div>

                <p className="mt-8 pt-8 border-t border-white/10 font-serif italic text-xl">
                    Você + outras mulheres na mesma busca.<br/>
                    Não mais sozinha.<br/><br/>
                    Te vejo lá dentro.<br/>
                    Stephanie 🙏
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;