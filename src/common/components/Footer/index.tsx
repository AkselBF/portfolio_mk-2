import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] text-white px-12 py-6">
      <div className="container mx-auto justify-between flex flex-col md:flex-row">
        <div className='flex flex-col'>
          <div className='flex flex-row mb-3'>
            <p className='text-[#75D6FF] font-semibold mr-2'>Email:</p>
            <p>aksel.boutrouefaret@yahoo.com</p>
          </div>

          <div className='flex flex-row'>
            <p className='text-[#75D6FF] font-semibold mr-2'>Phone:</p>
            <p>+47 472 32 199</p>
          </div>
        </div>

        <div>
          <p className='text-[#75D6FF] font-semibold mb-3'>Social platforms:</p>
          <div className='flex flex-row space-x-3'>
            <FacebookIcon />
            <GitHubIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;