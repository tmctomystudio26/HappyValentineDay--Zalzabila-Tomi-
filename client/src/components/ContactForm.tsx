import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useCreateMessage } from "@/hooks/use-messages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
  const { mutate, isPending } = useCreateMessage();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: InsertMessage) {
    mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-card rounded-2xl p-8 border border-border shadow-sm">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-serif font-semibold text-foreground">Send a Message</h3>
        <p className="text-muted-foreground mt-2">I'll respond within 24 hours.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Jane Doe" 
                    className="bg-background border-border/50 focus:border-primary/50 transition-all h-12" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="jane@example.com" 
                    className="bg-background border-border/50 focus:border-primary/50 transition-all h-12" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    className="bg-background border-border/50 focus:border-primary/50 transition-all min-h-[120px] resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full h-12 text-base font-medium transition-all"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
