"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { sendEmail } from '@/utils/contact'

const CheckIcon = ({ ...props }) => (
    <svg { ...props } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>

)

const FormSchema = z.object({
    message: z
        .string()
        .min(10, {
            message: "Message must be at least 10 characters.",
        })
        .max(500, {
            message: "Message must be shorter than 500 characters.",
        }),
    email: z
        .string()
        .min(1, {
            message: "Please fill in your email.",
        })
        .email("This email is not valid.")
})

export default function ContactForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            const res = await sendEmail(data.email, data.message)
            form.reset({ message: '', email: '' })
            if (res.accepted.length > 0) {
                toast({
                    description: (
                        <div className="text-green-600 flex justify-center items-center"><CheckIcon className="w-6 h-6 mr-2" />Thank you, you will hear from me soon!</div>
                    )
                })
            }
        } catch (e) {
            console.log('Something went wrong sending email')
            toast({
                description: (
                    <div className="text-red-600 flex justify-center items-center">Something went wrong while trying to send email</div>
                )
            })
        }
    }

    return (
            <div className="max-md:w-full p-4 rounded border dark:border-gray-600 bg-black">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:min-w-[400px] min-w-[400px}">
                        <FormField
                            control={form.control}
                            name="email"
                            defaultValue=""
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="name@email.com" {...field} />
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
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Please tell me a bit about yourself and how I could be of service"
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
    )
}