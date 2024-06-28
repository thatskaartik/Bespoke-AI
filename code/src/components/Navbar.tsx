import React from 'react'
import Image from 'next/image';

import logoOne from '../assets/chatgptlogo.png';
import logoTwo from '../assets/chatgptlogo2.png';
import userImg from '../assets/nouserlogo.png';
import chatgptlogo from '../assets/chatgptlogo.png';

const Navbar = () => {

    const allChats = [
        {
            id: 1,
            chatName: "this is a sample chat1 for the gpt..."
        },
        {
            id: 2,
            chatName: "this is a sample chat1 for the gpt..."
        },
        {
            id: 3,
            chatName: "this is a sample chat1 for the gpt..."
        },
        {
            id: 4,
            chatName: "this is a sample chat1 for the gpt..."
        },
        {
            id: 5,
            chatName: "this is a sample chat1 for the gpt..."
        }
    ]

    return (
        <div className='h-screen flex flex-col justify-between text-custom-textCol bg-custom-navBg'>
            <div className=' h-10 p-8 flex justify-between items-center'>
                <div className='text-sm flex items-center justify-center'>
                    <img 
                    src="https://raw.githubusercontent.com/virajj014/ChatGPT_reactnextjs/main/src/assets/chatgptlogo.png"
                    alt="ChatGPT" 
                    className="w-7 h-7" 
                    />
                    <p className={"text-custom-textCol size ml-1.5"}> Bespoke AI</p>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </div>
            <div className={"h-3/5 overflow-auto flex flex-col p-8 gap-5"}>
                {allChats.map(chat => (
                    <div key={chat.id} className={""}>
                        <p className={" text-custom-textCol text-sm"}>{chat.chatName}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar