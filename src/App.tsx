import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Hammer, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Mail, 
  MapPin, 
  Phone,
  Plus,
  Minus,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-morphism py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className={`h-16 w-auto transition-all ${scrolled ? '' : 'brightness-0 invert'}`}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden flex items-center space-x-2">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl ${scrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
                  K
                </div>
                <span className={`text-2xl font-bold tracking-tighter ${scrolled ? 'text-primary' : 'text-white'}`}>
                  INOX<span className="text-accent">DESIGN</span>
                </span>
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contato" 
              className="bg-accent text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Solicitar Orçamento Grátis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-primary' : 'text-white'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-accent hover:bg-gray-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="#contato"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-accent text-white px-6 py-4 rounded-xl text-base font-bold shadow-md"
                >
                  Solicitar Orçamento Grátis
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" 
          alt="Projeto luxuoso de escada" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Segurança que Protege, <br />
            <span className="text-blue-400">Design que Valoriza</span> seu Imóvel.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
            Especialistas em Corrimão e Guarda-corpo de Aço Inox e Vidro Temperado. 
            Unimos durabilidade, modernidade e acabamento impecável para sua casa ou empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contato"
              className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-2xl group"
            >
              <MessageCircle className="mr-2 group-hover:animate-bounce" />
              Solicitar Orçamento Grátis
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-6 text-white/80">
            <div className="flex items-center">
              <CheckCircle2 className="text-blue-400 mr-2" size={20} />
              <span className="text-sm font-medium">Normas ABNT</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="text-blue-400 mr-2" size={20} />
              <span className="text-sm font-medium">Aço Inox 304</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="text-blue-400 mr-2" size={20} />
              <span className="text-sm font-medium">Garantia de Fábrica</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      title: "Durabilidade Extrema",
      desc: "Resistente à corrosão e ao tempo. Ideal para áreas internas, externas e litorâneas.",
      icon: <ShieldCheck className="text-accent" size={32} />
    },
    {
      title: "Manutenção Zero",
      desc: "Fácil de limpar e não precisa de pintura. O brilho do inox permanece por anos.",
      icon: <Clock className="text-accent" size={32} />
    },
    {
      title: "Segurança Certificada",
      desc: "Projetos dentro das normas da ABNT NBR 14718 para garantir a proteção total.",
      icon: <CheckCircle2 className="text-accent" size={32} />
    },
    {
      title: "Estética Moderna",
      desc: "O brilho do inox e a transparência do vidro trazem amplitude e sofisticação.",
      icon: <Star className="text-accent" size={32} />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Por que escolher o Aço Inox e o Vidro?</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 transition-all"
            >
              <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Guarda-corpo de Vidro e Inox",
      desc: "O equilíbrio perfeito entre transparência e resistência. Ideal para sacadas e mezaninos.",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Corrimão de Parede em Inox",
      desc: "Segurança indispensável para escadas, com ergonomia, firmeza e design minimalista.",
      img: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Guarda-corpo Panorâmico",
      desc: "Design minimalista que não obstrui a vista, garantindo segurança sem perder a paisagem.",
      img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Áreas de Piscina",
      desc: "Resistência total à umidade e produtos químicos. Segurança para sua área de lazer.",
      img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="produtos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-xl">Soluções sob medida que unem a resistência do aço inox 304 com a leveza do vidro temperado.</p>
          </div>
          <a href="#contato" className="mt-6 md:mt-0 text-accent font-bold flex items-center hover:underline">
            Ver todos os projetos <ChevronRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-xl transition-all">
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <a href="#contato" className="inline-flex items-center text-accent font-bold">
                  Solicitar Orçamento <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-10 bg-primary rounded-3xl text-white flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Projetos Especiais</h3>
            <p className="text-gray-400">Fazemos sob medida de acordo com a sua planta e necessidade específica.</p>
          </div>
          <a href="https://wa.me/5554999508583" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  const diffs = [
    { title: "Aço Inox 304", desc: "Utilizamos apenas materiais de primeira linha com alta resistência.", icon: <ShieldCheck /> },
    { title: "Instalação Limpa", desc: "Equipe própria treinada para não sujar ou danificar sua obra.", icon: <Hammer /> },
    { title: "Garantia de Fábrica", desc: "Garantimos a qualidade total do material e da instalação.", icon: <ShieldCheck /> },
    { title: "Atendimento VIP", desc: "Visita técnica para medição precisa e consultoria de design.", icon: <Star /> }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <img 
              src="https://images.unsplash.com/photo-1513584684374-8bdb74838a0f?auto=format&fit=crop&q=80&w=800" 
              alt="Nossos Diferenciais" 
              className="relative rounded-3xl shadow-2xl z-10"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Nossos Diferenciais</h2>
            <div className="space-y-8">
              {diffs.map((diff, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-xl text-accent">
                    {React.cloneElement(diff.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <div className="ml-5">
                    <h4 className="text-xl font-bold text-primary mb-1">{diff.title}</h4>
                    <p className="text-gray-600">{diff.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Roberto Silva",
      role: "Cliente Residencial",
      text: "O acabamento ficou perfeito! O pessoal foi muito profissional e entregou antes do prazo. Minha escada agora é o destaque da sala.",
      img: "https://i.pravatar.cc/150?u=roberto"
    },
    {
      name: "Mariana Costa",
      role: "Arquiteta",
      text: "Instalamos o guarda-corpo de vidro na nossa empresa e mudou totalmente o visual da recepção. Recomendo pela qualidade e precisão técnica!",
      img: "https://i.pravatar.cc/150?u=mariana"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">O que dizem nossos clientes</h2>
          <div className="flex justify-center space-x-1 text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-lg flex-grow">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Steps = () => {
  const steps = [
    { title: "Solicite seu Orçamento", desc: "Clique no botão e fale conosco pelo WhatsApp agora mesmo." },
    { title: "Visita Técnica", desc: "Vamos até o local tirar as medidas exatas e avaliar a estrutura." },
    { title: "Fabricação Sob Medida", desc: "Produzimos seu projeto com precisão milimétrica em nossa fábrica." },
    { title: "Instalação Profissional", desc: "Sua casa segura e bonita em poucos dias com equipe especializada." }
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Passo a Passo para sua Escada Nova</h2>
          <p className="text-gray-400">Processo simples, rápido e sem dor de cabeça para você.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-white/10 z-0" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl">
                {idx + 1}
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Solicite seu Orçamento Personalizado</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Preencha os dados abaixo e nossa equipe técnica entrará em contato para agendar uma visita ou enviar uma estimativa de valores.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-accent/10 p-3 rounded-xl text-accent mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">WhatsApp Direto</h4>
                  <p className="text-gray-600">(54) 99950-8583</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">E-mail</h4>
                  <p className="text-gray-600">contato@kdoishome.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      placeholder="Ex: João Silva"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-bold text-gray-700 mb-2">WhatsApp</label>
                    <input 
                      type="tel" 
                      id="whatsapp" 
                      required 
                      placeholder="(00) 00000-0000"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      placeholder="seuemail@exemplo.com"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-accent text-white py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-accent/20"
                  >
                    Enviar Solicitação
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4">
                    Prometemos não enviar spam. Seus dados estão seguros conosco.
                  </p>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Solicitação Enviada!</h3>
                  <p className="text-gray-600">
                    Obrigado pelo contato. Nossa equipe entrará em contato em breve.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "O aço inox enferruja?",
      a: "Utilizamos o Aço Inox 304, que possui alta resistência à oxidação. Em áreas litorâneas, ele é o material mais indicado pela sua durabilidade extrema contra a maresia."
    },
    {
      q: "Qual o prazo de entrega?",
      a: "Nosso prazo médio é de 15 a 20 dias úteis após a aprovação do projeto e medição técnica final."
    },
    {
      q: "Vocês atendem em qual região?",
      a: "Atendemos toda a região metropolitana e cidades vizinhas. Entre em contato para confirmar a disponibilidade em seu endereço."
    },
    {
      q: "Quais as formas de pagamento?",
      a: "Aceitamos cartões de crédito com parcelamento facilitado, PIX e boleto bancário para empresas."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Dúvidas Frequentes</h2>
          <p className="text-gray-600">Tudo o que você precisa saber antes de iniciar seu projeto.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-bold text-primary">{faq.q}</span>
                {openIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-gray-600 bg-white border-t border-gray-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-20 w-auto mb-6 brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center font-bold text-2xl text-white">
                  K
                </div>
                <span className="text-2xl font-bold tracking-tighter">
                  INOX<span className="text-accent">DESIGN</span>
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Elevando o padrão de segurança e design com as melhores soluções em aço inox e vidro.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/kdois.home" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/5 p-3 rounded-full hover:bg-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61555898638652" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/5 p-3 rounded-full hover:bg-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#produtos" className="hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#projetos" className="hover:text-white transition-colors">Projetos Realizados</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-accent" />
                (54) 99950-8583
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-blue-500" />
                contato@kdoishome.com.br
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-accent" />
                Caxias do Sul - RS
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Horário de Atendimento</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Segunda a Sexta: 08:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} – Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5554999508583" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 group"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale Conosco Agora!
      </span>
    </a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans text-primary selection:bg-accent/30">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Differentials />
        <Steps />
        <Testimonials />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
