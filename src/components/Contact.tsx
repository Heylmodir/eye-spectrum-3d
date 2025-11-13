import AppointmentBookingForm from "./AppointmentBookingForm";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contactez <span className="text-primary">Nous</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Prenez rendez-vous ou posez vos questions, nous sommes là pour vous
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                  <p className="text-muted-foreground">
                    Cabinet d'Ophtalmologie<br />
                    Oulad Mtaa<br />
                    Rabat Temara, Maroc
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:0664474135" className="hover:text-primary transition-colors">06 64 47 41 35</a><br />
                    <a href="tel:0530346820" className="hover:text-primary transition-colors">05 30 34 68 20</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:dr.ktazi@gmail.com" className="hover:text-primary transition-colors">
                      dr.ktazi@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Horaires</h3>
                  <p className="text-muted-foreground">
                    Lun - Ven: 9h - 17h30<br />
                    Sam: 9h - 13h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Booking Form */}
          <div>
            <AppointmentBookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
