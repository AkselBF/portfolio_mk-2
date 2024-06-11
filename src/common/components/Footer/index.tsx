import React from 'react';
//import TeamsIcon from '../../../assets/icons/teamsIcon.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] text-white px-3 sm:px-12 pt-6 mb-10">
      <div className="container mx-auto justify-between flex flex-col md:flex-row">
        <div className='flex flex-col'>
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
          <p className='text-[#75D6FF] font-semibold mb-3 md:text-left'>Social platforms:</p>
          <div className='flex flex-row justify-center md:justify-end space-x-6'>
            <a 
              href="https://www.linkedin.com/in/aksel-boutroue-faret-20b451228/"
              className="transition-transform transform hover:scale-110"
            >
              <LinkedInIcon
                className="text-white hover:text-[#75D6FF]"
                style={{ fontSize: '32px' }}
              />
            </a>
            
            {/*<img src={`${TeamsIcon}`} alt='Teams icon' />*/}

            <a 
              href="https://github.com/AkselBF" 
              className="transition-transform transform hover:scale-110"
            >
              <GitHubIcon
                className="text-white hover:text-[#75D6FF]"
                style={{ fontSize: '32px' }}
              />
            </a>

            <a 
              href="https://www.facebook.com/profile.php?id=100013820534458" 
              className="transition-transform transform hover:scale-110"
            >
              <FacebookIcon
                className="text-white hover:text-[#75D6FF]"
                style={{ fontSize: '32px' }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;