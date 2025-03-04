"use client";

import EventTemplate from "@/app/Components/Event Template/page";
import Image from "next/image";


export default function SyncupCall() {
    return (
        <div id='SYNCUPCALL' className="SYNCUPCALL bg-black min-h-screen w-screen px-4 py-8 h-max flex flex-col items-center justify-around ">
            
            <h2 className=" syncupCallHeading relative mx-auto font-black text-white text-[40px] sm:text-[60px] lg:text-[90px]">
                SYNC-UP CALL
            </h2>

            <EventTemplate 
            title="techhunterssss community syncup call" 
            date="february 4th, 7:30pm - 8:30 pm"
            location="SDSF DAVV, Indore"
            >
                <p><b>we conducted this community syncup to learn more about our community members and what they are building.</b> </p>
                {/* <Image src="./Remembering Our Community Meet_files/4thfeb.webp" alt="Meeting Image"> */}
                <Image src="https://i.imgur.com/HEgyJut.jpeg" width={1200} height={1200} alt="Image 1" className=" object-cover"/>

                <div className="post">
                    <p>remembering our meet makes me happy. it felt like talking to old friends, everyone sharing their stories.</p>
                    <br/><br/>
                    <p>We started with saying hi, making it friendly. Everyone talked about what they did in tech.</p>
                    <br/><br/>
                    <p><strong>Aashutosh</strong> shared his experience of participating in a hackathon held in Punjab, and he showed us excitement by showing us his cool project built using IoT, helping people with diabetes. We all liked it and wanted to see what he does with blockchain in the next hackathon in Gujarat.</p>
                    <br/><br/>
                    <p><strong>Harsh</strong>, always wanting to learn, was trying out blockchain and helping <strong>Aashutosh</strong> with Web3.</p>
                    <br/><br/>
                    <p>We wished <strong>Sahil</strong> and <strong>Lakshya</strong> good luck for starting their new semester.</p>
                    <br/><br/>
                    <p><strong>Shannn</strong>, joining from Karnataka, told us that he is exploring Python and Django. He shared some ideas and suggestions about the community.</p>
                    <br/><br/>
                    <p><strong>Sonali</strong>, busy going to tech events in Indore, showed she likes to learn new things.</p>
                    <br/><br/>
                    <p><strong>Varun</strong> thought we were all on mute, and it was funny, but we liked how he wants to do well in his next hackathon.</p>
                    <br/><br/>
                    <p><strong>Tushar</strong>, having an exam on the "Constitution of India," asked us to tell him laws he should learn for his exam.</p>
                    <br/><br/>
                    <p><strong>Vinamara</strong>, working on side hustle 'paperfry' to make it main hustle. </p>
                    <br/><br/>
                    <p><strong>Rudra</strong> and <strong>Maharishi</strong> joining us made the environment light as they pulled <strong>Vinayak</strong>'s leg about announcing the dates of HackHive.</p>
                    <br/><br/>
                    <p>when we asked what do you wanna learn, <strong>Sahil</strong>'s said, "Mujhe kuch bhi sikha do me toh baccha hu."</p>
                    <br/><br/>
                    <p>even if there were problems, like <strong>Isha Vinarma</strong>'s mic not working, we still had fun. We promised to meet again, happy about our shared love for learning.</p>
                    <br/><br/>
                    <p>our meet was more than just talking; it was a nice time with friends who like the same things.</p>
                </div>
                <p><em>written by <u>vinayak</u>, thinking of good times.</em></p>
            </EventTemplate>

        </div>
    )
}