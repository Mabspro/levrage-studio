Top 10 HTML Animations
Last Updated : 23 Jul, 2025
•	
•	
•	
CSS animations provide smooth transitions between style configurations using just HTML and CSS. They consist of a style definition and keyframes that outline the start, end, and intermediate states of the animation. This approach allows you to animate style properties without needing JavaScript or external media.
These are the top 10 HTML Animation:
Table of Content
•	3D Toggle Switch
•	Modern Loading Animations
•	Radiant Social Media Icons
•	Submit Button with Animation
•	Dynamic Word Spin
•	Navigation Bar with Hover Effects
•	Expanding Search Box
•	Button Wiggle
•	Animated Vertical Bars
•	Three Dots Loading
3D Toggle Switch
The 3D Toggle Switch is a sleek and interactive UI element that elevates the traditional toggle switch design with a three-dimensional twist. It features smooth, seamless animations that enhance the user experience, making the toggling action visually appealing. This example transforms the basic CSS checkbox input into a dynamic and engaging component, showcasing the power of creative styling in web development.
Example: In this example, we create a 3D toggle switch using HTML and CSS. The switch includes smooth transitions and 3D effects, making it a visually appealing component for modern web interfaces. The HTML structure consists of a hidden checkbox input and several div elements styled to form the toggle switch. The CSS handles the visual styling and animations.
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8" />
    <meta name="viewport" 
          content="width=device-width, 
                   initial-scale=1.0" />
    <title>3D Toggle Switch</title>
    <style>
        body,
        html {
            width: 100vw;
            height: 100vh;
        }

        body {
            background-image: linear-gradient(135deg,
                    hsl(var(--hue) 20% 95%),
                    hsl(var(--hue) 20% 80%));
            display: flex;
            align-items: center;
            justify-content: center;
            --hue: 220deg;
            --width: 23rem;
            --accent-hue: 22deg;
            --duration: 0.6s;
            --easing: cubic-bezier(1, 0, 1, 1);
        }

        input {
            display: none;
        }

        .switch {
            --shadow-offset: calc(var(--width) / 20);
            position: relative;
            cursor: pointer;
            display: flex;
            align-items: center;
            width: var(--width);
            height: calc(var(--width) / 2.5);
            border-radius: var(--width);
            box-shadow: inset 10px 10px 10px hsl(var(--hue) 20% 80%),
                inset -10px -10px 10px hsl(var(--hue) 20% 93%);
        }

        .indicator {
            content: "";
            position: absolute;
            width: 40%;
            height: 60%;
            transition: all var(--duration) var(--easing);
            box-shadow: inset 0 0 2px hsl(var(--hue) 20% 15% / 60%),
                inset 0 0 3px 2px hsl(var(--hue) 20% 15% / 60%),
                inset 0 0 5px 2px hsl(var(--hue) 20% 45% / 60%);
        }

        .indicator.left {
            --hue: var(--accent-hue);
            overflow: hidden;
            left: 10%;
            border-radius: 100px 0 0 100px;
            background: linear-gradient(180deg,
                    hsl(calc(var(--accent-hue) + 20deg) 95% 80%) 10%,
                    hsl(calc(var(--accent-hue) + 20deg) 100% 60%) 30%,
                    hsl(var(--accent-hue) 90% 50%) 60%,
                    hsl(var(--accent-hue) 90% 60%) 75%,
                    hsl(var(--accent-hue) 90% 50%));
        }

        .indicator.left::after {
            content: "";
            position: absolute;
            opacity: 0.6;
            width: 100%;
            height: 100%;
            background: rgb(4, 238, 90);
        }

        .indicator.right {
            right: 10%;
            border-radius: 0 100px 100px 0;
            background-image: linear-gradient(180deg,
                    hsl(var(--hue) 20% 95%),
                    hsl(var(--hue) 20% 65%) 60%,
                    hsl(var(--hue) 20% 70%) 70%,
                    hsl(var(--hue) 20% 65%));
        }

        .button {
            position: absolute;
            z-index: 1;
            width: 55%;
            height: 80%;
            left: 5%;
            border-radius: 100px;
            background-image: linear-gradient(160deg,
                    hsl(var(--hue) 20% 95%) 40%,
                    hsl(var(--hue) 20% 65%) 70%);
            transition: all var(--duration) var(--easing);
            box-shadow: 2px 2px 3px hsl(var(--hue) 18% 50% / 80%),
                2px 2px 6px hsl(var(--hue) 18% 50% / 40%),
                10px 20px 10px hsl(var(--hue) 18% 50% / 40%),
                20px 30px 30px hsl(var(--hue) 18% 50% / 60%);
        }

        .button::before,
        .button::after {
            content: "";
            position: absolute;
            top: 10%;
            width: 41%;
            height: 80%;
            border-radius: 100%;
        }

        .button::before {
            left: 5%;
            box-shadow: inset 1px 1px 2px hsl(var(--hue) 20% 85%);
            background-image: linear-gradient(-50deg,
                    hsl(var(--hue) 20% 95%) 20%,
                    hsl(var(--hue) 20% 85%) 80%);
        }

        .button::after {
            right: 5%;
            box-shadow: inset 1px 1px 3px hsl(var(--hue) 20% 70%);
            background-image: linear-gradient(-50deg,
                    hsl(var(--hue) 20% 95%) 20%,
                    hsl(var(--hue) 20% 75%) 80%);
        }

        input:checked~.button {
            left: 40%;
        }

        input:not(:checked)~.indicator.left,
        input:checked~.indicator.right {
            box-shadow: inset 0 0 5px hsl(var(--hue) 20% 15% / 100%),
                inset 20px 20px 10px hsl(var(--hue) 20% 15% / 100%),
                inset 20px 20px 15px hsl(var(--hue) 20% 45% / 100%);
        }
    </style>
