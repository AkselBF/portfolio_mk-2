import React from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import '../../Styles/Inputs/Inputs.css';
import '../../Styles/Scrollbars/TextareaScrollbar.css';

interface FormInputs {
  name: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormInputs>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  const watchName = watch("name", "");
  const watchSubject = watch("subject", "");
  const watchMessage = watch("message", "");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] sm:w-[70%] lg:w-[60%] mx-auto text-right">
      <div className="relative mb-6">
        <input
          {...register("name", {
            required: "Name is required",
            minLength: { value: 3, message: "Name must be at least 3 characters long" },
          })}
          type="text"
          id="name"
          maxLength={50}
          className={`bg-transparent border-b-2 border-[#75D6FF] p-2 w-full focus:outline-none focus:border-[#1260BC] transition-all ${watchName && 'filled'}`} 
          autoComplete="off"
        />
        <label htmlFor="name" className={`floating-label ${watchName && 'filled'}`}>Name</label>
        <div className="error-container">
          {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
        </div>
      </div>
      <div className="relative mb-6">
        <input
          {...register("subject")}
          type="text"
          id="subject"
          maxLength={50}
          className={`bg-transparent border-b-2 border-[#75D6FF] p-2 w-full focus:outline-none focus:border-[#1260BC] transition-all ${watchSubject && 'filled'}`} 
          autoComplete="off"
        />
        <label htmlFor="subject" className={`floating-label ${watchSubject && 'filled'}`}>Subject</label>
        <div className="error-container">
          {errors.subject && <p className="text-red-500 mt-1">{errors.subject.message}</p>}
        </div>
      </div>
      <div className="relative mb-6">
        <textarea
          {...register("message", {
            required: "Message is required",
            minLength: { value: 20, message: "Message must be at least 20 characters long" },
          })}
          id="message"
          maxLength={300}
          className={`text-message bg-transparent border-b-2 border-[#75D6FF] p-2 w-full h-32 focus:outline-none focus:border-[#1260BC] transition-all ${watchMessage && 'filled'}`} 
          autoComplete="off"
        ></textarea>
        <label htmlFor="message" className={`floating-label ${watchMessage && 'filled'}`}>Message</label>
        <div className="error-container">
          {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
        </div>
      </div>
      <button
        type="submit"
        disabled={!isValid}
        className={`contact-button bg-[#1260BC] text-white font-semibold px-12 py-2 rounded-md transition-all ${
          !isValid ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-blue-600'
        }`}
      >
        Send
      </button>
    </form>
  );
};

export default Contact;