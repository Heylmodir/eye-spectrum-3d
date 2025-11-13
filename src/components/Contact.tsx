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

        <div className="max-w-4xl mx-auto">
          {/* Appointment Booking Form */}
          <AppointmentBookingForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
