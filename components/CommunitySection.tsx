import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Shield, Check } from 'lucide-react';

const CommunitySection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-widest text-xs font-bold text-brand-purple mb-4 block">
              VOCÊ NÃO VAI FAZER ISSO SOZINHA
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-8 leading-tight">
              Sabe qual é o maior problema de fazer mais um curso?
            </h2>
            
            <div className="text-lg text-brand-muted space-y-6 leading-relaxed">
              <p>
                É voltar pra vida exatamente como antes. <br/>
                Sozinha. Sem ninguém que entende. Sem rede de apoio.
              </p>
              <div className="p-6 bg-brand-light border-l-4 border-brand-gold rounded-r-xl">
                <h3 className="font-serif text-xl text-brand-dark mb-4">Essa aula é diferente.</h3>
                <p className="mb-4">
                  Você não vai só "assistir". Você vai se juntar a outras mulheres que:
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple mt-1">•</span>
                    Também já leram dezenas de livros espirituais
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple mt-1">•</span>
                    Também sentem aquela culpa de "não praticar o suficiente"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple mt-1">•</span>
                    Também cansaram de acumular sem integrar
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple mt-1">•</span>
                    <strong>Também querem SENTIR de verdade, não só entender</strong>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-brand-dark text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple rounded-full blur-3xl opacity-20 pointer-events-none"></div>
              
              <h3 className="font-serif text-2xl mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-brand-gold" />
                Não é um grupo de fãs.
              </h3>
              <p className="text-gray-300 mb-6">
                É uma comunidade de <strong>praticantes</strong>. Mulheres que decidiram parar de colecionar teoria e começar a encarnar.
              </p>
              
              <div className="space-y-3">
                <div className="font-bold text-white mb-2">Você vai conhecer pessoas que:</div>
                {[
                  "Falam a mesma língua espiritual que você",
                  "Não te julgam por ainda estar 'buscando'",
                  "Entendem que não é falta de vontade, é falta de prática",
                  "Estão no mesmo caminho: do mental pro corporal"
                ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand-gold shrink-0 mt-1" />
                        <span className="text-sm text-gray-300">{item}</span>
                    </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="font-serif text-xl text-brand-dark italic">
                "É o tipo de conexão que você não acha por aí. Não é superficial. É real."
              </p>
              <p className="text-brand-purple font-bold mt-4">Porque quando você encontra sua tribo, tudo fica mais fácil.</p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;