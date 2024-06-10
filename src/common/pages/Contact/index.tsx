import React from "react";
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormInputs {
  name: string
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[60%] mx-auto text-right">
      <div className="mb-6">
        <label htmlFor="name" className="block text-white text-left mb-1">Name</label>
        <input {...register("name", { required: "Name is required" })} type="text" id="name" className="bg-transparent border-b-2 border-[#75D6FF] p-2 w-full" />
        {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="subject" className="block text-white text-left mb-1">Subject</label>
        <input {...register("subject", { required: "Subject is required" })} type="text" id="subject" className="bg-transparent border-b-2 border-[#75D6FF] p-2 w-full" />
        {errors.subject && <p className="text-red-500 mt-1">{errors.subject.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-white text-left mb-1">Message</label>
        <textarea {...register("message", { required: "Message is required" })} id="message" className="bg-transparent border-b-2 border-[#75D6FF] p-2 w-full h-32"></textarea>
        {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
      </div>
      <button type="submit" className="bg-[#1260BC] text-white font-semibold px-12 py-2 rounded-md hover:bg-blue-600">Send</button>
    </form>
  );
};

export default Contact;