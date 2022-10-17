import 'tw-elements';
import logo from './logo.svg';
import './Website.css';

function Website() {
    return (
        <>
            <nav className="fixed z-50 flex justify-between w-full h-16 bg-black/80 backdrop-blur-md">  {/* dobrać właściwy z-index */}
                <div className="flex text-[1.8rem] py-1.5 px-3 text-gray-300"><img src={logo} className="h-[2.5rem]"/>KSMicroband</div>
                <ul className="flex flex-row list-style-none">
                    <li className="text-[1.8rem] py-1.5 px-3 pl-6">
                        <a className="nav-link text-gray-300 hover:text-gray-500 focus:text-gray-500 p-0" href="#">o nas</a>
                    </li>
                    <li className="text-[1.8rem] py-1.5 px-3">
                        <a className="nav-link text-gray-300 hover:text-gray-500 focus:text-gray-500 p-0" href="#">muzyka</a>
                    </li>
                    <li className="text-[1.8rem] py-1.5 px-3">
                        <a className="nav-link text-gray-300 hover:text-gray-500 focus:text-gray-500 p-0" href="#">koncerty</a>
                    </li>
                    <li className="text-[1.8rem] py-1.5 px-3">
                        <a className="nav-link text-gray-300 hover:text-gray-500 focus:text-gray-500 p-0" href="#">kontakt</a>
                    </li>
                </ul>
                {/* switcher przykładowy - zrobić własny */}
                <div class="form-check form-switch">
                    <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label class="form-check-label inline-block text-gray-300" for="flexSwitchCheckDefault">dark mode</label>
                </div>                   
            </nav>
            <section className="top-0 h-screen mb-12 bg-fixed bg-center bg-cover bg-photo-1">
                <div className="w-screen h-screen bg-black/40 backdrop-blur-sm p-20">
                    <div className="flex items-center justify-center border-4 border-white/50 h-full">
                        <img src={logo} className="h-[25rem]" />
                    </div>
                </div>
            </section>
            <div className="max-w-lg m-auto h-full min-h-screen">
                <p>o nas</p>
            </div>
            <section className="flex items-center justify-center h-[66vh] m-auto mb-12 bg-fixed bg-center bg-cover bg-photo-2">
                {/* filtr do zdjęć*/}
                {/* before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-50" */}
            </section>
            <div className="max-w-lg m-auto h-full min-h-screen">
                <p>nagrania</p>
            </div>
            <section className="flex items-center justify-center h-[66vh] m-auto mb-12 bg-fixed bg-center bg-cover bg-photo-3">

            </section>
            <div className="max-w-lg m-auto h-full min-h-screen">
                <p>koncerty</p>
            </div>
            <section className="flex items-center justify-center h-[75vh] m-auto mb-12 bg-fixed bg-center bg-cover bg-photo-4">

            </section>
            <div className="max-w-lg m-auto h-[25vh]">
                <p>kontakt</p>
            </div>
        </>
    );
}

export default Website;