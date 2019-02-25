import ftp from './imgs/ftp.png';
import http from './imgs/http.png';
import pause from './imgs/pause.png';
import email from './imgs/email.png';
export default [{
    "name": "pause",
    "ref": "core.pause",
    "icon": pause,
    "description":"description1",
    "parameters": {
        "sleep": {
            "type": "number",
            "default": 1
        }
    }
}, {
    "name": "mail",
    "ref": "core.mail",
    "icon": email,
    "description":"description1",
    "parameters": {
        "sleep": {
            "type": "number",
            "default": 1
        }
    }
}, {
    "name": "ftp",
    "ref": "core.ftp",
    "icon": ftp,
    "description":"description1",
    "parameters": {
        "sleep": {
            "type": "number",
            "default": 1
        }
    }
},
{
    "name": "http",
    "ref": "core.http",
    "icon": http,
    "description":"description1",
    "parameters": {
        "sleep": {
            "type": "number",
            "default": 1
        }
    }
}
]