import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 py-12 px-4 text-center border-t border-white/5 pb-32 md:pb-12">
      <div className="max-w-4xl mx-auto space-y-4">
        <p>📱 Dúvidas? WhatsApp: (69) 99904-8285</p>
        <p>📧 contato@estreladeventosolar.com.br</p>
        <p className="text-sm mt-8 opacity-50">© 2024 Stephanie Borche. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;