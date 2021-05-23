let mybutton = document.getElementById("scrollTop");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function ShowAndHide() {
  var x = document.getElementById('SectionName');

  if (x.style.display == 'block') {
      x.style.display = 'none';
  } else {
      x.style.display = 'block';
  }

}

function ShowAndHide1() {
  var y = document.getElementById('SectionName1');
  if (y.style.display == 'block') {
    y.style.display = 'none';
} else {
    y.style.display = 'block';
}
}


var z = document.getElementById('SectionName2');
function ShowAndHide2() {
  if (z.style.display == 'block') {
    z.style.display = 'none';
} else {
    z.style.display = 'block';
}
}


function ShowAndHide3() {
  var i = document.getElementById('SectionName3');
  if (i.style.display == 'block') {
    i.style.display = 'none';
} else {
    i.style.display = 'block';
}
}


function ShowHideChannels() {
  let button = document.getElementById('show-hide');
  if (button.style.display == 'block') {
    button.style.display = 'none';
} else {
  button.style.display = 'block';
}

}


let channels = `[
   {
         
         "name": "imedi",
         "description": "lorem ipsum",
         "imageUrl": "https://www.imedi.ge/m/i/logo-fb.png",
         "category": "child"
      },

      {
         "name": "rustavi2",
         "description": "lorem ipsum",
         "imageUrl": "https://isfed.ge/res/images/images/40dab74c26557bcfcac7a2107421fa5d250a8fb4.png",
         "category": "child"

      
      },

      {
        "name": "mtavari arkhi",
        "description": "lorem ipsum",
        "imageUrl": "https://georgianlive.com/wp-content/uploads/2020/09/mtavari-arkhi-2.jpg",
        "category": "child"

     
     },

     {
        "name": "pirveli",
        "description": "lorem ipsum",
        "imageUrl": "https://www.televizia.org/img/tv_gpb.png",
        "category": "child"

     
     },
     {
      "name": "pirveli",
      "description": "lorem ipsum",
      "imageUrl": "https://www.televizia.org/img/tv_gpb.png",
      "category": "child"

   
    },
    {
        "name": "pirveli",
        "description": "lorem ipsum",
        "imageUrl": "https://www.televizia.org/img/tv_gpb.png",
        "category": "child"

    
    },
    {
      "name": "pirveli",
      "description": "lorem ipsum",
      "imageUrl": "https://www.televizia.org/img/tv_gpb.png",
      "category": "child"

    },
    {
      "name": "pirveli",
      "description": "lorem ipsum",
      "imageUrl": "https://www.televizia.org/img/tv_gpb.png",
      "category": "child"

    },
    {
      "name": "pirveli",
      "description": "lorem ipsum",
      "imageUrl": "https://www.televizia.org/img/tv_gpb.png",
      "category": "child"

    }
]`

let mydata = JSON.parse(channels);

for(let i = 0; i < mydata.length; i++) {


  let channel_div = document.createElement("div");
  channel_div.setAttribute("class", "list1");

  let channel_image_url = document.createElement("img");
  channel_image_url.src = mydata[i].imageUrl;
  channel_div.append(channel_image_url);

  let channel_name_div = document.createElement("div");
  channel_name_div.setAttribute("class", "channel-name");
  
  let channel_name = document.createElement("p");
  channel_name.append(mydata[i].name);

  channel_name_div.append(channel_name);
  channel_div.append(channel_name_div);

  let div = document.getElementById("test");
  div.append(channel_div);

}


let category = `[
  {
    "name": "საბავშვო",
    "key": "child"
  },
  {
    "name": "ზოგადი",
    "key": "zogadi"
  },
  {
    "name": "სპორტული",
    "key": "sportuli"
  },
  {
    "name": "რეგიონული",
    "key": "regionuli"
  },
  {
    "name": "გასართობი ",
    "key": "gasartobi"
  },
  {
    "name": "ფილმები",
    "key": "filmebi"
  },
  {
    "name": "შემეცნებითი",
    "key": "shemecnebiti"
  },
  {
    "name": "18+",
    "key": "18+"
  }
]`

let category_data = JSON.parse(category);

for(let i = 0; i < category_data.length; i++) {
  let category_list = document.createElement("li");

  let number_of_channels = "30 არხი";
  let number = document.createElement("span");
  number.append(number_of_channels);
  category_list.append(number); 

  let category_name = category_data[i].name;
  category_list.append(category_name);

  let category_ul = document.getElementById("category-list");
  category_ul.append(category_list);
}

