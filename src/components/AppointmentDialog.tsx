import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AppointmentBookingForm from "./AppointmentBookingForm";

interface AppointmentDialogProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const AppointmentDialog = ({ trigger, open, onOpenChange }: AppointmentDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Prendre Rendez-vous</DialogTitle>
        </DialogHeader>
        <AppointmentBookingForm />
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;
