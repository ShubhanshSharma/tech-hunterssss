"use client";

import EventTemplate from "@/app/Components/EventTemplate/EventTemplate";
import Image from "next/image";


export default function VirtualEvents() {
    return (
        <div id='VIRTUALEVENTS' className="VIRTUALEVENTS bg-black min-h-screen w-screen px-4 py-8 h-max flex flex-col items-center justify-around ">
            
            <h2 className=" virtualEventsHeading relative mx-auto font-black text-white text-[40px] sm:text-[60px] lg:text-[90px]">
                VIRTUAL EVENTS
            </h2>

            <EventTemplate 
            title="1. Community Lauch Day" 
            date=""
            location="virtual"
            >
                <h2><p><strong>title:</strong> "how to land your first internship from the tech community" </p></h2>
                <p><strong>speaker:</strong> Ishika Kesarwani, SDE at Dell, GitHub Campus Expert</p> 

                {/* <img src="./Community Events Summary_files/ishikas_event.jpeg" alt="Meeting Image"> */} 
                <Image src="https://i.imgur.com/1QiWWKF.jpeg" width={1200} height={1200} alt="Image 1" className=" object-cover"/>
                
                <p><strong>description:</strong> It was our community's very first event, and we were thrilled to see how many people joined us. Over 100 folks from cities like Indore, Dehradun, Bhilai, Pune, Dewas, and more came together to celebrate the launch of our community - "techhhunterssss". We want to give a big thank you to <a href="https://twitter.com/IshikaKesarwan4">@IshikaKesarwan4</a> for leading a really interesting talk, and to everyone who joined us, thank you for making it such a success!</p>
                <p>don't worry if you were unable to attend or missed out something, we have got you covered:</p>
                <ul>
                    <li>You can check out the <a href="https://www.youtube.com/watch?v=DrPhJzEKsEs&amp;list=PLVRN9rfbFZWqysTtyYB3JgTzqK5XpppUy&amp;index=1">recording here</a>.</li>
                    <li>Here is our <a href="https://twitter.com/TechHunterssss/status/1676969019285602304?s=20">Twitter thread summary</a> for the same.</li>
                </ul>
                <div className="contributors flex flex-col gap-4">
                    <p>poster design: Rishita Gupta</p>
                    <p>content: Divya Goyal</p>
                    <p>summary post: Divya Goyal</p>
                    <p>recording: Rishabh Jaiswal</p>
                    <p>host: Vinayak Gavariya</p>
                </div>
                <p><em>written by <u>vinayak</u>, thinking of good times.</em></p>
            </EventTemplate>

            <hr />
            
            <EventTemplate 
            title="2. insights on google summer of code and open-source" 
            date=""
            location="virtual"
            >

                <p><strong>title:</strong> "GSoC: Unlocking the doors of Open Source" </p>

                <p><strong>speaker:</strong> Sunit Roy, GSoC Contributor at Tenserflow, GitHub Campus Expert</p> 
                {/* <img src="./Community Events Summary_files/sunits_event.jpeg" alt="Meeting Image">
                <img src="./Community Events Summary_files/sunits_event1.jpeg" alt="Meeting Image"> */}
                <Image src="https://i.imgur.com/LaccdLl.jpeg" width={1200} height={1200} alt="Image 1" className=" object-cover"/>

                <p><strong>description:</strong> Sunit Roy, a GSoC contributor at TensorFlow, shared valuable insights in our second event. He talked about:</p>
                <ul className=" space-y-7">
                    <li>introduction to Google Summer of Code: understanding the basics of GSoC and its importance.</li>
                    <li>benefits of GSoC and open-source programs: learning why GSoC and open-source projects are beneficial for personal and professional growth.</li>
                    <li>minimum skill required to participate: knowing the basic skills needed for GSoC.</li>
                    <li>how to get into GSoC: getting practical tips on entering the GSoC program.</li>
                    <li>choosing a project for contribution: finding the right project to work on.</li>
                    <li>writing a good proposal: learning how to create an effective proposal.</li>
                    <li>how to contribute to pre-GSoC contribution: understanding the importance of contributing to open-source projects before GSoC.</li>
                    <li>what after getting selected for GSoC: knowing what to do once you're selected for GSoC.</li>
                </ul>
                <p>Sunit Roy's session provided a clear roadmap for aspiring GSoC participants, helping them kickstart their journey in open-source development.</p>

                <p>don't worry if you were unable to attend or missed out something, we have got you covered:</p>

                <p>you can check out the recording <a href="https://www.youtube.com/watch?v=VQ7GXnFG85I" className=" underline text-white"> here</a>.</p> <br/>
                <p>here is our <a href="https://x.com/TechHunterssss/status/1680875175548710915?s=20" className=" underline text-white">twitter thread summary</a> for the same.</p>
                <Image src="https://i.imgur.com/YRThCjh.jpeg" width={1200} height={1200} alt="Image 1" className=" object-cover"/>
                    
                    <div className="contributors">
                        <p>poster designer: Rishita Gupta</p>
                        <p>content: Divya Goyal</p>
                        <p>summary post: Divya Goyal</p>
                        <p>recording: Rishabh Jaiswal</p>
                        <p>host: Vinayak Gavariya</p>
                    </div>
                <p><em>written by <u>vinayak</u>, thinking of good times.</em></p>
            </EventTemplate>

            <EventTemplate 
            title="3. a three days workshop series on Python" 
            date=""
            location="virtual"
            >
                <p><strong>title:  </strong>  "Slithering Through The Streets of Python" </p>

                <p><strong>speaker:</strong> Rohit Choudhary, Application Engineer at Hexaview Technologies, Gold MLSA</p> 
                {/* <img src="./Community Events Summary_files/rohits_event.jpeg" alt="Meeting Image"> */}
                <Image src="https://i.imgur.com/Qmcag2d.jpeg" width={1200} height={1200} alt="Image 1" className=" object-cover"/>

                
                <p><strong>description:</strong> Attendees gained an understanding of Python as a versatile programming language known for its simplicity and readability. They learned about:</p>
                <ul className="list-disc space-y-7 pl-5">
                    <li>Applications of Python: discussed the wide-ranging applications of Python across various domains, including web development, data science, artificial intelligence, and more.</li>
                    <li>Python variables: explained the concept of variables in Python, highlighting their role as containers for storing data values with dynamically determined types.</li>
                    <li>Data types in Python: provided examples of different data types in Python, giving attendees a glimpse into the variety of data that can be handled.</li>
                    <li>Loops in Python: discussed loops as a fundamental control structure in Python for executing repetitive tasks.</li>
                    <li>Functions in Python: emphasized the importance of functions in Python for code organization, reuse, and modularity, showcasing how they facilitate the principle of "reduce/reuse code".</li>
                    <li>Arguments in Python: learned about the concept of arguments in Python functions, understanding how they enable flexible and parameterized behavior.</li>
                </ul>
                <p>don't worry if you were unable to attend or missed out something, we have got you covered:</p>

                <p>you can check out the recording<a href="https://youtu.be/BfAgQ93eveU?si=O29d3apM_QWNH2wf" className=" underline text-white"> here</a>.</p>
                <p>here is our <a href="https://x.com/TechHunterssss/status/1683862695874007042?s=20" className=" underline text-white">twitter thread summary</a> for the same.</p>
                <div className="contributors">
                    <p>poster designer: Rishita Gupta</p>
                    <p>content: Ananya Bind</p>
                    <p>summary post: Divya Goyal</p>
                    <p>recording: Rishabh Jaiswal</p>
                    <p>host: Ananya Bind</p>
                </div>
                <p><em>written by <u>vinayak</u>, thinking of good times.</em></p>
            </EventTemplate>


            <EventTemplate 
            title="4.  a three days workshop series on Python" 
            date=""
            location="virtual"
            >
            <p><strong>title:</strong> "Building our First API using Python." </p>

            <p><strong>speaker:</strong>  Shashwat Gupta, DevRel Intern at Keploy </p> 
            {/* <img src="./Community Events Summary_files/shashwats_event.png" alt="Meeting Image"> */}
            <Image src="https://i.imgur.com/Uvvsp9T.jpeg" width={1200} height={1200} alt="Image 1" className=" object-cover"/>

            
            <p><strong>description:</strong></p>
            <ul>
                <li>In today's digital world, APIs are like a common language for computers to talk to each other. Understanding how to build them is important.</li>
                <li>During the workshop, we learned how to make APIs using Python. With Shashwat's help, we got hands-on experience and learned how to create strong and efficient APIs.</li>
                <li>By the end, we knew the basics of APIs and felt confident making our own with Python. Thanks to Shashwat for leading this helpful workshop! We're excited for more chances to learn and grow together in the future.</li>
            </ul>
            <p>don't worry if you were unable to attend or missed out something, we have got you covered:</p>

            <p>you can check out the recording<a href="https://youtu.be/P31myX0urK8" className=" underline text-white"> here</a>.</p> 
            <p>here is our <a href="https://x.com/TechHunterssss/status/1684221451618992129?s=20" className=" underline text-white">twitter thread summary</a> for the same.</p>
                <div className="contributors">
                    <p>poster designer: Rishita Gupta</p>
                    <p>content: Divya Goyal</p>
                    <p>summary post: Divya Goyal</p>
                    <p>recording: Mohak Singhania</p>
                    <p>host: Vinayak Gavariya</p>
                </div>
        
                <p><em>written by <u>vinayak</u>, thinking of good times.</em></p>
            </EventTemplate>

            <EventTemplate 
            title="5. a resume building workshop" 
            date=""
            location="virtual"
            >
                <p><strong>title:</strong> "Mastering The Art of Resume Building: A Workshop For Everyone" </p>

                <p><strong>speaker:</strong> Arpita Das, Microsoft MVP, Software Engineer at YUBI</p> 
                <Image src="https://i.imgur.com/F1tMPxF.jpeg" width={1200} height={1200} alt="Image 1" className=" object-cover"/>
                {/* <img src="./Community Events Summary_files/arpitas_event.jpeg" alt="Meeting Image"> */}

                
                <p><strong>description:</strong></p>
                
                <p>
                    thanks to Arpita for a great session on resume building. here's a sneak peek if you missed it.
                </p>
                <p>
                    transform your resume into an ats-friendly document with these helpful tips. increase your chances of landing your dream job by following these guidelines. make a great first impression and stand out by optimizing your resume.
                </p>
                        
                <p>don't worry if you were unable to attend or missed out something, we have got you covered:</p>

                <p>you can check out the recording<a href="https://youtu.be/TP__8U-U-uM" className=" underline text-white"> here</a>.</p>
                <p> here is our <a href="https://x.com/TechHunterssss/status/1686284727597309952?s=20"className=" underline text-white">twitter thread summary</a> for the same.</p>
                <div className="contributors">
                    <p>poster designer: Rishita Gupta</p>
                    <p>content: Divya Goyal</p>
                    <p>summary post: Divya Goyal</p>
                    <p>recording: Rishabh Jaiswal</p>
                    <p>host: Vinayak Gavariya</p>
                </div>
        
                <p><em>written by <u>vinayak</u>, thinking of good times.</em></p>
            </EventTemplate>
        </div>
    )
}