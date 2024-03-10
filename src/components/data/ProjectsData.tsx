export const  projects = [
  
    {
        title:"KeepInMind",
        description:"KeepInMind is a project designed to help users memorize the main ideas from a book, a movie, or a day. Reading is one of my passions, which inspired the idea for this project. I wanted to create an application that could help me memorize as many details as possible from the books I read. Please note that the server is rendered on onRender, and due to inactivity, it might sometimes close. This means the user may have to try logging in a couple of times. ",
        tehnologies:["React","Tailwind","JWT Authentication","Framer Motion","Express.js","MySql","TypeScript"],
        website_link:'https://iustinm.github.io/keepinmind/',
        source_code:{frontend:'https://github.com/IustinM/keepinmind-client',backend:'https://github.com/IustinM/keepinmind-server'},
        type:'mind',
        progress:false
    },
    {
        title:"Habiturn",
        description:`Habiturn is a project inspired by the book "Atomic Habits." The project's goal is to help users replace negative habits with positive ones or enhance existing habits by providing detailed guidance that assists them in correcting negative behaviors or improving current ones.  `,
        tehnologies:["React","MaterialUI","Framer Motion","TypeScript","Redux"],
        website_link:'https://iustinm.github.io/habiturn/',
        source_code:'https://github.com/IustinM/habiturn',
        type:'habit',
        progress:true
    }
]