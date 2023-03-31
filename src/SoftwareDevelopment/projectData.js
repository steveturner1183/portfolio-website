import c from "../assets/icons/languages/c.svg";
import cs from "../assets/icons/languages/c-sharp.svg";
import fl from "../assets/icons/languages/flask.png";
import gc from "../assets/icons/languages/gcloud.svg";
import js from "../assets/icons/languages/js.svg";
import no from "../assets/icons/languages/node.png";
import py from "../assets/icons/languages/py.svg";
import un from "../assets/icons/languages/unity.svg";
import masm from "../assets/icons/languages/x64.png";
import re from "../assets/icons/languages/react.png";
import sql from "../assets/icons/languages/sql.png";
import linux from "../assets/icons/languages/linux.png";
import figma from "../assets/icons/languages/figma.png";
import MLBreakoutVid from "../assets/videos/MLBreakout.mp4";
import pmAPI from "../assets/videos/pmAPI.mp4";
import chess from "../assets/videos/chess.mp4"; 

export const lgProjectData = [{
    "title": "ML Breakout",
    "description": "Replica of the classic 1976 Atari Breakout. Two player mode opponent is a trained neural network using Unity toolkit ML Agents",
    "technologies": [un, cs],
    "keywords": ["Team Project", "Machine Learning Tools"],
    "video": MLBreakoutVid,
    "link": "https://github.com/steveturner1183/ml-breakout"
},
{
    "title": "Project Management API",
    "description": "RESTful API for project managers to manage tasks by project. Includes authorization, CRUD functionality, and dependencies. Tested using Postman",
    "technologies": [js, no, gc],
    "keywords": ["RESTful API", "Authorization", "NoSQL", "Testing Suite"],
    "video": pmAPI,
    "link": "https://github.com/steveturner1183/construction-management"
},
{
    "title": "Chess",
    "description": "Two player chess game. Game engine and UI built using pure Python without chess libraries.",
    "technologies": [py],
    "keywords": ["Object-oriented", "Testing Suite", ],
    "video": chess,
    "link": "https://github.com/steveturner1183/chess"
}
];

export const smProjectData = [
    {
        "title": "Small Shell",
        "description": "Shell that implements a subset of features of well-known shells, such as bash",
        "technologies": [c, linux],
        "link": "https://github.com/steveturner1183/smallsh"
    },
    {
        "title": "Travel Suggestor",
        "description": "Recommends travel activities, flights, and hotels based on historical data",
        "technologies": [py, fl],
        "link": "https://github.com/steveturner1183/travelSuggestor"
    },
    {
        "title": "Portfolio website",
        "description": "Design and programming of the website you are currently viewing",
        "technologies": [re, figma],
        "link": "https://github.com/steveturner1183/portfolio-website"
    },
    {
        "title": "Pizza Website",
        "description": "Database management application for a pizza restaurant",
        "technologies": [js, sql, no],
        "link": "https://github.com/steveturner1183/pizzaRestaurant"
    }, 
    {
        "title": "Assembly Lanaguage",
        "description": "Several assembly language projects written in MASM for x64",
        "technologies": [masm],
        "link": "https://github.com/steveturner1183/assemblyLanguageProjects"
    },
    {
        "title": "Client Server Chat",
        "description": "A chat program between a server and client using Python Libraries",
        "technologies": [py],
        "link": "https://github.com/steveturner1183/clientServerChat"
    },
    {
        "title": "Microservice",
        "description": "Restaurant microservice for packaging API data used by classmates in team project",
        "technologies": [js],
        "link": "https://github.com/steveturner1183/restaurantMicroservice"
    }

]