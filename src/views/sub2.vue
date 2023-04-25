<template>
    <div>
        <header class="header">
            <div class="header_container">
                <div class="name">VideoVerse</div>
                <div class="none"> </div>
                <div class="search">
                    <input type="text" placeholder="Search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <div class="user">
                    <div class="icon">
                        <i class="fa-solid fa-video"></i>
                        <i class="fa-solid fa-grip"></i>
                        <i class="fa-solid fa-bell"></i>
                    </div>


                </div>

                <div class="toggle">
                    <i class="fa-solid fa-bars" id="header-toggle"></i>
                </div>
            </div>
        </header>

        <section class="nav" id="navbar">
            <nav class="nav_container">
                <div>
                    <div class="img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkXcvlHhC-kjtdmdFGVsdUVrzpwwMHw5Y6A&usqp=CAU"
                            alt="">
                    </div>

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
                            <a href="/sub2 " class="nav_link navtop">
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
        <section class="video_content grid">
            <div class="video_items" v-for="(item, index) in videoItems" :key="index">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
                <div class="details flex">
                    <div class="img">
                        <img :src="item.channelLogo" alt="videoItems.title">
                    </div>
                    <div class="heading">
                        <p>{{ item.title }}</p>
                        <div>
                    <h5>{{ videoItems.title }}</h5>
                    <p>{{ videoItems.views }} subscribers</p>
                </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
</template>
<script>
import channelLogo from './images/channel_logo/img1.jpg'
import Single1 from './single1.vue'
export default {
    name: 'VideoContent',

    data() {

        return {

            videoItems: [
                {
                    link: ' /single1',
                    image: channelLogo,
                    channelLogo: "https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png",
                    title: 'Channel Name',
                    views: '56.7M',
                    
                },
                {
                    link: '/single1',
                    image: channelLogo,
                    channelLogo: "https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png",
                    title: 'Channel Name',
                    views: '56.7M',
                    
                },
                {
                    link: "/single1",
                    image: channelLogo,
                    channelLogo: "https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png",
                    title: 'Channel Name',
                    views: '56.7M',
                    
                },

                {
                    link: "/single1",
                    image: channelLogo,
                    channelLogo: "https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png",
                    title: 'Channel Name',
                    views: '56.7M',
                    
                },
                {
                    link: "/single1",
                    image: channelLogo,
                    channelLogo: "https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png",
                    title: 'Channel Name',
                    views: '56.7M',
                    
                },
                {
                    link: "/single1",
                    image: channelLogo,
                    channelLogo: "https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png",
                    title: 'Channel Name',
                    views: '56.7M',
                    
                },
                {
                    link: "/single1",
                    image: channelLogo,
                    channelLogo: "https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png",
                    title: 'Channel Name',
                    views: '56.7M',
                    
                },
                {
                    link: "/single1",
                    image: channelLogo,
                    channelLogo: "https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png",
                    title: 'Channel Name',
                    views: '56.7M',
                    
                }
            ]
        }
    }
}

</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

*,
::before,
::after {
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    padding: 16px 16px 0;
    margin: 56px 0 0 0;
    font-size: 16px;
    color: #58555e;
    background: #121212;
}

h3 {
    margin: 0;
}

a {
    text-decoration: none;
}

img {
    max-width: 100%;
    height: auto;
}

span,
i {
    transition: 0.5s;
}

/*-------------------header------------*/
.name {
    font-size: 16px;
    color: #6f6e73;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;

}

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #232323;
    box-shadow: 0 1px 0 rgba(22, 8, 43, 0.1);
}

header .header_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
}

header .search {
    display: flex;
    padding: 7px 12px;
    background-color: #121212;
    border-radius: 4px;
}

header input {
    width: 100%;
    border: none;
    outline: none;
    background-color: #121212;
    color: #58555e;
}

header input::placeholder {
    color: #58555e;
}

header .user {
    display: flex;
    align-items: center;
}

header .user img {
    width: 35px;
    height: 35px;
    object-fit: contain;
}

header .user i {
    margin-right: 40px;
}

header i,
header .toggle {
    font-size: 19px;
    color: #fff;
    cursor: pointer;
}

/*-------------------header------------*/
/*--------------nav------------*/
.nav {
    position: fixed;
    top: 0;
    left: -100%;
    height: 100vh;
    padding: 14px 16px 0;
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

/*----------nav_dropdown   */
/*--------------nav------------*/
/*--------------video_items------------*/
.video_items video {
    width: 300px;
    margin: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
}

.video_items a img {
    width: 295px;
    height: 170px;
    object-fit: cover;
}

.video_items .details {
    margin-top: 15px;
}

.video_items .img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin: 10px 20px 0 0;
}

.video_items img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.video_items .heading {
    width: 80%;
    color: #fff;
}

.video_items p {
    margin: 0;
}

.video_items span {
    margin: 0;
    color: grey;
    font-size: 13px;
    font-weight: 500;
}

.flex {
    display: flex;
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

/*--------------video_items------------*/
@media screen and (min-width:768px) {
    body {
        padding: 16px 48px 0 96px;
    }

    header {
        padding: 0 48px 0 96px;
    }

    header .header_container {
        height: calc(56px + 8px);
    }

    header .search {
        width: 300px;
        padding: 9px 12px;
    }

    header .toggle {
        display: none;
    }

    header .logo {
        display: block;
    }

    header .img {
        width: 40px;
        height: 40px;
        order: 1;
    }

    .nav .nav_items {
        row-gap: 27px;
    }

    .nav {
        left: 0;
        padding: 19px 24px 0;
        width: 88px;
    }

    main {
        padding-top: 20px;
        padding-left: 0;
    }

    .nav:hover {
        width: 265px;
    }

    .nav .nav_subititle,
    .nav .logo_name,
    .nav .nav_dropdown-icon,
    .nav .navtop .nav_link:nth-child(4),
    .nav .subscribe-contain {
        opacity: 0;
        transition: 0.5s;
    }

    .nav:hover .nav_subititle,
    .nav:hover .logo_name,
    .nav:hover .nav_dropdown-icon,
    .nav:hover .navtop .nav_link:nth-child(4),
    .nav:hover .subscribe-contain {
        opacity: 1;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
}

@media screen and (max-width:420px) {
    header .search {
        width: 70%;
    }

    header .none,
    header .user {
        display: none;
    }

    .grid {
        grid-template-columns: repeat(1, 1fr);
    }

    main {
        padding-top: 20px;
        padding-left: 50px;
    }
}

@media screen and (min-width:1080px) {
    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
    }
}
</style>
  
  
  
  