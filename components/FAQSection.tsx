import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="font-serif text-lg text-brand-dark font-medium pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 text-brand-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-brand-muted leading-relaxed whitespace-pre-line">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Já fiz tantra antes. Vai ser diferente?",
      answer: "A maioria do tantra que você vê por aí foca em sexualidade. Esse aqui é diferente. É sobre trazer espiritualidade pro corpo através de práticas que você consegue fazer todo dia. Se você já tentou tantra e ficou frustrada, essa é exatamente a abordagem que faltava."
    },
    {
      question: "Eu já medito. O que isso adiciona?",
      answer: "Meditação tradicional te ensina a observar pensamentos. Meditação Tântrica te ensina a HABITAR o corpo. Uma acalma. A outra transforma."
    },
    {
      question: "Preciso ter experiência?",
      answer: "Não. Mas você precisa de: Já ter tentado ALGUMA prática espiritual, vontade de sentir (não só aprender) e cansaço de teoria sem prática. Se você tem isso, você está pronta."
    },
    {
      question: "E se eu não puder ao vivo?",
      answer: "Você recebe a gravação completa. Mas ao vivo é muito mais potente porque: É uma experiência coletiva, eu seguro o campo energético em tempo real e você tem suporte direto. Vem ao vivo se puder. Usa a gravação se não der."
    },
    {
      question: "Como é o grupo? Vou me sentir à vontade?",
      answer: (
        <div className="space-y-4">
          <p>O grupo é pra quem tá cansada de fingir que "tá tudo zen".</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-800 mb-2">Não tem:</p>
                <ul className="space-y-1 text-sm text-red-700">
                    <li>❌ Competição espiritual ("olha como eu sou evoluída")</li>
                    <li>❌ Julgamento ("você ainda sente isso?")</li>
                    <li>❌ Guru worship ("Stephanie é perfeita")</li>
                    <li>❌ Exposição forçada ("conta sua dor na frente de todos")</li>
                </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-800 mb-2">Tem:</p>
                <ul className="space-y-1 text-sm text-green-700">
                    <li>✅ Mulheres reais com jornadas reais</li>
                    <li>✅ Apoio genuíno nos dias difíceis</li>
                    <li>✅ Compartilhamento de práticas que funcionam</li>
                    <li>✅ Permissão pra ser humana E espiritual</li>
                </ul>
            </div>
          </div>
          <p>É um espaço seguro pra você ser VOCÊ. Com altos e baixos. Com dúvidas e certezas. Você não vai se sentir "menos que". Você vai se sentir ACOLHIDA.</p>
        </div>
      )
    },
    {
      question: "O certificado é reconhecido?",
      answer: "Você recebe um certificado oficial de participação na Imersão de Meditação Tântrica. É válido para: Seu portfólio profissional (se você trabalha com terapias/desenvolvimento), comprovar sua jornada de estudos e registro pessoal da sua transformação. Não substitui formação completa em tantra, mas comprova que você PRATICOU (não só leu sobre)."
    },
    {
      question: "Por que tá tão barato?",
      answer: "Porque não é sobre lucro máximo agora. É sobre criar uma comunidade de praticantes reais. Essa é a porta de entrada. Se você quiser ir mais fundo depois, existem outros programas. Mas começa aqui."
    }
  ];

  return (
    <section className="py-20 px-4 bg-brand-light">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl text-brand-dark text-center mb-12">Perguntas Frequentes</h2>
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;