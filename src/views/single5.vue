<template>
  <div>
    <header class="header">
      <div class="header_container">
        <div class="heading">  VideoVerse</div>
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
              <a href="/main" class="nav_link navtop active">
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
              <a href="/home1" class="nav_link navtop">
                <i class="fa-solid fa-thumbs-up nav_icon"></i>
                <span class="nav_name">Logout</span>
              </a>


            </div>
          </div>
        </div>
      </nav>
    </section>
    <div style="display: flex;">
      <section class="video_content grid">
        <div class="video_items" v-for="(item, index) in videoItems" :key="index">
          <video controls>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/videoverse-61929.appspot.com/o/video5.mp4?alt=media&token=dbf85d0d-379a-42df-92b7-8e4be86d5c70"
              type="video/mp4">
          </video>
          <div class="details flex">
            <div class="img">
              <img :src="item.channelLogo" alt="">
            </div>
            <div class="heading">
              <p>NATURE</p>
              <span>CHANNEL NAME <i class="fa fa-circle-check"></i></span>
              <span>15M Subscribers</span>
              <hr>
              <h5>Video Description </h5>
              <h5>Video Disclaimer</h5>
              <span class="heading1">53.5M Subscribers </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="heading">
          Recommended Videos
        </div>
        <div v-for="(item, index) in videoItems1" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>

          <div class="details flex">

            <div class="">
              <p>{{ item.title }}</p>

            </div>
          </div>
        </div>
      </section>
    </div>
    <hr>
    <div class="details_Comment">
      <div class="heading">Comments 99+</div>
<hr>
      <div v-for="(items, index) in commentItems" :key="index">
        <div class="heading1">
          <h4>{{ items.commentAuthorName }} <span>{{ items.date }}</span></h4>
          <p>{{ items.comment }}</p>
          <div class="comment-like flex">
            <div class="icon" @click="likeComment">
              <i class="fa fa-thumbs-up" aria-hidden="true"></i>
              <label>{{ items.likes }}</label>
            </div>
            <div class="icon" @click="dislikeComment">
              <i class="fa fa-thumbs-down"></i>
              <label>{{ items.dislikes }}</label>
            </div>
            <div class="icon" @click="replyComment">
              <label>REPLY</label>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import back5 from './images/video_images/back5.jpg'
export default {
  name: 'VideoContent',
  data() {
    return {
      videoItems: [
        {
          image: back5,
          channelLogo: "https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png",
          title: 'Sample Video',
          channelName: 'Channel Name',
          views: '56.7M',
          time: '.1 Week ago'
        },

      ],
      videoItems1: [
        {
          link: "/single2",
          image: back5,
          channelLogo: "https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png",
          title: 'Sample Video',
          channelName: 'Channel Name',
          views: '56.7M',
          time: '.1 Week ago'
        },
        {
          link: "/single1",
          image: back5,
          channelLogo: "https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png",
          title: 'Sample Video',
          channelName: 'Channel Name',
          views: '56.7M',
          time: '.1 Week ago'
        },
        {
          link: "/single3",
          image: back5,
          channelLogo: "https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png",
          title: 'Sample Video',
          channelName: 'Channel Name',
          views: '56.7M',
          time: '.1 Week ago'
        },
        {
          link: "/single4",
          image: back5,
          channelLogo: "https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png",
          title: 'Sample Video',
          channelName: 'Channel Name',
          views: '56.7M',
          time: '.1 Week ago'
        },
      ],
      commentItems: [
        {
          comment: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum vitae asperiores ipsam obcaecati, laborum odio? Nulla quos sed nobis voluptatem repudiandae impedit, possimus velit sint hic ab aut dolore.',
          commentAuthor: 'Sample Author',
          commentAuthorName: 'Sample Name',

        }, {
          comment: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum vitae asperiores ipsam obcaecati, laborum odio? Nulla quos sed nobis voluptatem repudiandae impedit, possimus velit sint hic ab aut dolore.',
          commentAuthor: 'Sample Author',
          commentAuthorName: 'Sample Name',

        }, {
          comment: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum vitae asperiores ipsam obcaecati, laborum odio? Nulla quos sed nobis voluptatem repudiandae impedit, possimus velit sint hic ab aut dolore.',
          commentAuthor: 'Sample Author',
          commentAuthorName: 'Sample Name',

        }, {
          comment: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum vitae asperiores ipsam obcaecati, laborum odio? Nulla quos sed nobis voluptatem repudiandae impedit, possimus velit sint hic ab aut dolore.',
          commentAuthor: 'Sample Author',
          commentAuthorName: 'Sample Name',

        }, {
          comment: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum vitae asperiores ipsam obcaecati, laborum odio? Nulla quos sed nobis voluptatem repudiandae impedit, possimus velit sint hic ab aut dolore.',
          commentAuthor: 'Sample Author',
          commentAuthorName: 'Sample Name',

        }, {
          comment: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum vitae asperiores ipsam obcaecati, laborum odio? Nulla quos sed nobis voluptatem repudiandae impedit, possimus velit sint hic ab aut dolore.',
          commentAuthor: 'Sample Author',
          commentAuthorName: 'Sample Name',

        }
      ],
      props: {
        user: {
          type: String,
          required: true,
        },
        date: {
          type: String,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
        likes: {
          type: Number,
          required: true,
        },
        dislikes: {
          type: Number,
          required: true,
        },
      },
      methods: {
        likeComment() {
          this.likes += 1;
        },
        dislikeComment() {
          this.dislikes += 1;
        },

      },
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

.heading1 {
  font-size: 15px;
  color: #ffffff;
}

.heading {
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;

}

span,
i {
  transition: 0.5s;
}

/*-------------------header------------*/
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

/*----------nav_dropdown   */
/*--------------nav------------*/
/*--------------video_items------------*/
.video_items video {
  width: 1070px;

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
  
  
  
 
