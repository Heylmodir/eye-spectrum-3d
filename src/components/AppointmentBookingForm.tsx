import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar as CalendarIcon, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Chirurgie de la cataracte",
  "Chirurgie réfractive au laser",
  "Maladies de la rétine",
  "Glaucome",
  "Ophtalmologie pédiatrique",
  "Lentilles de contact",
  "Chirurgie esthétique du regard",
  "Visite Médicale du Permis",
  "Consultation générale",
];

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];

const appointmentSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, { message: "Le prénom doit contenir au moins 2 caractères" })
    .max(50, { message: "Le prénom ne peut pas dépasser 50 caractères" }),
  lastName: z
    .string()
    .trim()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères" })
    .max(50, { message: "Le nom ne peut pas dépasser 50 caractères" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Le numéro de téléphone doit contenir au moins 10 chiffres" })
    .max(20, { message: "Le numéro de téléphone ne peut pas dépasser 20 caractères" })
    .regex(/^[0-9\s+()-]+$/, { message: "Format de téléphone invalide" }),
  date: z.date({
    required_error: "Veuillez sélectionner une date",
  }),
  time: z.string({
    required_error: "Veuillez sélectionner un horaire",
  }),
  service: z.string({
    required_error: "Veuillez sélectionner un service",
  }),
  notes: z
    .string()
    .trim()
    .max(500, { message: "Les notes ne peuvent pas dépasser 500 caractères" })
    .optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

const AppointmentBookingForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      notes: "",
    },
  });

  const onSubmit = async (data: AppointmentFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Format the appointment data
      const formattedDate = format(data.date, "PPP", { locale: fr });
      const appointmentData = {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        date: formattedDate,
        time: data.time,
        service: data.service,
        notes: data.notes || "",
        timestamp: new Date().toISOString(),
      };

      // Send to Google Sheets via edge function
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-appointment`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(appointmentData),
          }
        );

        if (!response.ok) {
          console.error("Edge function error:", response.status);
        }
      } catch (webhookError) {
        console.error("Google Sheets webhook error:", webhookError);
        // Continue even if webhook fails
      }

      toast({
        title: "Rendez-vous demandé",
        description: "Nous vous contactons bientôt pour confirmer votre rendez-vous.",
      });

      // Redirect to thank you page
      navigate("/merci");
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppBooking = () => {
    const values = form.getValues();
    
    // Validate required fields
    if (!values.firstName || !values.lastName || !values.phone || !values.date || !values.time || !values.service) {
      toast({
        title: "Champs requis manquants",
        description: "Veuillez remplir tous les champs obligatoires avant de contacter via WhatsApp",
        variant: "destructive",
      });
      return;
    }

    // Format the message with appointment details
    const formattedDate = format(values.date, "PPP", { locale: fr });
    const message = `Bonjour Dr Kenza Tazi,

Je souhaite prendre rendez-vous pour une consultation.

📋 Informations du patient:
Nom: ${values.lastName}
Prénom: ${values.firstName}
Téléphone: ${values.phone}

📅 Rendez-vous souhaité:
Date: ${formattedDate}
Heure: ${values.time}
Service: ${values.service}

${values.notes ? `📝 Notes:\n${values.notes}` : ""}

Merci de me confirmer la disponibilité.`;

    // WhatsApp phone number (format: country code + number without + or spaces)
    // Using the clinic's phone number: 0664474135
    const whatsappNumber = "212664474135"; // Morocco country code (212) + number
    
    // Create WhatsApp URL with pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Ouverture de WhatsApp",
      description: "Vous allez être redirigé vers WhatsApp avec les détails de votre rendez-vous",
    });
  };

  return (
    <div>
      <p className="text-muted-foreground mb-6">
        Remplissez le formulaire ci-dessous et nous vous contacterons pour confirmer votre rendez-vous
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prénom *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Jean"
                        {...field}
                        className="border-border focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Dupont"
                        {...field}
                        className="border-border focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Contact Fields */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Téléphone *</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="06 12 34 56 78"
                      {...field}
                      className="border-border focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Date and Time Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date du rendez-vous *</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "pl-3 text-left font-normal border-border hover:border-primary",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP", { locale: fr })
                            ) : (
                              <span>Sélectionner une date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date.getDay() === 0
                          }
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Horaire *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-border focus:border-primary">
                          <Clock className="mr-2 h-4 w-4 opacity-50" />
                          <SelectValue placeholder="Sélectionner un horaire" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Service Selection */}
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type de consultation *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-border focus:border-primary">
                        <SelectValue placeholder="Sélectionner un service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Notes Field */}
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes ou questions (optionnel)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Informations complémentaires, questions spécifiques..."
                      rows={4}
                      {...field}
                      className="border-border focus:border-primary resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-4">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-medical-red to-medical-red-dark hover:from-medical-red-dark hover:to-medical-red text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
              </Button>

              <Button
                type="button"
                size="lg"
                onClick={handleWhatsAppBooking}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Réserver via WhatsApp
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              Vous pouvez soit envoyer une demande via le formulaire, soit contacter directement le cabinet via WhatsApp
            </p>
          </form>
        </Form>
    </div>
  );
};

export default AppointmentBookingForm;
