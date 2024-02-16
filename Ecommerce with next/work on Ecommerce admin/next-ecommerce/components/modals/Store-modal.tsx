"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import axios from "axios";

import { zodResolver } from "@hookform/resolvers/zod";
import { useStoreModal } from "@/hooks/Use-store-modal";
import { Modal } from "@/components/ui/Modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1),
});
export const StoreModal = () => {
  const storeModal = useStoreModal();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  const onSumbit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // ToDo: Create Store
    try { 
      setLoading(true);

      console.log(values, '[STOREVALUES')
      const response = await axios.post("/api/stores", values);

      toast.success("store created.")

      console.log(response.data);
      window.location.assign(`/${response.data.id}`)

    } catch (error) {
    
      // toast.error("something went wrong")

      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Create store"
      description="Add New Store to manage categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}>
      <div>
        <div className="space-y-4 py-2 pb-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSumbit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name </FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="E-commerce------"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  disabled={loading}
                  variant={"outline"}
                  onClick={storeModal.onClose}>
                  Cancel
                </Button>
                <Button disabled={loading} type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
