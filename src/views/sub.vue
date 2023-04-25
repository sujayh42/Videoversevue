<template>
    <div id="app">
        <header>
            <h1>VideoVerse</h1>
        </header>
        <main>
            <section class="channel" v-for="(channel, index) in channels" :key="index">
                <img :src="channel.logo" :alt="channel.name">
                <div>
                    <h2>{{ channel.name }}</h2>
                    <p>{{ channel.subscribers }} subscribers</p>
                </div>
                <button>Subscribe</button>
            </section>
            <section class="nav" id="navbar">
            <nav class="nav_container">
                <div>
                    <a href="#" class="nav_link nav_logo ">
                        <i class="fa-solid fa-bars nav_icon"></i>
                        <span class="logo_name">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkXcvlHhC-kjtdmdFGVsdUVrzpwwMHw5Y6A&usqp=CAU"
                                width="50px" alt="">
                            VideoVerse
                        </span>
                    </a>

                    <div class="nav_list">
                        <div class="nav_items navtop">
                            <a href="#" class="nav_link navtop active">
                                <i class="fa fa-house nav_icon"></i>
                                <span class="nav_name">Home</span>
                            </a>
                            <a href="#" class="nav_link navtop">
                                <i class="fa fa-compass nav_icon"></i>
                                <span class="nav_name">Explore</span>
                            </a>
                            <a href="#" class="nav_link navtop">
                                <i class="fa-brands fa-tiktok nav_icon"></i>
                                <span class="nav_name">Short Video</span>
                            </a>
                            <a href="/sub " class="nav_link navtop">
                                <i class="fa-solid fa-users nav_icon"></i>
                                <span class="nav_name">Subscriptions</span>
                            </a>
                            <a href="#" class="nav_link navtop">
                                <i class="fa-solid fa-video nav_icon"></i>
                                <span class="nav_name">Library</span>
                            </a>
                            <a href="#" class="nav_link navtop">
                                <i class="fa-solid fa-clock-rotate-left nav_icon"></i>
                                <span class="nav_name">History</span>
                            </a>
                            <a href="#" class="nav_link navtop">
                                <i class="fa-solid fa-thumbs-up nav_icon"></i>
                                <span class="nav_name">Like</span>
                            </a>

                            <div class="nav_dropdown">
                                <a href="#" class="nav_link">
                                    <i class="fa-solid fa-chevron-down nav_icon"></i>
                                    <span class="nav_name">Show More</span>
                                </a>

                                <div class="nav_dropdown-collapse">
                                    <div class="nav_dropdown-content">
                                        <a href="#" class="nav_dropdown-item">Grid Box</a>
                                        <a href="#" class="nav_dropdown-item">Frontend Design</a>
                                        <a href="#" class="nav_dropdown-item">Backend Design</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
        </main>
        <footer>
            <!-- Your footer content here -->
        </footer>
    </div>
</template>
  
<script>
import image from "./images/channel_logo/img1.jpg"
export default {
    data() {
        return {
            channels: [
                {
                    name: 'Channel Name',
                    logo: image,
                    subscribers: '59.9M',
                },
                {
                    name: 'Channel Name',
                    logo: image,
                    subscribers: '59.9M',
                },
                {
                    name: 'Channel Name',
                    logo: image,
                    subscribers: '59.9M',
                },
                {
                    name: 'Channel Name',
                    logo: image,
                    subscribers: '59.9M',
                },
                {
                    name: 'Channel Name',
                    logo: image,
                    subscribers: '59.9M',
                },
                {
                    name: 'Channel Name',
                    logo: image,
                    subscribers: '59.9M',
                },
                {
                    name: 'Channel Name',
                    logo: image,
                    subscribers: '59.9M',
                },
                {
                    name: 'Channel Name',
                    logo: image,
                    subscribers: '59.9M',
                },
                {
                    name: 'Channel Name',
                    logo: image,
                    subscribers: '59.9M',
                },
                {
                    name: 'Channel Name',
                    logo: image,
                    subscribers: '59.9M',
                },

            ],
        };
    },
};
</script>
  
