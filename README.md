# Muay-thai-guy

## Overview

**Muay-thai-guy** is a product review and blog app all rolled into one. This app combines my long love of muay thai with my new and growing love of programming. All opinions and reviews will be based off my 5 years of expierence in Muay Thai.
<br>

## MVP

### Goals

- Users enter on the landing page where they will see a quick look at essential gear to get and beneath it equipment that they would need to make themselves a muay thai home-gym.
- As they go on into the app they will come across a product review page with the name, type of equipment and brand along with my review of said product.
- A blog post about getting started with this terrific martial art will be included, detailing my thoughts on Muay Thai and how to get into it and things to look out for when entering a gym for the first time.
- An about me page will tell them about myself and my personal story in pursuing muay thai.
- A admin sign in page will only be available to me where I can update, create or delete products and posts.

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|    Library    | Description                                                                                                                                                     |
| :-----------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     React     | a free and open-source front-end JavaScript library for building user interfaces or UI components                                                               |
| React Router  | Router enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. |
| Ruby on Rails | an open source framework for Web development in Ruby, an object-oriented programming (OOP) language similar to Perl and Python.                                 |
|      jwt      | For token based authentication                                                                                                                                  |
|    bcrypt     | Password encryption...                                                                                                                                          |

<br>

### Client (Front End)

#### Wireframes

![Desktop](https://res.cloudinary.com/dyfvqwppd/image/upload/v1633361964/Screen_Shot_2021-10-04_at_11.38.20_AM_qe3fpq.png)

![Mobile](https://res.cloudinary.com/dyfvqwppd/image/upload/v1633362114/Screen_Shot_2021-10-04_at_11.41.43_AM_ciymll.png)

#### Component Tree

![Component Tree Sample](https://res.cloudinary.com/dyfvqwppd/image/upload/v1633362306/Screen_Shot_2021-10-04_at_11.44.56_AM_dj1n2e.png)

#### Component Architecture

```structure

src
|__ assets/
      |__ images
|__ components/
      |__ Nav
          |__Nav.jsx
          |__Nav.css
      |__ Footer
          |__Footer.jsx
          |__Footer.css
      |__ Layout
          |__Layout.jsx
          |__Layout.css
      |__ ProductCard
          |__ProductCard.jsx
          |__ProductCard.css
      |__ Post
          |__Post.jsx
          |__Post.css
      |__ Search
          |__Search.jsx
          |__Search.css
      |__ ProductForm
          |__ProductForm.jsx
          |__ProductForm.css
      |__ PostForm
          |__PostForm.jsx
          |__PostForm.css
      |__ AboutMe
          |__AboutMe.jsx
          |__AboutMe.css
      |__ SigninForm
          |__SigninForm.jsx
          |__SigninForm.css
|__ screens/
      |__ Home
          |__Home.jsx
          |__Home.css
      |__ Products
          |__Products.jsx
          |__Products.css
      |__ ProductDetail
          |__ProductDetail.jsx
          |__ProductDetail.css
      |__ Posts
          |__Posts.jsx
          |__Posts.css
      |__ PostsDetail
          |__PostsDetail.jsx
          |__PostsDetail.css
      |__ About
          |__About.jsx
          |__About.css
      |__ Create-Edit-Product
          |__Create/Edit.jsx
          |__Create/Edit.css
      |__ Create-Edit-Post
          |__Create/Edit.jsx
          |__Create/Edit.css
|__ containers/
      |__ MainContainer
          |__MainContainer.jsx
          |__MainContainer.css
|__ services/
      |__ auth.js
      |__ apiConfig.js
      |__ posts.js
      |__ products.js

```

#### Time Estimates

| Task                          | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------- | :------: | :------------: | :-----------: | :---------: |
| Admin Authentication          |    H     |      2hr       | :-----------: | :---------: |
| Create CRUD Actions Backend   |    H     |      3hr       |     :--:      |    :--:     |
| Create Data                   |    H     |      1hr       | :-----------: | :---------: |
| Routes for backend            |    H     |      1hr       | :-----------: | :---------: |
| Frontend api(Services)        |    H     |      2hr       | :-----------: | :---------: |
| App.js functionality          |    H     |      1hr       | :-----------: | :---------: |
| MainContainer functionality   |    H     |      1hr       | :-----------: | :---------: |
| Funct Home + Styling          |    H     |      3hr       | :-----------: | :---------: |
| Funct Products + Styling      |    H     |      3hr       | :-----------: | :---------: |
| Funct ProductDetail + Styling |    H     |      3hr       | :-----------: | :---------: |
| Funct Posts + Styling         |    H     |      3hr       | :-----------: | :---------: |
| Funct PostDetail + Styling    |    H     |      3hr       | :-----------: | :---------: |
| About + Styling               |    H     |      3hr       | :-----------: | :---------: |
| Funct Create/Edit + Styling   |    H     |      3hr       | :-----------: | :---------: |
| Funct Nav + Styling           |    H     |      3hr       | :-----------: | :---------: |
| Funct Footer + Styling        |    H     |      3hr       | :-----------: | :---------: |
| Funct Layout + Styling        |    H     |      3hr       | :-----------: | :---------: |
| Funct ProductCard + Styling   |    H     |      3hr       | :-----------: | :---------: |
| Funct Post + Styling          |    H     |      3hr       | :-----------: | :---------: |
| Funct Search + Styling        |    H     |      1hr       | :-----------: | :---------: |
| Funct ProductForm + Styling   |    H     |      4hr       | :-----------: | :---------: |
| Funct PostForm + Styling      |    H     |      4hr       | :-----------: | :---------: |
| Funct AboutMe + Styling       |    H     |      1hr       | :-----------: | :---------: |
| Funct SigninForm + Styling    |    H     |      1hr       | :-----------: | :---------: |
| Styling Components            |    H     |      ---       | :-----------: | :---------: |
| Styling Screens               |    H     |      ---       | :-----------: | :---------: |
| Total                         |          |      ---       | :-----------: | :---------: |

<br>

### Server (Back End)

#### ERD Model

![ERD Sample](https://res.cloudinary.com/dyfvqwppd/image/upload/v1633362201/Screen_Shot_2021-10-04_at_11.43.03_AM_bw2oke.png)
<br>

---

## Post-MVP

- Create a user sign in that will let users comment on posts or products.
- Add in an ability to favorite a product or post that will then save to the user profile.

---

## Code Showcase

```

```

## Code Issues & Resolutions

```

```
