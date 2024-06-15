import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../../Styles/Inputs/Inputs.css';
import '../../Styles/Scrollbars/TextareaScrollbar.css';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <div className="w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] mx-auto">
        <p className="mt-5 mb-10">You can reach me via the following contact info or platforms bellow. I'm always available so feel free to contact me at any time!</p>
      </div>

      <div className='flex flex-col mx-auto'>
        <div className='flex flex-col sm:flex-row text-left mb-3'>
          <p className='text-[#75D6FF] font-semibold mr-2'>Email:</p>
          <p>aksel.boutrouefaret@yahoo.com</p>
        </div>

        <div className='flex flex-row'>
          <p className='text-[#75D6FF] font-semibold mr-2'>Phone:</p>
          <p>+47 472 32 199</p>
        </div>
      </div>

      <div className='mt-6 md:mt-0'>
        <p className='text-[#75D6FF] font-semibold mt-10 mb-3 '>Social platforms:</p>
        <div className='flex flex-row justify-center space-x-6'>
          <a 
            href="https://www.linkedin.com/in/aksel-boutroue-faret-20b451228/"
            className="transition-transform transform hover:scale-110"
          >
            <LinkedInIcon
              className="text-white hover:text-[#75D6FF]"
              style={{ fontSize: '46px' }}
            />
          </a>

          <a 
            href="https://github.com/AkselBF" 
            className="transition-transform transform hover:scale-110"
          >
            <GitHubIcon
              className="text-white hover:text-[#75D6FF]"
              style={{ fontSize: '46px' }}
            />
          </a>

          <a 
            href="https://www.facebook.com/profile.php?id=100013820534458" 
            className="transition-transform transform hover:scale-110"
          >
            <FacebookIcon
              className="text-white hover:text-[#75D6FF]"
              style={{ fontSize: '46px' }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

/*
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
          className={`text-message bg-transparent border-b-2 border-[#75D6FF] p-2 w-full h-32 min-h-32 max-h-32 focus:outline-none focus:border-[#1260BC] transition-all ${watchMessage && 'filled'}`} 
          autoComplete="off"
        ></textarea>
        <label htmlFor="message" className={`floating-label ${watchMessage && 'filled'}`}>Message</label>
        <div className="error-container">
          {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
        </div>
      </div>
      <button
        type="submit"
        //disabled={!isValid}
        disabled={true}
        className={`contact-button bg-[#1260BC] text-white font-semibold px-12 py-2 rounded-md transition-all ${
          !isValid ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-blue-600'
        }`}
        title="Contact form is currently disabled"
      >
        Send
      </button>
    </form>
  );
};

export default Contact;
*/