let news = `[
  {
    "text": "არხების სიას მალე დაემატება National Geographic და Fox",
    "text1": "18.07.2019",
    "imgUrl": "https://digichat.info/wp-content/uploads/2021/03/istockphoto-1182477852-612x612-1.jpg"
  },
  {
    "text": "არხების სიას მალე დაემატება National Geographic და Fox",
    "text1": "18.07.2019",
    "imgUrl": "https://digichat.info/wp-content/uploads/2021/03/istockphoto-1182477852-612x612-1.jpg"
  }
]`


let news_data = JSON.parse(news);

for(let i = 0; i < news_data.length; i++) {
  let news_img = document.createElement("img");
  news_img.src = news_data[i].imgUrl;

  let news_div = document.createElement("div");
  news_div.setAttribute("class", "news");
  news_div.append(news_img);

  let news_text = document.createElement("div");
  news_text.setAttribute("class", "news-text");

  let date = document.createElement("p");
  date.setAttribute("class", "date");

  let data_date = news_data[i].text1;
  date.append(data_date);
  news_text.append(date);

  let text = news_data[i].text;
  let text_p = document.createElement("p");

  text_p.append(text);
  news_div.append(news_text);
  news_text.append(text_p);

  let main_news_div = document.getElementById("news-id");
  main_news_div.append(news_div);

}


let sliders = `[
  {
    "imgUrl":  "https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg",
    "url": "https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg"
  },
  {
    "imgUrl":  "https://i.pinimg.com/originals/8b/a0/0b/8ba00b446143d3649cdc081e4c18cc75.jpg",
    "url": "https://i.pinimg.com/originals/8b/a0/0b/8ba00b446143d3649cdc081e4c18cc75.jpg"
  },
  {
    "imgUrl":  "https://i.pinimg.com/originals/c8/70/ba/c870ba5b574621cf14d656689057d8b4.jpg",
    "url": "https://i.pinimg.com/originals/c8/70/ba/c870ba5b574621cf14d656689057d8b4.jpg"
  }
]`


let sliders_data = JSON.parse(sliders);

for(let i = 0; i < sliders_data.length; i++) {

  let slider_img = document.createElement("img");
  slider_img.src = sliders_data[i].imgUrl;
  slider_img.setAttribute("class", "slider-img");
  
  let slider_div = document.getElementById("slider-div");
  slider_div.prepend(slider_img);
}


// slider 
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slider-img");
  if (n > x.length){
      slideIndex = 1
  }
  if (n < 1) {
       slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}



// let sliders1 = `[
//   {
//     "imgUrl":  "https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg",
//     "url": "https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg"
//   },
//   {
//     "imgUrl":  "https://i.pinimg.com/originals/8b/a0/0b/8ba00b446143d3649cdc081e4c18cc75.jpg",
//     "url": "https://i.pinimg.com/originals/8b/a0/0b/8ba00b446143d3649cdc081e4c18cc75.jpg"
//   },
//   {
//     "imgUrl":  "https://i.pinimg.com/originals/c8/70/ba/c870ba5b574621cf14d656689057d8b4.jpg",
//     "url": "https://i.pinimg.com/originals/c8/70/ba/c870ba5b574621cf14d656689057d8b4.jpg"
//   }
// ]`

// let sliders_data1 = JSON.parse(sliders1);


// for(let i = 0; i < sliders_data1.length; i++) {

//   let slider_img1 = document.createElement("img");
//   slider_img1.src = sliders_data1[i].imgUrl;
//   slider_img1.setAttribute("class", "slider-img1");

//   let slider_div1 = document.getElementById("slider-div1");
//   slider_div1.prepend(slider_img1);
// }



// // slider 
// var slideIndex1 = 1;
// showDivs1(slideIndex1);

// function plusDivs1(n) {
//   showDivs1(slideIndex1 += n);
// }

// function showDivs1(n) {
//   let i;
//   let x = document.getElementsByClassName("slider-img1");
//   if (n > x.length){
//       slideIndex1 = 1
//   }
//   if (n < 1) {
//        slideIndex1 = x.length
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex1-1].style.display = "block";  
// }

