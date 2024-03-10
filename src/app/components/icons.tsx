import { siFacebook, siInstagram, siLinkedin, siTiktok, siYoutube } from "simple-icons";

function Icon({style, path, title, className } : { style: any, path: string, title: string, className: string})
{
    return (
        <div>
            <svg className={`fill-current social-icon ${className}`} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#feda75", stopOpacity:1}} />
                    <stop offset="30%" style={{stopColor:"#fa7e1e", stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:"#d62976", stopOpacity:1}} />
                    </linearGradient>
                </defs>
                <title>{title}</title>
                <path d={path} />
            </svg>
        </div>
    )
}

export function FacebookIcon({ size = 24 }){
    const style = { width: size, height: size };
    return (
        <Icon style={style} path={siFacebook.path} title="Facebook" className="fb-icon"/>
    );
};

export function InstagramIcon({ size = 24 }){
    const style = { width: size, height: size };
    return (
        <div>

            <Icon style={style} path={siInstagram.path} title="Instagram" className="ig-icon"/>
        </div>
    );
};

export function LinkedInIcon({ size = 24 }){
    const style = { width: size, height: size };
    return (
        <Icon style={style} path={siLinkedin.path} title="LinkedIn" className="linked-in-icon"/>
    );
};

export function YouTubeIcon({ size = 24 }){
    const style = { width: size, height: size };
    return (
        <Icon style={style} path={siYoutube.path} title="YouTube" className="yt-icon"/>
    );
};

export function TikTokIcon({ size = 24 }){
    const style = { width: size, height: size };
    return (
        <Icon style={style} path={siTiktok.path} title="TikTok" className="tiktok-icon"/>
    );
};

