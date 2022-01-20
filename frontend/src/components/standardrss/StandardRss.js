import React, { Fragment} from 'react';

const StandardRss = () => {

    const tmpData = {
    
      "items": 
     [
      {
        "title": "Anzeigen, Ermittlungen, Chats: Für die ÖVP wird die Luft dünn",
        "link": "https://www.derstandard.at/story/2000127335201/anzeigen-ermittlungen-chats-fuer-die-oevp-wird-die-luft-duenn?ref=rss",
        "thumbnail": "https://images.derstandard.at/img/2021/06/11/APA-schlagerr.jpg?w=150&s=cfd51598",
      },
      {
        "title": "Kurz und FPÖ gegen Erleichterung bei Staatsbürgerschaft",
        "link": "https://www.derstandard.at/story/2000127347245/kurz-gegen-staatsbuergerschaft-kogler-fuer-erleichterungen?ref=rss",
        "thumbnail": "https://images.derstandard.at/img/2021/06/12/92BD53E4-4241-4A82-A798-A924C764AD99.jpeg?w=150&s=383fdd31",
      },
      {
        "title": "Kurz und FPÖ gegen Erleichterung bei Staatsbürgerschaft",
        "link": "https://www.derstandard.at/story/2000127347245/kurz-gegen-staatsbuergerschaft-kogler-fuer-erleichterungen?ref=rss",
        "thumbnail": "https://images.derstandard.at/img/2021/06/12/92BD53E4-4241-4A82-A798-A924C764AD99.jpeg?w=150&s=383fdd31",
      }
     ]
    }

const {items} = tmpData  


console.log(items.title, 'title')
//console.log(weather.icon, 'weather')  

 return (
    <Fragment>
      <div className="container-dash-rss">
        <h2>derStandard Newsroom</h2>
        <div className="image-wrapper">
        <ul className="ul-newsroom-scroolbar">
        {items.map(item =>{
          return(
            <li className="li-newsroom-text">
            <a href={`${item.link}`}>{item.title}</a>  
            <img className="li-newsroom-img" src={`${item.thumbnail}`}  alt="derStandard" width="100%" height="100%"/>
            </li>
            )            
        })}
        </ul>          
        </div>       
      </div>
    </Fragment>

)
};

export default StandardRss;