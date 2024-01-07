export const  projects = [
    {
        title:"Movies",
        description:"Movies is an imdb style project that contains details about the latest movies or series, or other categories such as the movies or series with the best rating or the most appreciated by critics. The project is made in next, js and TypeScript, I also helped myself with Tailwindcss and Tanstack libraries such as React Query or React Table.",
        tehnologies:["Next","React Query","React Table","Framer Motion","TypeScript"],
        website_link:'',
        source_code:'https://github.com/IustinM/movies',
        type:'movies',
        progress:false
    },
    {
        title:"KeepInMind",
        description:"KeepInMind is a project that helps a user memorize the main ideas from a book, a movie or a day. Reading is one of my passions, this is where the idea of the project came from, I wanted to create an application that can help me memorize as many details as possible from the books I read. The frontend of the project is made in React.js and Typescript, and the backend is made in Express.js. When it comes to the logic of the application, it has a login system made with jwt token, which is stored in a secure cookie after the login has been successfully completed. The design of the project was initially made in Figma, and the animations were made with framer-motion.",
        tehnologies:["React","Tailwind","JWT","Framer Motion","Express.js","MySql","TypeScript"],
        website_link:'',
        source_code:{frontend:'https://github.com/IustinM/keepinmind-client',backend:'https://github.com/IustinM/keepinmind-server'},
        type:'mind',
        progress:false
    },
    {
        title:"AppriseMe",
        description:"AppriseMe is a project based on the Atomic Habbits book. The project aims to correct negative habits and create positive habits or develop current ones. The project contains an algorithm developed by me, which, following some data received from the user, will calculate the stage in which the habit is, either negative or positive, the time required to eliminate the negative habit, or the development of the positive one, as well as a graph of all habbits. The frontend of the project is also made in React.js and TypeScript, and the backend is made in Express.js.",
        tehnologies:["React","Tailwind","JWT","Framer Motion","Express.js","MySql","TypeScript"],
        website_link:'',
        source_code:'https://github.com/IustinM/appriseme-client',
        type:'habbit',
        progress:true
    }
]