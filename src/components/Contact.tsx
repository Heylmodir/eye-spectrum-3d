import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import AppointmentBookingForm from "./AppointmentBookingForm";

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

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Cabinet</h3>
                <p className="text-muted-foreground">
                  Dr Kenza Tazi<br />
                  Ophtalmologue
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Téléphone</h3>
                <p className="text-muted-foreground">
                  06 64 47 41 35<br />
                  05 30 34 68 20
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-muted-foreground">
                  dr.ktazi@gmail.com
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Horaires</h3>
                <p className="text-muted-foreground">
                  Lun - Ven: 9h - 18h<br />
                  Sam: 9h - 13h
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Appointment Booking Form */}
          <div className="lg:col-span-2">
            <AppointmentBookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
