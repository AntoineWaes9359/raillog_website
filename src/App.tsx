import React, { useState, useEffect } from 'react';
import { Train, MapPin, Clock, BarChart3, Smartphone, Calendar, ArrowRight, Star, Users, Shield, Globe } from 'lucide-react';
import { useTranslation } from './hooks/useTranslation';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const { t, language, toggleLanguage } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Train className="w-6 h-6" />,
      title: t('features.smartTracking.title'),
      description: t('features.smartTracking.description')
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: t('features.upcomingTrips.title'),
      description: t('features.upcomingTrips.description')
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: t('features.analytics.title'),
      description: t('features.analytics.description')
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('features.routeMapping.title'),
      description: t('features.routeMapping.description')
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('features.delayTracking.title'),
      description: t('features.delayTracking.description')
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('features.security.title'),
      description: t('features.security.description')
    }
  ];

  const steps = [
    {
      number: "01",
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description')
    },
    {
      number: "02", 
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description')
    },
    {
      number: "03",
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description')
    }
  ];

  const stats = [
    { value: "10K+", label: t('stats.activeUsers') },
    { value: "500K+", label: t('stats.journeysLogged') },
    { value: "4.9★", label: t('stats.appRating') },
    { value: "150+", label: t('stats.supportedRoutes') }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-background to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-background/80 backdrop-blur-md border-b border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <Train className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-brand-text">RailLog</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-brand-text/70 hover:text-brand-primary transition-colors">{t('nav.features')}</a>
              <a href="#how-it-works" className="text-brand-text/70 hover:text-brand-primary transition-colors">{t('nav.howItWorks')}</a>
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-brand-text/70 hover:text-brand-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </button>
              <a href="#download" className="bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105">{t('nav.download')}</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl sm:text-6xl font-bold text-brand-text mb-6 leading-tight">
                {t('hero.title')}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent"> {t('hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-brand-text/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button className="group bg-brand-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2">
                  <Smartphone className="w-5 h-5" />
                  <span>{t('hero.downloadIOS')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-brand-text text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2">
                  <Smartphone className="w-5 h-5" />
                  <span>{t('hero.downloadAndroid')}</span>
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-brand-text mb-2">{stat.value}</div>
                  <div className="text-brand-text/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-brand-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
              {t('features.title')}
            </h2>
            <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-green-50/50 p-8 rounded-2xl hover:bg-brand-secondary/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-brand-secondary/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-secondary/50 transition-colors">
                  <div className="text-brand-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-4">{feature.title}</h3>
                <p className="text-brand-text/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-brand-secondary/20 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
              {t('howItWorks.title')}
            </h2>
            <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">
              {t('howItWorks.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-text mb-4">{step.title}</h3>
                <p className="text-brand-text/70 text-lg leading-relaxed max-w-sm mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 bg-brand-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-primary to-brand-accent rounded-3xl p-8 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  {t('preview.title')}
                </h2>
                <p className="text-green-100 text-lg mb-8 leading-relaxed">
                  {t('preview.subtitle')}
                </p>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-yellow-700" />
                    </div>
                    <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-green-700" />
                    </div>
                    <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-purple-700" />
                    </div>
                  </div>
                  <div className="text-green-100">
                    <div className="font-semibold">10,000+ {t('preview.happyTravelers')}</div>
                    <div className="text-sm">4.9★ {t('preview.averageRating')}</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-brand-primary px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                    {t('preview.downloadNow')}
                  </button>
                  <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    {t('preview.watchDemo')}
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-96 bg-brand-text rounded-3xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-b from-brand-secondary to-brand-primary rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <Train className="w-16 h-16 mx-auto mb-4" />
                      <div className="text-lg font-semibold">RailLog</div>
                      <div className="text-sm opacity-75">{t('preview.appPreview')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 bg-brand-text">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-brand-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2">
              <Smartphone className="w-5 h-5" />
              <span>{t('hero.downloadIOS')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-brand-accent text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-500 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2">
              <Smartphone className="w-5 h-5" />
              <span>{t('hero.downloadAndroid')}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <Train className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">RailLog</span>
            </div>
            <div className="flex items-center space-x-6 text-green-200">
              <a href="#" className="hover:text-white transition-colors">{t('footer.privacyPolicy')}</a>
              <a href="#" className="hover:text-white transition-colors">{t('footer.termsOfService')}</a>
              <a href="#" className="hover:text-white transition-colors">{t('footer.support')}</a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-green-300">
            <p>&copy; 2025 RailLog. {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;