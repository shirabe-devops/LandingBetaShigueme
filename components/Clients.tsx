import React, { useState } from 'react';

// Logos de empresas
// NOTA: Para as imagens personalizadas, certifique-se de usar URLs públicas acessíveis 
// ou coloque as imagens na pasta 'public' do projeto e use caminhos como '/clientes/logo.png'
const clients = [
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg' },
  { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' },
  { name: 'Uber', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Samsung_Galaxy_A8_2018_logo.png' },
  { name: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' },
  // Clientes personalizados (Se a imagem falhar, o nome será exibido)
  { name: 'Amidos Crestani', logo: 'https://srv1781-files.hstgr.io/fe7fcdce51a60fef/files/public_html/clientes/amidoscrestani.jpeg' },
  { name: 'Amidos Nova Era', logo: 'https://srv1781-files.hstgr.io/fe7fcdce51a60fef/files/public_html/clientes/amidosnovaera.jpeg' },
  { name: 'Amidos Tia Lê', logo: 'https://srv1781-files.hstgr.io/fe7fcdce51a60fef/files/public_html/clientes/amidostiale.jpeg' },
  { name: 'Auris Ap. Auditivos', logo: 'https://srv1781-files.hstgr.io/fe7fcdce51a60fef/files/public_html/clientes/aurisaparelhosauditivos.jpeg' },
  { name: 'Goma Chico', logo: 'https://srv1781-files.hstgr.io/fe7fcdce51a60fef/files/public_html/clientes/gomachico.jpeg' },
  { name: 'Samak Pescados', logo: 'https://srv1781-files.hstgr.io/fe7fcdce51a60fef/files/public_html/clientes/samakpescados.jpeg' },
  { name: 'Vó Corinto', logo: 'https://srv1781-files.hstgr.io/fe7fcdce51a60fef/files/public_html/clientes/vocorinto.jpeg' },
];

const ClientLogo = ({ name, logo }: { name: string; logo: string }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 h-20">
      {!imgError ? (
        <img 
          src={logo} 
          alt={`Logo ${name}`} 
          className="h-8 md:h-10 max-w-[140px] object-contain" 
          loading="lazy"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-xs md:text-sm font-bold text-slate-500 text-center uppercase tracking-wide border border-slate-200 bg-slate-50 px-3 py-2 rounded-md shadow-sm w-full truncate" title={name}>
          {name}
        </span>
      )}
    </div>
  );
};

export const Clients: React.FC = () => {
  return (
    <div className="bg-white py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">
          Empresas que confiam na nossa expertise
        </p>
        
        {/* Layout em Grid Responsivo */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <ClientLogo key={`${client.name}-${index}`} name={client.name} logo={client.logo} />
          ))}
        </div>
      </div>
    </div>
  );
};