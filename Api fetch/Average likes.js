// const users = [
//     {
//       id: 1,
//       name: "John",
//       location: "New York",
//       friends: [2, 3, 4],
//       posts: [
//         { content: "Great day at Central Park!", timestamp: "2024-05-10T12:00:00", likes: 15 },
//         { content: "Loving the vibes in NYC!", timestamp: "2024-05-15T08:30:00", likes: 8 },
//         { content: "Visited the Statue of Liberty today!", timestamp: "2024-05-05T17:45:00", likes: 20 }
//       ]
//     },
//     {
//       id: 2,
//       name: "Alice",
//       location: "San Francisco",
//       friends: [1, 3],
//       posts: [
//         { content: "Hiking in the Bay Area!", timestamp: "2024-05-12T14:20:00", likes: 12 },
//         { content: "Enjoying the sunny weather!", timestamp: "2024-05-14T11:10:00", likes: 6 }
//       ]
//     },
//     {
//       id: 3,
//       name: "Emily",
//       location: "Los Angeles",
//       friends: [1, 2, 4],
//       posts: [
//         { content: "Beach day in LA!", timestamp: "2024-05-08T09:45:00", likes: 25 },
//         { content: "Exploring Hollywood!", timestamp: "2024-05-16T16:55:00", likes: 5 }
//       ]
//     },
//     {
//       id: 4,
//       name: "David",
//       location: "Chicago",
//       friends: [2],
//       posts: [
//         { content: "Deep dish pizza is the best!", timestamp: "2024-05-11T10:30:00", likes: 18 },
//         { content: "Trying out a new jazz club tonight!", timestamp: "2024-05-13T20:00:00", likes: 3 }
//       ]
//     },
//     {
//       id: 5,
//       name: "Sarah",
//       location: "Seattle",
//       friends: [3, 1],
//       posts: [
//         { content: "Coffee time in the Pacific Northwest!", timestamp: "2024-05-09T15:15:00", likes: 9 },
//         { content: "Exploring the Olympic National Park!", timestamp: "2024-05-14T07:00:00", likes: 11 }
//       ]
//     }
//   ];
  
