"use client";
import "@/app/style.css";
import primeCoverBackground from '@/public/assets/images/prime-cover.png';
import profilePhoto from '@/public/assets/images/ThePrimotionStudio.png';
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Modal } from '@/components/layout/modal';


const Career = () => {
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

    const experiences = [
        {
            company: "Finaseed Ltd",
            role: "Backend Developer (Intern)",
            period: "August 2023 to January 2024",
            description: "Designed and implemented a robust backend system for real-time monetary transactions, ensuring the secure storage of critical data through a well-structured database and seamless API integration with the frontend team. I also oversaw the security of the backend system to prevent vulnerabilities and breaches.",
            logo: "/placeholder.svg?height=40&width=40"
        },
        {
            company: "Shef",
            role: "Software Engineer",
            period: "April 2021 to July 2022",
            description: "Developed the consumer web experience, chef onboarding and supply platform, and internal administrator tooling.",
            logo: "/placeholder.svg?height=40&width=40"
        },
        {
            company: "Koala",
            role: "Lead Engineer",
            period: "September 2019 to March 2021",
            description: "Worked on a 3D collaborative classroom application for independent tutors. Launched parent, tutor, and administrator web platforms for Oculus VR Spanish and reading tutoring service. Led primary Unity and Electron products supported on Mac, Windows, and WebGL.",
            logo: "/placeholder.svg?height=40&width=40"
        },
        {
            company: "Holberton School",
            role: "Software Engineering Student",
            period: "September 2018 to June 2019",
            description: "Completed the nine-month computer science, programming and full-stack web development curriculum.",
            logo: "/placeholder.svg?height=40&width=40"
        }
    ];

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
                <div className="max-w-3xl mx-auto pt-5">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Career History</h1>
                    <div className="space-y-6">
                        {experiences.map((experience, index) => (
                            <Card key={index} className="border-l-4 border-secondary bg-gray-100">
                                <CardContent className="pt-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={experience.logo}
                                                alt={`${experience.company} logo`}
                                                width={40}
                                                height={40}
                                                className="rounded-lg"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between">
                                                <h2 className="text-xl font-semibold text-gray-900">
                                                    {experience.company}
                                                </h2>
                                                <span className="text-sm text-gray-500">
                                                    {experience.period}
                                                </span>
                                            </div>
                                            <h3 className="text-md font-medium text-gray-700 mt-1">
                                                {experience.role}
                                            </h3>
                                            <p className="mt-2 text-gray-600">
                                                {experience.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            {help && (<Modal setShowHelp={setHelp} />)}
        </div >
    );
};

export default Career;