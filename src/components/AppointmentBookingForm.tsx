import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
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
import { Card, CardContent } from "@/components/ui/card";
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
  email: z
    .string()
    .trim()
    .email({ message: "Adresse email invalide" })
    .max(255, { message: "L'email ne peut pas dépasser 255 caractères" }),
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      notes: "",
    },
  });

  const onSubmit = async (data: AppointmentFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Format the appointment data
      const appointmentData = {
        ...data,
        date: format(data.date, "PPP", { locale: fr }),
      };

      // Here you would typically send this to your backend/email service
      console.log("Appointment booking:", appointmentData);

      toast({
        title: "Demande de rendez-vous envoyée !",
        description: `Nous vous contacterons bientôt pour confirmer votre rendez-vous du ${appointmentData.date} à ${data.time}.`,
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-xl">
      <CardContent className="p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">Prendre Rendez-vous</h3>
          <p className="text-muted-foreground">
            Remplissez le formulaire ci-dessous et nous vous contacterons pour confirmer votre rendez-vous
          </p>
        </div>

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
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="jean.dupont@email.com"
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
            </div>

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

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-medical-red to-medical-red-dark hover:from-medical-red-dark hover:to-medical-red text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all"
            >
              {isSubmitting ? "Envoi en cours..." : "Confirmer le rendez-vous"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AppointmentBookingForm;
