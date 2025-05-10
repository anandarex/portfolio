import { BsGithub, BsSpotify, BsLinkedin, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { IoIosMail, IoIosCall } from 'react-icons/io';
import { userConfig } from '../../config/userConfig';
import { BsStickyFill } from 'react-icons/bs';
// import { RiTerminalFill } from 'react-icons/ri';
import { BsFilePdf } from 'react-icons/bs';
import { FaOdnoklassniki, FaOdnoklassnikiSquare } from 'react-icons/fa';

interface MobileDockProps {
  onGitHubClick: () => void;
  onNotesClick: () => void;
  onResumeClick: () => void;
  onTerminalClick: () => void;
}

export default function MobileDock({ onGitHubClick, onNotesClick, onResumeClick, onTerminalClick }: MobileDockProps) {
  const handleEmailClick = () => {
    window.location.href = `mailto:${userConfig.contact.email}`;
  };

  // const handleGithubClick = () => {
  //   window.open(userConfig.social.github, '_blank');
  // };

  // const handleSpotifyClick = () => {
  //   window.open(`https://open.spotify.com/playlist/${userConfig.spotify.playlistId}`, '_blank');
  // };

  return (
    <div className='fixed bottom-0 left-0 right-0 md:hidden flex flex-col items-center z-50 space-y-2'>
      {/* Top row: viewer icons */}
      <div className='mx-4 mb-4 p-3 rounded-3xl space-x-4 flex justify-around items-center max-w-[400px] mx-auto'>
        {/* <button
          onClick={onGitHubClick}
          className='flex flex-col items-center cursor-pointer'
        >
          <div className='w-18 h-18 bg-black rounded-2xl flex items-center justify-center'>
            <BsGithub size={55} className='text-white' />
          </div>
        </button> */}
        <button
          onClick={onNotesClick}
          className='flex flex-col items-center cursor-pointer'
        >
          <div className='w-18 h-18 bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-2xl flex items-center justify-center'>
            <BsStickyFill size={55} className='text-white' />
          </div>
        </button>
        <button
          onClick={onResumeClick}
          className='flex flex-col items-center cursor-pointer'
        >
          <div className='w-18 h-18 bg-gradient-to-t from-red-600 to-red-400 rounded-2xl flex items-center justify-center'>
            <BsFilePdf size={55} className='text-white' />
          </div>
        </button>

        <button
          onClick={handleEmailClick}
          className='flex flex-col items-center cursor-pointer'
        >
          <div className='w-18 h-18 bg-gradient-to-t from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center'>
            <IoIosMail size={55} className='text-white' />
          </div>
        </button>

        
        {/* <button
          onClick={onTerminalClick}
          className='flex flex-col items-center cursor-pointer'
        >
          <div className='w-18 h-18 bg-black rounded-2xl flex items-center justify-center'>
            <RiTerminalFill size={55} className='text-white' />
          </div>
        </button> */}
      </div>

      {/* Bottom row: contact shortcuts */}
      <div className='mx-4 mb-4 p-3 bg-gradient-to-t from-gray-700 to-gray-800 backdrop-blur-xl rounded-3xl space-x-4 flex justify-around items-center max-w-[400px] mx-auto'>
        <a href={`https://wa.me/+6289618914666/?text=Hello`} className='flex flex-col items-center'>
          <div className='w-18 h-18 bg-gradient-to-t from-green-600 to-green-400 rounded-2xl flex items-center justify-center'>
            <BsWhatsapp size={55} className='text-white' />
          </div>
        </a>

        <a href={userConfig.social.instagram} className='flex flex-col items-center'>
          <div className='w-18 h-18 bg-gradient-to-t from-yellow-300 to-purple-800 rounded-2xl flex items-center justify-center'>
            <BsInstagram size={50} className='text-pink-500' />
          </div>
        </a>

        <a href={userConfig.social.creatorresume} className='flex flex-col items-center'>
          <div className='w-18 h-18 bg-gradient-to-t from-purple-800 to-yellow-300 rounded-2xl flex items-center justify-center'>
            <FaOdnoklassniki transform='rotate(90)' size={50} className='text-pink-700' />
          </div>
        </a>

        {/* <button
          onClick={handleSpotifyClick}
          className='flex flex-col items-center cursor-pointer'
        >
          <div className='w-18 h-18 bg-gradient-to-t from-black to-black/55 rounded-2xl flex items-center justify-center'>
            <BsSpotify size={55} className='text-[#1ED760]' />
          </div>
        </button> */}
      </div>
    </div>
  );
}
