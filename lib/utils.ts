import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {featureProps, fieldProps} from "@/types";
import {z} from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Invalid phone number"),
});

export const fields: fieldProps[] = [
  {
    name: "firstName",
    type: "text",
    placeholder: "First Name Here",
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "Last Name Here",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email Here",
  },
  {
    name: "phone",
    type: "number",
    placeholder: "Phone Number (Just so we can remind you of your appt)"
  }
]

export const features:featureProps[]  = [
  {
    icon:"./calendar.svg",
    title:"Flexible spaces & leases",
    description:"Leases as short as 6 months. Upscale or downscale anytime!"
  },  {
    icon:"./machine.svg",
    title:"All-inclusive warehousing",
    description:"Rental includes racking, equipment, loading docks & more!"
  },  {
    icon:"./key.svg",
    title:"Immediate availability",
    description:"Move in today!"
  },
]

export const images = ["/store.png","/working.png","/docks.png","/lobby.png"]

export const carouselImage = ["/background.png", "/store.png", "/docks.png",];