</head>

<body>
    <label class="switch">
        <input type="checkbox" checked />
        <div class="indicator left"></div>
        <div class="indicator right"></div>
        <div class="button"></div>
    </label>
</body>

</html>
Output:
Modern Loading Animations
CSS animations can bring classic visual elements to life, and spinning loaders are a perfect example. These animations offer a familiar and intuitive way to signal that content is loading, all while keeping the implementation straightforward and efficient.
Example: In this example, we create two types of loaders using HTML and CSS. The first loader, loader1, is a bar loader that pulses by animating its height and shadow. The second loader, loader2, is a circular loader that spins to show loading. Both loaders use keyframe animations to create their effects.
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Combined Spinners</title>
    <!-- <link rel="stylesheet" href="styles.css" /> -->
    <style>
        /* Write CSS Here */
        body,
        html {
            width: 100vw;
            height: 100vh;
            margin: 0;
            background-color: #f5f5f5;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: "Arial", sans-serif;
            color: #333;
        }

        #container {
            width: 90%;
            max-width: 700px;
            margin: 1em auto;
            position: relative;
        }

        /* Loader 1 */
        .loader.loader1,
        .loader.loader1:before,
        .loader.loader1:after {
            background: #ff5733;
            /* New color */
            animation: load1 1s infinite ease-in-out;
            width: 1em;
            height: 4em;
        }

        .loader.loader1 {
            color: #ffffff;
            text-indent: -9999em;
            margin: 88px auto;
            position: relative;
            font-size: 11px;
            transform: translateZ(0);
            animation-delay: -0.16s;
        }

        .loader.loader1:before,
        .loader.loader1:after {
            position: absolute;
            top: 0;
            content: "";
        }

        .loader.loader1:before {
            left: -1.5em;
            animation-delay: -0.32s;
        }

        .loader.loader1:after {
            left: 1.5em;
        }

        @keyframes load1 {

            0%,
            80%,
            100% {
                box-shadow: 0 0;
                height: 4em;
            }

            40% {
                box-shadow: 0 -2em;
                height: 5em;
            }
        }

        /* Loader 2 */
        .loader.loader2,
        .loader.loader2:before,
        .loader.loader2:after {
            border-radius: 50%;
        }

        .loader.loader2 {
            color: #ffffff;
            font-size: 11px;
            text-indent: -99999em;
            margin: 55px auto;
            position: relative;
            width: 10em;
            height: 10em;
            box-shadow: inset 0 0 0 1em;
            transform: translateZ(0);
        }

        .loader.loader2:before,
        .loader.loader2:after {
            position: absolute;
            content: "";
        }

        .loader.loader2:before {
            width: 5.2em;
            height: 10.2em;
            background: #3498db;
            /* New color */
            border-radius: 10.2em 0 0 10.2em;
            top: -0.1em;
            left: -0.1em;
            transform-origin: 5.1em 5.1em;
            animation: load2 2s infinite ease 1.5s;
        }

        .loader.loader2:after {
            width: 5.2em;
            height: 10.2em;
            background: #3498db;
            /* New color */
            border-radius: 0 10.2em 10.2em 0;
            top: -0.1em;
            left: 4.9em;
            transform-origin: 0.1em 5.1em;
            animation: load2 2s infinite ease;
        }

        @keyframes load2 {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        /* Loader positioning */
        .loader.loader1 {
            position: absolute;
            top: 50%;
            left: 25%;
            transform: translate(-50%, -50%);
        }

        .loader.loader2 {
            position: absolute;
            top: 50%;
            left: 75%;
            transform: translate(-50%, -50%);
        }
    </style>
</head>

<body>
    <div id="container">
        <!-- Loader 1 -->
        <div class="loader loader1">Loading...</div>

        <!-- Loader 2 -->
        <div class="loader loader2">Loading...</div>
    </div>
</body>

</html>
Output:
Radiant Social Media Icons
The Radiant Social Media Buttons use vibrant, glowing effects to make social media icons stand out. Each button lights up on hover, thanks to CSS transitions and pseudo-elements. This modern touch adds visual appeal and engages users with smooth, interactive animations.
Example: In this example, social media buttons glow when hovered over. Each icon has a unique color, and the glow effect is created using CSS transitions and box shadows.
<!DOCTYPE html>

<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8" />
    <title>Radiant Social Media Icons</title>

    <link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <style>
        * {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        body {
            display: flex;
            height: 100vh;
            text-align: center;
            align-items: center;
            justify-content: center;
            background: #262626;
        }

        ul {
            display: flex;
        }

        ul li {
            position: relative;
            display: block;
            color: #666;
            font-size: 30px;
            height: 60px;
            width: 60px;
            background: #171515;
            line-height: 60px;
            border-radius: 50%;
            margin: 0 15px;
            cursor: pointer;
            transition: 0.5s;
        }

        ul li:before {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            height: inherit;
            width: inherit;
            /* background: #d35400; */
            border-radius: 50%;
            transform: scale(0.9);
            z-index: -1;
            transition: 0.5s;
        }

        ul li:nth-child(1):before {
            background: #4267b2;
        }

        ul li:nth-child(2):before {
            background: #1da1f2;
        }

        ul li:nth-child(3):before {
            background: #e1306c;
        }

        ul li:nth-child(4):before {
            background: #2867b2;
        }

        ul li:nth-child(5):before {
            background: #ff0000;
        }

        ul li:hover:before {
            filter: blur(3px);
            transform: scale(1.2);
            /* box-shadow: 0 0 15px #d35400; */
        }

        ul li:nth-child(1):hover:before {
            box-shadow: 0 0 15px #4267b2;
        }

        ul li:nth-child(2):hover:before {
            box-shadow: 0 0 15px #1da1f2;
        }

        ul li:nth-child(3):hover:before {
            box-shadow: 0 0 15px #e1306c;
        }

        ul li:nth-child(4):hover:before {
            box-shadow: 0 0 15px #2867b2;
        }

        ul li:nth-child(5):hover:before {
            box-shadow: 0 0 15px #ff0000;
        }

        ul li:nth-child(1):hover {
            color: #456cba;
            box-shadow: 0 0 15px #4267b2;
            text-shadow: 0 0 15px #4267b2;
        }

        ul li:nth-child(2):hover {
            color: #26a4f2;
            box-shadow: 0 0 15px #1da1f2;
            text-shadow: 0 0 15px #1da1f2;
        }

        ul li:nth-child(3):hover {
            color: #e23670;
            box-shadow: 0 0 15px #e1306c;
            text-shadow: 0 0 15px #e1306c;
        }

        ul li:nth-child(4):hover {
            color: #2a6cbb;
            box-shadow: 0 0 15px #2867b2;
            text-shadow: 0 0 15px #2867b2;
        }

        ul li:nth-child(5):hover {
            color: #ff1a1a;
            box-shadow: 0 0 15px #ff0000;
            text-shadow: 0 0 15px #ff0000;
        }
    </style>
</head>

<body>
    <ul>
        <li><i class="fab fa-facebook-f"></i></li>
        <li><i class="fab fa-twitter"></i></li>
        <li><i class="fab fa-instagram"></i></li>
        <li><i class="fab fa-linkedin-in"></i></li>
        <li><i class="fab fa-youtube"></i></li>
    </ul>
</body>

</html>
Output:
Submit Button with Animation
This button animates from a simple design to a rotating spinner on click, signaling activity. Once the action is complete, it transitions to a validated state with a checkmark, providing clear feedback.
Example: In this example, a button begins as a basic "Submit" button. When clicked, it shrinks and shows a loading animation. Once the action is finished, the button displays a checkmark to show success.
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" 
          content="width=device-width,
                   initial-scale=1.0" />
    <title>Animated Button</title>
    <style>
        body {
            background: #f4f4f4;
            height: 100vh;
            margin: 0;
        }

        .wrapper {
            position: relative;
            width: 100%;
            height: 100%;
        }

        button {
            font-family: "Ubuntu", sans-serif;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 170px;
            height: 40px;
            line-height: 1;
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 1px;
            border: 3px solid #8c82fc;
            background: #fff;
            color: #8c82fc;
            border-radius: 40px;
            cursor: pointer;
            overflow: hidden;
            transition: all 0.35s;
        }

        button:hover {
            background: #8c82fc;
            color: #fff;
        }

        button span {
            opacity: 1;
            visibility: visible;
            transition: all 0.35s;
        }

        .success {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #fff;
            border-radius: 50%;
            z-index: 1;
            opacity: 0;
            visibility: hidden;
            transition: all 0.35s;
        }

        .success svg {
            width: 20px;
            height: 20px;
            fill: yellowgreen;
            transform-origin: 50% 50%;
            transform: translateY(-50%) rotate(0deg) scale(0);
            transition: all 0.35s;
        }

        button.is_active {
            width: 40px;
            height: 40px;
        }

        button.is_active .success {
            opacity: 1;
            visibility: visible;
        }

        button.is_active .success svg {
            margin-top: 50%;
            transform: translateY(-50%) rotate(720deg) scale(1);
        }

        button.is_active span {
            opacity: 0;
            visibility: hidden;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <button>
            <span>Submit</span>
            <div class="success">
                <svg xmlns:xlink="https://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 29.756 29.756"
                    style="enable-background: new 0 0 29.756 29.756" xml:space="preserve">
                    <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434
,0L10.172,18.737l-5.175-5.173 c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858
,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752 c0.944,0.943,2.489,0.943
,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z" />
                </svg>
            </div>
        </button>
    </div>
    <script>
        let btn = document.querySelector("button");

        btn.addEventListener("click", active);

        function active() {
            btn.classList.toggle("is_active");
        }
    </script>
</body>

</html>
Output:
Dynamic Word Spin
The Dynamic Word Spin animation makes a list of words scroll vertically within a container. Each word moves up and out of view before looping back to the start, creating a dynamic and engaging effect that highlights multiple items.
Example: The following code shows a rotating text effect where each word in a list scrolls upwards and loops endlessly. This is done using CSS animations to create a vertical scrolling motion for each word.
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" 
          content="width=device-width, 
                   initial-scale=1.0" />
    <title>Dynamic Word Spin</title>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        html {
            font-size: 48px;
        }

        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        h1 {
            display: inline-block;
        }

        .text-container {
            display: inline-flex;
            flex-direction: column;
            height: 2.5rem;
            overflow: hidden;
        }

        .text-container span {
            height: 2.3rem;
            color: rgb(14, 42, 196);
            animation: moveUp 10s linear infinite;
        }

        @keyframes moveUp {
            0% {
                transform: translateY(0);
            }

            5% {
                transform: translateY(0);
            }

            15% {
                transform: translateY(-2.3rem);
            }

            25% {
                transform: translateY(-2.3rem);
            }

            35% {
                transform: translateY(-4.6rem);
            }

            45% {
                transform: translateY(-4.6rem);
            }

            55% {
                transform: translateY(-6.9rem);
            }

            65% {
                transform: translateY(-6.9rem);
            }

            75% {
                transform: translateY(-9.2rem);
            }

            95% {
                transform: translateY(-9.2rem);
            }

            100% {
                transform: translateY(0);
            }
        }
    </style>
</head>

<body>
    <h1>
        I love
        <div class="text-container">
            <span style="--i: 0">Cricket</span>
            <span style="--i: 1">Football</span>
            <span style="--i: 2">Hockey</span>
            <span style="--i: 3">Food</span>
            <span style="--i: 4">Travel</span>
        </div>
    </h1>
</body>

</html>
Output:
Navigation Bar with Hover Effects
This Css animation adds a simple hover effect to navigation bar links, making them stand out when hovered over. The effect is achieved by changing the background color of the link on hover, creating a subtle visual cue for the user. This animation enhances the user experience by providing a clear indication of which link is currently being interacted with.
Example: In this example, each link in the navigation bar changes its background color when hovered over.
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" 
          content="width=device-width, 
                   initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" 
          content="ie=edge" />
    <title>Navigation Bar with Hover Effects</title>
    <style>
        /* Write CSS Here */
        nav ul {
            list-style-type: none;
            padding: 0;
            overflow: hidden;
            background-color: #333;
        }

        nav ul li {
            float: left;
        }

        nav ul li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

        nav ul li a:hover {
            background-color: #1280e7;
        }
    </style>
</head>

<body>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</body>

</html>
Output:
Expanding Search Box
This CSS animation provides a smooth, user-friendly experience by expanding the search box on hover or click. It helps users easily access the search functionality by revealing a larger input field when needed.
Example: Here's how to create an expanding search box:
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport"
          content="width=device-width, 
                   initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" 
          content="ie=edge" />
    <title>Expanding Search Box</title>
    <style>
        /* Write CSS Here */
        body {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
            min-height: 100vh;
        }

        .search-wrapper {
            width: 50px;
            height: 50px;
            display: flex;
            border-radius: 4rem;
            background: #fff;
            align-items: center;
            justify-content: center;
            outline: none;
            border: 3px solid #888;
            overflow: hidden;
            transition: 400ms ease-in-out;
            position: relative;
        }

        .active {
            width: 350px;
        }

        .search-wrapper input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin-left: 40px;
            margin-right: 2px;
            outline: none;
            border: none;
            font-size: 1.2rem;
            box-sizing: border-box;
        }

        .search-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            border-radius: 50%;
            border: 2px solid white;
            width: 50px;
            height: 50px;
            cursor: pointer;
            background: #1070e6;
            margin-left: auto;
            z-index: 1;
        }

        .search-btn i {
            color: #fff;
            font-size: 1rem;
        }
    </style>>
</head>

<body>
    <div class="search-wrapper">
        <input type="search" placeholder="Search" />
        <button class="search-btn">
            <i id="search-icon" class="fa-solid fa-magnifying-glass"></i>
        </button>
    </div>
    <script>
        const search = document.querySelector(".search-wrapper");
        const input = search.querySelector("input");

        search.addEventListener("mouseenter", () => {
            if (!input.matches(":focus")) {
                search.classList.add("active");
            }
        });

        search.addEventListener("mouseleave", () => {
            if (!input.matches(":focus") && !input.value.trim()) {
                search.classList.remove("active");
            }
        });

    </script>>
</body>

</html>
Output:
Button Wiggle
Simple CSS animation to make a button wiggle. It's meant to draw attention to a call-to-action button.
Example: In this , We create a call-to-action button with a CSS wiggle effect to make it stand out. The button uses a subtle rotating animation to grab the user's attention.
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" 
          content="width=device-width, 
                   initial-scale=1.0" />
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css?family=Droid+Sans+Mono" 
rel="stylesheet" type="text/css" />
    <style>
        .btn {
            display: block;
            width: 180px;
            height: 50px;
            font-family: "Droid Sans Mono", sans-serif;
            font-size: 16px;
            color: #fff;
            background-color: #69a551;
            border-radius: 5px;
            box-shadow: 0px 3px 0px #3d8c72;
            text-align: center;
            line-height: 50px;
            text-decoration: none;
            margin: 50px auto 0;
            font-weight: bold;
            -webkit-animation: btnWiggle 5s infinite;
            -moz-animation: btnWiggle 5s infinite;
            -o-animation: btnWiggle 5s infinite;
            animation: btnWiggle 5s infinite;
        }

        .subtext {
            font-family: "Droid Sans Mono", sans-serif;
            font-size: 14px;
            letter-spacing: 0.05em;
            text-align: center;
        }

        /* animation */
        @-webkit-keyframes btnWiggle {
            0% {
                -webkit-transform: rotate(0deg);
            }

            2% {
                -webkit-transform: rotate(-1deg);
            }

            3.5% {
                -webkit-transform: rotate(1deg);
            }

            5% {
                -webkit-transform: rotate(0deg);
            }

            100% {
                -webkit-transform: rotate(0deg);
            }
        }

        @-o-keyframes btnWiggle {
            0% {
                -webkit-transform: rotate(0deg);
            }

            2% {
                -webkit-transform: rotate(-1deg);
            }

            3.5% {
                -webkit-transform: rotate(1deg);
            }

            5% {
                -webkit-transform: rotate(0deg);
            }

            100% {
                -webkit-transform: rotate(0deg);
            }
        }

        @keyframes btnWiggle {
            0% {
                -webkit-transform: rotate(0deg);
            }

            2% {
                -webkit-transform: rotate(-1deg);
            }

            3.5% {
                -webkit-transform: rotate(1deg);
            }

            5% {
                -webkit-transform: rotate(0deg);
            }

            100% {
                -webkit-transform: rotate(0deg);
            }
        }
    </style>
</head>

<body>
    <a class="btn" href="#">Call to action</a>
    <p class="subtext">Get their attention with a button that wiggles.</p>
</body>

</html>
Output:
Animated Vertical Bars
This code creates a series of bars that animate in height and color to give a dynamic effect. The scale animation makes each bar grow taller and change color, then return to its original size and color. Each bar starts its animation at a different time, creating a staggered visual effect.
Example: This HTML and CSS code creates vertical bars that animate in height and color. The bars grow and shrink while changing colors, with each bar starting its animation at different times to create a cascading effect.
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport"
          content="width=device-width,
                   initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible"
          content="ie=edge" />
    <title>Animated Vertical Bars</title>
    <style>
        body {
            background-color: #282c34;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .bars-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 80%;
        }

        .bar {
            width: 15px;
            height: 40px;
            background-color: #61dafb;
            border-radius: 5px;
            animation: scale 3s infinite ease-in-out;
        }

        @keyframes scale {

            0%,
            100% {
                height: 40px;
                background-color: #61dafb;
            }

            50% {
                height: 120px;
                background-color: #21a0f6;
            }
        }

        .bar:nth-child(1) {
            animation-delay: 0s;
        }

        .bar:nth-child(2) {
            animation-delay: 0.3s;
        }

        .bar:nth-child(3) {
            animation-delay: 0.6s;
        }

        .bar:nth-child(4) {
            animation-delay: 0.9s;
        }

        .bar:nth-child(5) {
            animation-delay: 1.2s;
        }

        .bar:nth-child(6) {
            animation-delay: 1.5s;
        }

        .bar:nth-child(7) {
            animation-delay: 1.8s;
        }

        .bar:nth-child(8) {
            animation-delay: 2.1s;
        }

        .bar:nth-child(9) {
            animation-delay: 2.4s;
        }

        .bar:nth-child(10) {
            animation-delay: 2.7s;
        }
    </style>>
</head>

<body>
    <div class="bars-container">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>

</body>

</html>
Output:
Three Dots Loading
The Three Dots Loading animation features three dots that bounce up and down one after another. This effect is created with CSS animations that scale each dot vertically. By starting the animations at different times, the loading indicator looks smooth and continuous.
Example: This HTML and CSS code creates a loading animation with three bouncing dots. Each dot scales up and down at different times, making the loading indicator visually appealing.
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" 
          content="width=device-width,
                   initial-scale=1.0">
    <style>
        /* Write CSS Here */
        .loader {
            /* the colors */
            --c1: #F77825;
            --c2: #D3CE3D;
            --c3: #60B99A;
            --c4: #554236;
            /**/

            width: 180px;
            /* control the size */
            aspect-ratio: 8/5;
            --_g: no-repeat radial-gradient(#000 68%, #0000 71%);
            -webkit-mask: var(--_g), var(--_g), var(--_g);
            -webkit-mask-size: 25% 40%;
            background:
                conic-gradient(var(--c1) 50%, var(--c2) 0) no-repeat,
                conic-gradient(var(--c3) 50%, var(--c4) 0) no-repeat;
            background-size: 200% 50%;
            animation:
                back 4s infinite steps(1),
                load 2s infinite;
        }

        @keyframes load {
            0% {
                -webkit-mask-position: 0% 0%, 50% 0%, 100% 0%
            }

            16.67% {
                -webkit-mask-position: 0% 100%, 50% 0%, 100% 0%
            }

            33.33% {
                -webkit-mask-position: 0% 100%, 50% 100%, 100% 0%
            }

            50% {
                -webkit-mask-position: 0% 100%, 50% 100%, 100% 100%
            }

            66.67% {
                -webkit-mask-position: 0% 0%, 50% 100%, 100% 100%
            }

            83.33% {
                -webkit-mask-position: 0% 0%, 50% 0%, 100% 100%
            }

            100% {
                -webkit-mask-position: 0% 0%, 50% 0%, 100% 0%
            }
        }

        @keyframes back {

            0%,
            100% {
                background-position: 0% 0%, 0% 100%
            }

            25% {
                background-position: 100% 0%, 0% 100%
            }

            50% {
                background-position: 100% 0%, 100% 100%
            }

            75% {
                background-position: 0% 0%, 100% 100%
            }
        }



        body {
            margin: 0;
            min-height: 100vh;
            display: grid;
            place-content: center;
        }
    </style>
</head>

<body>
    <div class="loader"></div>
</body>

</html>
Output:
Conclusion
CSS animations are a powerful tool for enhancing the visual appeal and interactivity of your web projects. By incorporating these top 10 CSS animations, you can create engaging user experiences and add a touch of creativity to your designs. From smooth transitions to dynamic effects, these techniques provide practical solutions for making your websites more lively and user-friendly.

