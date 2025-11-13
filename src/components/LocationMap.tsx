import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const LocationMap = () => {
  // Coordinates for Dr Kenza TAZI - Rabat Temara
  const googleMapsUrl = "https://www.google.com/maps/place/Dr+Kenza+TAZI+-+Ophtalmologue+Rabat+Temara+-+Cabinet+d'ophtalmologie+Oulad+Mtaa+-+%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9+%D8%B7%D8%A8+%D9%88%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9+%D8%A7%D9%84%D8%B9%D9%8A%D9%88%D9%86%E2%80%AD/@33.9399635,-6.9001766,17z/data=!4m6!3m5!1s0xda71326e8b0c307:0x95f28dfdaf2365fa!8m2!3d33.9399635!4d-6.9001766!16s%2Fg%2F11wv595spx?entry=ttu&g_ep=EgoyMDI1MTExMC4wIKXMDSoASAFQAw%3D%3D";
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.1234567890!2d-6.9001766!3d33.9399635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda71326e8b0c307%3A0x95f28dfdaf2365fa!2sDr%20Kenza%20TAZI%20-%20Ophtalmologue%20Rabat%20Temara!5e0!3m2!1sfr!2sma!4v1234567890";

  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Notre Emplacement</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trouvez <span className="text-primary">Notre Cabinet</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Rabat Temara - Cabinet d'Ophtalmologie Oulad Mtaa
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          <Card className="hover:shadow-lg transition-all hover:border-medical-red/30 group">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 bg-medical-red/10 rounded-lg flex items-center justify-center group-hover:bg-medical-red/20 transition-colors">
                <MapPin className="w-6 h-6 text-medical-red" />
              </div>
              <h3 className="font-semibold text-lg">Adresse</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cabinet d'Ophtalmologie<br />
                Oulad Mtaa<br />
                Rabat Temara, Maroc
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:border-medical-red/30 group">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 bg-medical-red/10 rounded-lg flex items-center justify-center group-hover:bg-medical-red/20 transition-colors">
                <Phone className="w-6 h-6 text-medical-red" />
              </div>
              <h3 className="font-semibold text-lg">Téléphone</h3>
              <p className="text-muted-foreground text-sm">
                <a href="tel:0664474135" className="hover:text-medical-red transition-colors block">06 64 47 41 35</a>
                <a href="tel:0530346820" className="hover:text-medical-red transition-colors block">05 30 34 68 20</a>
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:border-medical-red/30 group">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 bg-medical-red/10 rounded-lg flex items-center justify-center group-hover:bg-medical-red/20 transition-colors">
                <Mail className="w-6 h-6 text-medical-red" />
              </div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-muted-foreground text-sm">
                <a href="mailto:dr.ktazi@gmail.com" className="hover:text-medical-red transition-colors">
                  dr.ktazi@gmail.com
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:border-medical-red/30 group">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 bg-medical-red/10 rounded-lg flex items-center justify-center group-hover:bg-medical-red/20 transition-colors">
                <Clock className="w-6 h-6 text-medical-red" />
              </div>
              <h3 className="font-semibold text-lg">Horaires</h3>
              <p className="text-muted-foreground text-sm">
                Lun - Ven: 9h - 18h<br />
                Sam: 9h - 13h
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Map Container with Red Frame */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-2xl -z-10 animate-pulse-soft" />
            
            {/* Main map container with red frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-medical-red group">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-medical-red-light z-10 pointer-events-none" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-medical-red-light z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-medical-red-light z-10 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-medical-red-light z-10 pointer-events-none" />
              
              {/* Google Maps Embed */}
              <iframe
                src={embedUrl}
                className="w-full h-[500px] md:h-[600px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Cabinet Dr Kenza Tazi"
              />
              
              {/* Google Maps Button Overlay */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-medical-red text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-medical-red/50 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-medical-red-light via-medical-red to-medical-red-light bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  
                  {/* Content */}
                  <div className="relative flex items-center gap-3">
                    <MapPin className="w-6 h-6" />
                    <span>Ouvrir dans Google Maps</span>
                    <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity" />
                </a>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-medical-red/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Floating red glow effects */}
            <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-medical-red/20 rounded-full blur-3xl -z-10 animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
            <div className="absolute -top-12 -left-12 w-72 h-72 bg-medical-red/15 rounded-full blur-3xl -z-10 animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
