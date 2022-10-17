import 'tw-elements';
import logo from './logo.svg';
import './Website.css';

function Website() {
    return (
        <>
            <header className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-photo-1">
                <div className="w-screen h-screen bg-black/40 backdrop-blur-sm p-20">
                    <div className="flex items-center justify-center border-4 border-white/50 h-full">
                        <img src={logo} className="h-[16rem]" />
                        {/* <h1 className="text-[10rem] text-neutral-50"><b>KSM</b>icroband</h1> */}
                    </div>

                </div>

{/* filtr do zdjęcia głównego */}
{/* saturate-[.75] grayscale-[30%] */}

{/* filtr do zdjęć*/}
{/* before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-50" */}
                

            </header>
            <div className="max-w-lg m-auto h-full min-h-screen">
                <p>o nas</p>
            </div>
            <section className="flex items-center justify-center h-[66vh] m-auto mb-12 bg-fixed bg-center bg-cover bg-photo-2">

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