<style >
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

header {
    background-color: rgb(33, 32, 32);
    color: #fff;
    padding: 20px;
}
/*--------------nav------------*/
.nav {
    position: fixed;
    top: 0;
    left: -100%;
    height: 100vh;
    padding: 16px 16px 0;
    background: #1c1c1c;
    box-shadow: 1px 0 0 rgba(22, 8, 43, 0.1);
    z-index: 100;
    transition: 0.5s;
}

.nav_container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 48px;
    overflow: auto;
    scrollbar-width: none;
}

.nav_container::-webkit-scrollbar {
    display: none;
}

.nav_logo {
    font-weight: 600;
    margin: 0;
    margin-top: 0;
    margin-bottom: 20px;
}

.logo_name {
    display: flex;
}

.logo_name i {
    font-size: 25px;
    margin-right: 10px;
    color: #ff0000;
}

.nav_list,
.nav_items {
    display: grid;
}

.nav_list {
    row-gap: 40px;
}

.nav_items {
    row-gap: 24px;
}

.nav_link {
    display: flex;
    align-items: center;
    color: #fff;
}

.nav_link:hover {
    color: #ff0000;
}

.nav_icon {
    width: 40px;
    font-size: 19px;
}

.nav_name {
    font-size: 15px;
    font-weight: 500;
    white-space: nowrap;
}

.nav_subititle {
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #a5a1aa;
}

/*----------nav_dropdown  */
.nav_dropdown {
    overflow: hidden;
    max-height: 21px;
    transition: 0.5s;
}

.nav_dropdown-collapse {
    background-color: #232323;
    border-radius: 4px;
    margin-top: 16px;
}

.nav_dropdown-content {
    display: grid;
    row-gap: 8px;
    padding: 10px;
}

.nav_dropdown-item {
    font-size: 12px;
    font-weight: 500;
    color: #fff;
}

.nav_dropdown-item:hover {
    color: #ff0000;
}

.nav_dropdown-icon {
    margin-left: auto;
    transition: 0.5s;
}

.nav_dropdown:hover {
    min-height: 100rem;
}

.subscribe {
    width: 40px;
    height: 40px;
    border: 2px solid #fff;
    border-radius: 50%;
    margin-right: 10px;
    padding: 5px;
}

.nav_dropdown-items,
.nav_dropdown-second {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.navtop .nav_link:nth-child(4) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 20px;
}

.subscribe-container {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 20px;
}

.show-menu {
    left: 0;
}

.active {
    color: #ff0000;
} 
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    margin-right: 20px;
}

nav ul li:last-child {
    margin-right: 0;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}

nav form {
    display: flex;
    align-items: center;
}

nav form input {
    padding: 5px;
    border-radius: 5px;
    border: none;
    margin-right: 10px;
}

nav form button {
    padding: 5px 10px;
    background-color: #fff;
    color: #f00;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.nav_link {
    display: flex;
    color: #fff;
}



.nav_link:hover {
    color: #ff0000;
}

main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    background-color: black;
}

.channel {
    width: 300px;
    margin: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
}

.channel img {
    display: block;
    width: 100%;
    height: auto;
}

.channel div {
    padding: 10px;
}

.channel h2 {
    margin: 0;
    font-size: 20px;
}

.channel p {
    margin: 0;
    color: #888;
}

.channel button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #f00;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

.channel button:hover {
    background-color: #d00;
}

footer {
    background-color: #ddd;
    padding: 20px;
    text-align: center;
}

footer ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
}

footer ul li {
    margin-right: 20px;
}

footer ul li:last-child {
    margin-right: 0;
}

footer ul li a {
    color: #888;
    text-decoration: none;
}

footer p {
    margin-top: 20px;
    font-size: 14px;
    color: #888;
}
</style>

