import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 fixed z-10 w-full top-0'>
            <div className="w-[1200px] mx-auto flex justify-between text-white">
                <div className="">
                    <Link to="/" className='px-[20px]  h-full py-[10px] flex flex-col items-center justify-center 
                      hover:bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-b-lg'>
                            <ion-icon size="large" name="logo-react"></ion-icon>
                    </Link>
                </div>
                <div className="flex  items-center gap-x-5" >
                    <Link className='px-[10px] py-[10px] h-full font-semibold  rounded-b-lg  hover:bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]'  to="/">Home</Link>
                    <Link className='px-[10px] py-[10px] h-full font-semibold  rounded-b-lg  hover:bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]' to="/ourservices">Our Services</Link>
                    <Link className='px-[10px] py-[10px] h-full font-semibold  rounded-b-lg  hover:bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]' to="/ourportfolio">Our Portfolio</Link>
                    <Link className='px-[10px] py-[10px] h-full font-semibold  rounded-b-lg  hover:bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]'  to="/blog">Blog</Link>
                    <Link className='px-[10px] py-[10px] h-full font-semibold rounded-b-lg   hover:bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]' to="/pages">Pages</Link>
                    <Link className='px-[10px] py-[10px] h-full font-semibold  rounded-b-lg  hover:bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]' to="/contact">Contact</Link>
                  
                </div>
            </div>
        </div>
    );
}

export default Header;
