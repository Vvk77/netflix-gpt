

 export const LOGO = "//help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"



 export const UserIcon = "https://cdn-icons-png.flaticon.com/512/847/847969.png"



export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`
  }
};



export const IMAGE_CDN = "https://image.tmdb.org/t/p/w200/"


export const BG_IMG ="https://assets.nflxext.com/ffe/siteui/vlv3/6d631aa6-567d-46ef-a644-b5b00e4334d2/web/IN-en-20251215-TRIFECTA-perspective_f1cab02a-e42b-4913-a7d9-c5fe0f94f68d_large.jpg"


    export  const SUPPORTED_LANG  = [{identifier: "en" ,name: "English "},{identifier: "hindi" ,name: "Hindi "},{identifier: "spanish" ,name: "Spanish "}]



  



 export const GROQ_AI_KEY = process.env.REACT_APP_GROQ_API_KEY