{
  "featured": {
    "title": "Robin Padilla delivers privilege speech",
    "date": "July 25, 2026",
    "image": "images/featured.jpg",
    "link": "news1.html"
  },

  "news": [

    {
      "title":"Committee Hearing",
      "date":"July 20, 2026",
      "image":"images/news1.jpg",
      "link":"news1.html"
    },

    {
      "title":"New Senate Bill",
      "date":"July 18, 2026",
      "image":"images/news2.jpg",
      "link":"news2.html"
    }

  ],

  "videos":[

    {
      "title":"Privilege Speech",
      "date":"July 15, 2026",
      "youtube":"https://www.youtube.com/embed/9NDZj_eSWg5KgSab"
    },

    {
      "title":"Committee Meeting",
      "date":"July 10, 2026",
      "youtube":"https://www.youtube.com/embed/J9k0DeGr4m0"
    }

  ],

  "media":[

    {
      "title":"Press Release No. 15",
      "date":"July 5, 2026",
      "pdf":"files/pr15.pdf"
    },

    {
      "title":"Media Advisory",
      "date":"July 2, 2026",
      "pdf":"files/media.pdf"
    }

  ],

  "gallery":[

    "images/g1.jpg",
    "images/g2.jpg",
    "images/g3.jpg",
    "images/g4.jpg",
    "images/g5.jpg",
    "images/g6.jpg"

  ]
}
const search = document.getElementById("searchNews");

search.addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    items.forEach(item=>{

        const title = item.querySelector(".item-title").textContent.toLowerCase();

        if(title.includes(value)){

            item.style.display="block";

        }else{

            item.style.display="none";

        }

    });

});