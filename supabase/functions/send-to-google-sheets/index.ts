import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AppointmentData {
  firstName: string;
  lastName: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  notes?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhookUrl = Deno.env.get('GOOGLE_SHEETS_WEBHOOK_URL');
    
    if (!webhookUrl) {
      console.error('GOOGLE_SHEETS_WEBHOOK_URL not configured');
      return new Response(
        JSON.stringify({ error: 'Google Sheets webhook not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const appointmentData: AppointmentData = await req.json();
    
    console.log('Sending appointment data to Google Sheets:', appointmentData);

    // Send data to Google Sheets webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointmentData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Sheets webhook error:', errorText);
      throw new Error(`Google Sheets webhook failed: ${response.status}`);
    }

    // We don't rely on the response body format (it may be HTML or text)
    const responseText = await response.text();
    console.log('Google Sheets webhook response:', responseText);

    return new Response(
      JSON.stringify({ success: true, message: 'Appointment saved to Google Sheets' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Error in send-to-google-sheets function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
};

serve(handler);
