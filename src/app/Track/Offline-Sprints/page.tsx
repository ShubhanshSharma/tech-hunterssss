"use client";

import EventTemplate from "@/app/Components/Event Template/page";
import Image from "next/image";


export default function OfflineSprints() {
    return (
        <div id='OFFLINESPRINTS' className="OFFLINESPRINTS bg-black min-h-screen w-screen px-4 py-8 h-max flex flex-col items-center justify-around ">
            
            <h2 className=" offlineSprintsHeading relative mx-auto font-black text-white text-[40px] sm:text-[60px] lg:text-[90px]">
                OFFLINE SPRINTS
            </h2>

            <EventTemplate 
            title="techXchange: 8-Hour Sunday Sprint" 
            date="13th August, 2024"
            location="SDSF DAVV, Indore"
            >
                <h2>why we started it?</h2>
                <p>we asked our community how many of them wanted to build their own projects,<br/><br/><br/> and surprisingly, a lot of folks expressed that they always thought about building something but couldn't get started.<br/><br/>
                <Image src="https://i.imgur.com/TWngPid.jpeg" width={1200} height={1200} alt="Image 1" className=" object-cover"/>
                
                <br/><br/> when we pondered what was stopping people from pursuing their ideas and upskilling themselves, we found that some were proficient in tech, some were beginners,<br/><br/><br/> but all shared the desire to enhance their skills. however, "<em>procrastination</em>" was a common hurdle preventing them from diving into new projects and exploring fresh ideas.<br/><br/><br/> so, we came up with the idea of "<em>techXchange: an 8-hour sprint</em>" where people could sit in a room for 8 hours straight and work on their projects.</p>
                <h2>how we felt while doing it?</h2>
                <p>to be honest, we were somewhat nervous while organizing this event for two reasons: firstly, it would be our first event, and secondly, we were trying something new. at that time, many in-person events were being held in lavish cafes and bars, offering participants great food and cool swag. however, we lacked funds to provide such luxuries.<br/><br/> we decided to focus on providing a fun atmosphere, but without swag or food during the 8-hour sprint. i wondered if anyone would show up on a sunday without the lure of swag or food, but our community surprised us; around <strong>30 folks</strong> turned up and spent 8 hours building something.</p>
                <Image src="https://i.imgur.com/udxYGA2.jpeg" width={1200} height={1200} alt="Image 1" className=" object-cover"/>
                <h2>what folks did in those 8 hours?</h2>
                <p>we had a diverse group of people attending, from first-year students to those in their final year, pursuing different academic paths like btech, dual degrees in ai and data science, and masters of computer applications. some came with project ideas, while others were unsure where to start. our team members - rishabh, jansi, vinayak (myself), and nivesh - guided them on what they could build.<br/><br/> those proficient in tech helped first-year students with their first programs. there was plenty of interaction and doubt-solving among participants.</p>
                <Image src="https://i.imgur.com/DobLdhP.jpeg" width={1200} height={1200} alt="Image 1" className=" object-cover"/>
                <h2>output?</h2>
                <p>i'm proud to say that some attendees built their first calculator, others created their first landing page for a startup idea, and some even developed their first machine learning model. one person scraped a website, and a group collaborated on building a song recommendation system.<br/><br/>our team member Rishita installed Unity for the first time and built her first "flappy bird" game, and we are proud of the folks, at the end of the day, everyone expressed how much they enjoyed the experience and wanted more events like it. so, we continued these sprints for <strong>5-8 consecutive sundays</strong>, witnessing how people developed their projects.</p>
                {/* <Image src="./TechXchange_ 8-Hour Sunday Sprint_files/sundaysprint4.jpeg" alt="Image 4"/> */}
                <p>we believe in fostering a community of individuals who share a common interest, passion, and love for technology - we call them "<em>techhunterssss</em>".</p>
                <p>seeing the enthusiasm of the community members, we kind of arranged for some chips and all just to lighten up their mood (well, that was from our team's pocket, but yeah, that's what made us happy).</p>
            
                
                <Image src="https://i.imgur.com/ypgCfOT.jpeg" width={1200} height={1200} alt="Image 1" className=" object-cover"/>
                <div className="contributors flex flex-col gap-4">
                    <p><b>poster designer:</b> Rishita Gupta, Chakshu Gupta</p>
                    <p><b>content:</b> Jansi Goswami</p>
                    <p><b>pictures credit:</b> Rishabh Jaiswal</p>
                    <p><b>team:</b> Ananya Bind, Chakshu Gupta,Jansi Goswami, Nivesh Gaikwad,Rishabh Jaiswal,Rishita Gupta,Sarthak Tiwari, Vinayak Gavariya</p>
                </div>
                <p><em>written by <u>vinayak</u>, thinking of good times.</em></p>
            </EventTemplate>

        </div>
    )
}