import React from 'react';
import { motion } from 'framer-motion';
import { Video, Mic, FileText, CheckCircle, Users, Award } from 'lucide-react';

const WhatsIncluded: React.FC = () => {
  const items = [
    { 
      icon: Video, 
      title: "Aula ao vivo no Zoom (2 horas)", 
      desc: "Eu guio você em tempo real. Não é gravado, é VIVO." 
    },
    { 
      icon: Video, 
      title: "Gravação vitalícia", 
      desc: "Pra você praticar quantas vezes quiser, quando quiser." 
    },
    { 
      icon: Mic, 
      title: "Áudio guiado de 33 minutos", 
      desc: "A meditação completa pra você fazer sozinha." 
    },
    { 
      icon: FileText, 
      title: "PDF: Ritual do Fogo", 
      desc: "Técnica ancestral de liberação emocional." 
    },
    { 
      icon: CheckCircle, 
      title: "Prática diária de 11 minutos", 
      desc: "O método simples que transforma tudo." 
    },
    { 
      icon: Award, 
      title: "Certificado oficial de participação", 
      desc: "Você não vai só 'assistir uma aula'. Você vai COMPLETAR uma imersão. E ter o certificado que comprova isso. (Importante se você é terapeuta, facilitadora ou trabalha com desenvolvimento pessoal)" 
    },
    { 
      icon: Users, 
      title: "Sua tribo de praticantes", 
      desc: "Grupo privado no WhatsApp com mulheres que decidiram parar de só estudar e começar a SENTIR. Compartilham práticas, insights e apoio real. Não é grupo de seguidoras, é comunidade de iguais. Você vai finalmente conhecer pessoas que ENTENDEM de verdade." 
    },
  ];

  return (
    <section className="py-20 px-4 bg-brand-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center font-serif text-3xl mb-12 text-brand-dark">O que você recebe ao garantir sua vaga:</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow ${idx >= items.length - 2 ? 'md:col-span-2' : ''}`}
            >
              <div className="bg-brand-purple/10 p-3 rounded-full text-brand-purple shrink-0">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-brand-dark text-lg mb-1">{item.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;