//    const popularPostsPerUser = users.map(user => {
//     const popularPosts = user.posts.filter(post => post.likes >= 10);
//     return { userId: user.id, posts: popularPosts };
//   });
  // console.log(popularPostsPerUser)
  // const averageLikesPerUser = popularPostsPerUser.map(userPosts => {
  //   const totalLikes = userPosts.posts.reduce((sum, post) => sum + post.likes, 0);
  //   const averageLikes = userPosts.posts.length > 0 ? totalLikes / userPosts.posts.length : 0;
  //   return averageLikes;
  // });
  
  //  const overallAverageLikes = averageLikesPerUser.reduce((sum, avg) => sum + avg, 0) / averageLikesPerUser.length;
  
  // console.log(overallAverageLikes);
  

  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>weather app</title>
  </head>
  <body>
    <script>
      const divContainer = document.createElement("div");
      document.body.style.backgroundImage =
        "url('https://media.istockphoto.com/id/1128410927/photo/blue-sky-background-and-white-clouds-soft-focus-and-copy-space.webp?b=1&s=170667a&w=0&k=20&c=YL7M8pssMunJkW_R5RqP9kTAP8A37s0Kqgiy1cmrvWU=')";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";

      document.body.appendChild(divContainer);
      divContainer.style.height = "1440px";
      divContainer.style.width = "1440px";
      divContainer.style.justifyContent = "center";
      const divSearch = document.createElement("div");
      divContainer.appendChild(divSearch);

      const inputField = document.createElement("input");
      divSearch.appendChild(inputField);

      const button = document.createElement("button");
      divSearch.appendChild(button);
      button.textContent = "search";
      button.setAttribute("onclick", "predictWeather()");
      inputField.setAttribute("placeHolder", "Enter city");

      const divsubContainer = document.createElement("div");
      divContainer.appendChild(divsubContainer);

      const divdata = document.createElement("div");
      divsubContainer.appendChild(divdata);
      // divdata.style.boxShadow="5px 2px 5px 5px white"

      const divImage = document.createElement("div");
      divdata.appendChild(divImage);

      const divDescription = document.createElement("div");
      divdata.appendChild(divDescription);

      const divPrediction = document.createElement("div");
      divsubContainer.appendChild(divPrediction);
      divPrediction.style.display = "flex";

      const divDay1 = document.createElement("div");
      divPrediction.appendChild(divDay1);
      const day1 = document.createElement("p");
      divDay1.appendChild(day1);
      const image1 = document.createElement("img");
      divDay1.appendChild(image1);
      const Temperature1 = document.createElement("p");
      divDay1.appendChild(Temperature1);
      day1.textContent = "Wednesday";
      image1.src =
        "https://static.vecteezy.com/system/resources/previews/021/625/166/original/sunny-weather-icon-sun-icon-weather-forecast-icon-for-sunny-weather-suitable-for-social-media-and-app-icon-sun-illustration-yellow-color-summer-and-hot-weather-sign-and-tag-minimalism-free-vector.jpg";
      Temperature1.textContent = "21";

      image1.style.height = "100px";
      image1.style.width = "100px";
      image1.style.borderRadius = "50%"
      divDay1.style.margin="20px"
      divDay1.style.borderRadius="70px"
      divDay1.style.padding="5px"
      divDay1.style.width="200px"
      divDay1.style.height="200px"
      divDay1.style.display="flex"
      divDay1.style.flexDirection="column"
      divDay1.style.justifyContent="center"
      divDay1.style.alignItems="center"
      divDay1.style.backgroundColor="white"
      day1.style.fontSize="1.5em"
      day1.style.fontWeight="700"
      Temperature1.style.fontSize='1.5em'

      const divDay2 = document.createElement("div");
      divPrediction.appendChild(divDay2);
      const day2 = document.createElement("p");
      divDay2.appendChild(day2);
      const image2 = document.createElement("img");
      divDay2.appendChild(image2);
      const Temperature2 = document.createElement("p");
      divDay2.appendChild(Temperature2);
      day2.textContent = "Thursday";
      image2.src =
        "https://static.vecteezy.com/system/resources/previews/021/625/166/original/sunny-weather-icon-sun-icon-weather-forecast-icon-for-sunny-weather-suitable-for-social-media-and-app-icon-sun-illustration-yellow-color-summer-and-hot-weather-sign-and-tag-minimalism-free-vector.jpg";
      Temperature2.textContent =" 21";

      image2.style.height = "100px";
      image2.style.width = "100px";
      image2.style.backgroundColor = "transparent";
      image2.style.borderRadius = "50%";
      divDay2.style.margin="20px"
      divDay2.style.borderRadius="70px"
      divDay2.style.padding="5px"
       divDay2.style.width="200px"
      divDay2.style.height="200px"
      divDay2.style.display="flex"
      divDay2.style.flexDirection="column"
      divDay2.style.justifyContent="center"
      divDay2.style.alignItems="center"
      divDay2.style.backgroundColor="white"
      day2.style.fontSize="1.5em"
      day2.style.fontWeight="700"
      Temperature2.style.fontSize='1.5em'

      const divDay3 = document.createElement("div");
      divPrediction.appendChild(divDay3);
      const day3 = document.createElement("p");
      divDay3.appendChild(day3);
      const image3 = document.createElement("img");
      divDay3.appendChild(image3);
      const Temperature3 = document.createElement("p");
      divDay3.appendChild(Temperature3);
      day3.textContent = "Friday";
      image3.src =
        "https://static.vecteezy.com/system/resources/thumbnails/010/989/531/small_2x/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png";
      Temperature3.textContent = "21";

      image3.style.height = "100px";
      image3.style.width = "100px";
      image3.style.backgroundColor = "transparent";
      image3.style.borderRadius = "50%";
      divDay3.style.margin="20px"
      divDay3.style.borderRadius="70px"
      divDay3.style.padding="5px"
      divDay3.style.width="200px"
      divDay3.style.height="200px"
      divDay3.style.display="flex"
      divDay3.style.flexDirection="column"
      divDay3.style.justifyContent="center"
      divDay3.style.alignItems="center"
      divDay3.style.backgroundColor="whitesmoke"
      day3.style.fontSize="1.3em"
      day3.style.fontWeight="700"
      Temperature3.style.fontSize='1.3em'

      const divDay4 = document.createElement("div");
      divPrediction.appendChild(divDay4);

      const day4 = document.createElement("p");
      divDay4.appendChild(day4);
      const image4 = document.createElement("img");
      divDay4.appendChild(image4);
      const Temperature4 = document.createElement("p");
      divDay4.appendChild(Temperature4);
      day4.textContent = "Saturday";
      image4.src =
        "https://static.vecteezy.com/system/resources/thumbnails/010/989/531/small_2x/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png";

      Temperature4.textContent = "21";

      image4.style.height = "100px";
      image4.style.width = "100px";
      image4.style.backgroundColor = "transparent";
      image4.style.borderRadius = "50%";
      divDay4.style.margin="20px"
      divDay4.style.borderRadius="70px"
      divDay4.style.padding="5px"
      divDay4.style.width="200px"
      divDay4.style.height="200px"
      divDay4.style.display="flex"
      divDay4.style.flexDirection="column"
      divDay4.style.justifyContent="center"
      divDay4.style.alignItems="center"
      divDay4.style.backgroundColor="white"
      day4.style.fontSize="1.5em"
      day4.style.fontWeight="700"
      Temperature4.style.fontSize='1.5em'

      const name = document.createElement("p");
      divDescription.appendChild(name);

      const temp = document.createElement("p");
      divDescription.appendChild(temp);

      const description = document.createElement("p");
      divDescription.appendChild(description);
      const image = document.createElement("img");
      divImage.appendChild(image);
      image.style.height = "300px";
      image.style.width = "300px";
      image.style.borderRadius = "50%";
      name.style.fontSize = "3em";
      name.style.fontWeight = "900";
      temp.style.fontSize = "1.4em";
      temp.style.color = "gray";
      description.style.fontSize = "1.4em";
      description.style.color = "gray";
      inputField.style.backgroundColor = "white";
      inputField.style.borderRadius = "20px";
      inputField.style.marginRight = "30px";
      inputField.style.padding = "20px";

      button.style.borderRadius = "10px";
      button.style.backgroundColor = "black";
      button.style.color = "white";

      // divContainer.style.display="grid"
      divContainer.style.justifyContent = "center";
      divsubContainer.style.display = "grid";
      divsubContainer.style.justifyContent = "center";
      // divContainer.style.justifyContent="center"
      divSearch.style.display = "grid";
      divSearch.style.justifyContent = "center";
      divSearch.style.gridTemplateColumns = "300px 100px";
      divSearch.style.marginBottom = "20px";
      divdata.style.display = "flex";
      divdata.style.justifyContent="center"
      divdata.style.alignItems="center"
      // divdata.style.
      divImage.style.padding = "40px";
      divDescription.style.padding = "40px";
      // div1.style.display="flex"
      // div1.style.justifyContent="center"
      // div1.style.flexDirection="column"

      const fetchedDataa = fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=nyahururu,kenya&APPID=65a9863172bfcee6fa4daba21848f4c1`
      )
        .then((res) => res.json())
        .then((res) => {
          image.src =
            "https://static.vecteezy.com/system/resources/thumbnails/010/989/531/small_2x/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png";
          name.textContent = res.name;

          temp.textContent = `Temperature ${(res.main.temp - 273).toFixed(2) + "°C"}`
          
          description.textContent = res.weather[0].description;
          // icon.src = `${res.weather[0].icon}.png`;
        });

      const predictWeather = async () => {
        let cityName = inputField.value;
        const fetchedData = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=65a9863172bfcee6fa4daba21848f4c1`
        )
          .then((res) => res.json())
          .then((res) => {
            name.textContent = res.name;

            temp.textContent = `Temperature ${(res.main.temp - 273).toFixed(2) + "°C"}`
            description.textContent = res.weather[0].description;
          });

      
        

      };
    </script>
  </body>
</html>
