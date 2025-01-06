"use client";
import "@/app/style.css";
// import Image from 'next/image';
import primeCoverBackground from '@/public/assets/images/prime-cover.png';
import profilePhoto from '@/public/assets/images/ThePrimotionStudio.png';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Modal } from '@/components/layout/modal';


const About = () => {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
    const [currentDate, setCurrentDate] = useState<string | null>(null);
    const [timeOnSite, setTimeOnSite] = useState(0);
    const [command, setCommand] = useState("");
    const [username, setUsername] = useState("anonymous");
    const [help, setHelp] = useState(false);

    const handleDivClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    useEffect(() => {
        const user = localStorage.getItem('terminalPortfolioProfile');
        if (user) {
            setUsername(user);
        }
        const savedTime = sessionStorage.getItem('timeOnSite');
        if (savedTime) {
            setTimeOnSite(parseInt(savedTime)); // Load the saved time
        }
        const timer = setInterval(() => {
            setCurrentDate(new Date().toString());

            setTimeOnSite((prevTime) => {
                const updatedTime = prevTime + 1;
                sessionStorage.setItem('timeOnSite', updatedTime.toString());
                return updatedTime;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `Time on site: ${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };


    const linuxCommands = [
        "ls",
        "cd",
        "pwd",
        "mkdir",
        "rmdir",
        "touch",
        "rm",
        "cp",
        "mv",
        "chmod",
        "chown",
        "grep",
        "cat",
        "head",
        "tail",
        "chmod",
        "ssh",
        "sudo",
    ];

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === "Enter") {
            const cmd = command.toLowerCase().trim();
            setCommand("");
            switch (cmd) {
                case 'login':
                    let name = prompt("What is your name?");
                    name = name ? name.toLowerCase().replace(/\s/g, "") : '';
                    localStorage.setItem("terminalPortfolioProfile", name);
                    setUsername(name);
                    break;

                case 'logout':
                    localStorage.removeItem("terminalPortfolioProfile");
                    setUsername("anonymous");
                    break;

                case '?':
                case 'help':
                    setHelp(true);
                    break;

                case 'home':
                    router.push('/home');
                    break;

                case 'about':
                    router.push('/about');
                    break;

                case 'career':
                    router.push('/career');
                    break;

                case 'contact':
                    router.push('/contact');
                    break;

                default:
                    alert("I don't know that command");
                    break;
            }
            if (linuxCommands.includes(cmd)) {
                alert("Ahahaha, I can't be hacked!");
            }
        };
    };

    return (
        <div className="flex h-screen flex-col md:flex-row">
            <div className="w-full md:w-2/5 flex flex-col justify-start items-start gap-y-1 p-3 font-xs md:font-md">
                <p>Martins Okanlawon - Portfolio Terminal</p>
                <div className='hidden md:block'>

                    <p>Alias: Prime, The Primotion Studio</p>
                    <p>Version 2.3.4</p>
                    <p>Date: <span id="current_date">{currentDate ? currentDate : "Loading..."}</span></p>
                    <p>This is the virtual portfolio console of Prime.</p>
                    <br />
                    <p>Type 'login' to login a personalized console.</p>
                    <p>Type 'logout' to opt out of your personalized console.</p>
                    <br />
                    <p>1) <em>home</em> - A little bit about myself</p>
                    <p>2) <em>about</em> - A little more-bit about myself</p>
                    <p>3) <em>career</em> - My skills, projects, careers & experiences</p>
                    <p>4) <em>contact</em> - You wanna hire me? Contact Me!!! (Yippie&#x1F643; !)</p>
                </div>

                <p id="counter">{formatTime(timeOnSite)}</p>
                <div
                    className="command-box flex-1 w-full"
                    onClick={handleDivClick}>
                    <p className='flex'>┌──(
                        <em>
                            <span id="user">{username}</span>@theprimotionstudio
                        </em>
                        )<span className='hidden md:block'>-[~/
                            <span id="directory">home</span>
                            ]
                        </span>
                    </p>
                    <p>
                        └─$&nbsp;
                        <input
                            type="text"
                            id="command"
                            className="command bg-inherit focus:border-none focus:outline-none w-10/12"
                            name="command"
                            value={command}
                            onChange={(e) => setCommand(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder='Type `help` or `?` for help'
                            ref={inputRef}
                        />
                    </p>
                </div>
            </div>
            <div className="w-full md:w-3/5 flex flex-col bg-white items-center rounded-t-3xl md:rounded-t-none absolute md:relative bottom-0 md:top-0 h-4/5 md:h-full text-gray-900">
                <div className="mt-20 md:mt-24 mx-5 overflow-y-scroll flex-1">
                    <p className='text-gray-950'>
                        I am a very creative fullstack developer with 6 year experience in many programming paradigms and a recent graduate of Computer Science in Rivers State University and of Software Engineering at ALX Africa.
                        <br /><br />
                        I have Typescript and PHP as my forte for building Backend web services and I am flexible to whichever framework my team prefers to work with. However, I do have a personal preference which is Next.js because of its ease of integration with both frontend and backend.
                        <br /><br />
                        I am also skilled in many other languages and Frameworks like Python, Rust, React Native, and Tauri among others for applications in other sectors like Backend and Automated scripts.
                        <br /><br />
                        I use Linux every day, and it is my main operating system. I am quite familiar with terminal-based interfaces. This use has also helped me learn about web server setup, using tools like SSH, Nginx, Apache, and HAProxy. I also have a good base in cybersecurity.

                        I did a one-month internship in penetration testing with a cybersecurity firm in India. I have also talked with cybersecurity experts in my area to improve my knowledge and skills.
                        <br /><br />
                        I currently reside and work remotely from Port Harcourt, Rivers state.
                        <br /><br />
                        Attached is my resume for your perusal.
                        <br />
                        <a
                            href="/mycv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download="Martins Okanlawon CV.pdf"
                            className="text-blue-500 underline"

                        >
                            Download My Resume
                        </a>
                        <br /><br />

                        Below are links to some of my live projects and professional profile:
                        <br /><br />
                        1. <a href="https://theprimotionstudio.vercel.app/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">https://theprimotionstudio.vercel.app/</a>
                        <br />
                        2. <a href="https://theprimotionstudio.wordpress.com/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">https://theprimotionstudio.wordpress.com/</a>
                        <br />
                        3. <a href="https://github.com/primotionstudio/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">https://github.com/primotionstudio/</a>
                        <br />
                        4. <a href="https://linkedin.com/in/theprimotionstudio/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">https://linkedin.com/in/theprimotionstudio/</a>
                        <br /><br />
                        I believe it would give you an understanding of my creativity levels and proficiency in various domains.
                        <br /><br />
                        Thank you for reading up to this point.
                        <br /><br />
                        Good day and have a Happy New Year 😁<br />
                        Sincerely,<br />
                        Martins Okanlawon
                    </p>
                </div>
            </div>
            {help && (<Modal setShowHelp={setHelp} />)}
        </div >
    );
};

export default About;