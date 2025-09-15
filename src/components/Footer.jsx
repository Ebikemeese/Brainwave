import { BsWhatsapp } from "react-icons/bs"
import Section from "./Section"
import { BiMailSend } from "react-icons/bi"


const Footer = () => {
    return (
        <Section
            crosses
            className='!px-0 !py-10'
        >
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-n-4 lg:block">{/*©{new Date().getFullYear()}. All rights reserved.*/}Developed by Ebikeme Ese</p>

                <ul className="flex gap-5 flex-wrap">
                    
                    <a className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6" href='https://wa.me/2348123208257' target='_blank'>
                        <BsWhatsapp />
                    </a>

                    <a className="flex lg:mr-4 xl:mr-4 md:mr-4 items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6" href='mailto:ebikemeese@gmail.com?subject=Brainwave' target='_blank'>
                        <BiMailSend />
                    </a>
                    
                </ul>
            </div>
            
        </Section>
    )
}

export default Footer