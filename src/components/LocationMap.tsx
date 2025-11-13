import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // Coordinates for the location: https://maps.app.goo.gl/59rp7sLdMWzCott19
  const coordinates: [number, number] = [-7.6186, 33.5731]; // Casablanca, Morocco

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbTRpN2VoYm4waGcxMmtzNGJreXl2YW8yIn0.QEJgTmh_4XQV_aXqKvD4Tg';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: coordinates,
      zoom: 15,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Create a custom marker element
    const el = document.createElement('div');
    el.className = 'custom-marker';
    el.style.width = '40px';
    el.style.height = '40px';
    el.style.backgroundImage = 'url(https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png)';
    el.style.backgroundSize = 'cover';

    // Add marker
    new mapboxgl.Marker({
      color: '#A52A2A', // Burgundy red
    })
      .setLngLat(coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(
            '<div style="padding: 10px;"><strong style="color: #A52A2A;">Dr Kenza Tazi</strong><br/>Cabinet d\'Ophtalmologie</div>'
          )
      )
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

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
            Situé au cœur de Casablanca, facilement accessible
          </p>
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
              
              {/* Map */}
              <div ref={mapContainer} className="w-full h-[500px] md:h-[600px]" />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-medical-red/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Address Card Overlay */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-md">
              <div className="bg-background/95 backdrop-blur-md border-2 border-medical-red rounded-xl p-6 shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-foreground">Cabinet Dr Kenza Tazi</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Ophtalmologue<br />
                      Casablanca, Maroc
                    </p>
                    <a
                      href="https://maps.app.goo.gl/59rp7sLdMWzCott19"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-primary hover:text-primary/80 transition-colors text-sm font-semibold"
                    >
                      Ouvrir dans Google Maps
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
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
