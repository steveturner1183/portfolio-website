import ac from "../assets/icons/languages/anaconda.svg";
import c from "../assets/icons/languages/c.svg";
import cs from "../assets/icons/languages/c-sharp.svg";
import css from "../assets/icons/languages/css3.svg";
import fl from "../assets/icons/languages/flask.svg";
import gc from "../assets/icons/languages/gcloud.svg";
import ht from "../assets/icons/languages/html5.svg";
import js from "../assets/icons/languages/js.svg";
import no from "../assets/icons/languages/node.svg";
import py from "../assets/icons/languages/py.svg";
import un from "../assets/icons/languages/unity.svg";

import MLBreakoutVid from "../assets/videos/MLBreakout.mp4";
import pmAPI from "../assets/videos/pmAPI.mp4";
import chess from "../assets/videos/chess.mp4";

export const lgProjectData = [{
    "title": "ML Breakout",
    "description": "Replica of the classic 1976 Atari Breakout. Two player mode opponent is a trained neural network using Unity toolkit ML Agents",
    "technologies": [un, cs],
    "keywords": ["Team Project", "Machine Learning Tools", "Continous Integration"],
    "video": MLBreakoutVid
},
{
    "title": "Project Management API",
    "description": "API for project managers to manage tasks by project",
    "technologies": [js, no, gc],
    "keywords": ["API/CRUD", "Authorization", "NoSQL", "Testing Suite"],
    "video": pmAPI
},
{
    "title": "Chess",
    "description": "Two player chess game",
    "technologies": [py],
    "keywords": ["Object-oriented"],
    "video": chess
}
];

export const smProjectData = [
    {
        "title": "Small Shell",
        "description": "Shell that implements a subset of features of well-known shells, such as bash",
        "technologies": [c]
    },

    {
        "title": "Pizza Website",
        "description": "Database management application for fictional pizza restaurant",
        "technologies": [js, no]
    },

    {
        "title": "Assembly Lanaguage",
        "description": "Several assembly language projects written in MASM for x64",
        "technologies": []
    },

    {
        "title": "Travel Suggestor",
        "description": "Recommends travel activities based on users past activity",
        "technologies": [py, fl]
    },

    {
        "title": "Client Server Chat",
        "description": "A chat program between a server and client",
        "technologies": [py]
    },

    {
        "title": "Portfolio website",
        "description": "This website!",
        "technologies": [js]
    },

    {
        "title": "Restaurant Microservice",
        "description": "Microservice used by classmates in team project",
        "technologies": [js]
    }

]