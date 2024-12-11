# **Junior web developer exercise**
> Flarmio's junior web developer front-end excersice.
Implement the given design form as identical as possible.
(The input field should only allow numbers bigger than 10).

---

## **Table of Contents**
1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Architecture](#architecture)
5. [Getting Started](#getting-started)

---

## **Overview**
Basic form with a number type input field.

---

## **Features**

- **Responsive Design**: Compatible with mobile and desktop devices.

| Device Type | Breakpoint Range    |
| :---:   | :---: |
| Extra Small (Phones) | ``max-width:`` 767px |
| Small (Tablets) | ``min-width:`` 768px to ``max-width:`` 1023px |
|Medium (Small Laptops) | ``min-width:`` 1024px to ``max-width:`` 1279px |
|Large (Desktops)  | ``min-width:`` 1280px|

---

## **Technologies Used**
Frontend Tech Stack.

### **Frontend**
- CSS Framework: Bootstrap

---

## **Getting Started**

First Step:
- **Docker Installed**  
  Download and install Docker from [Docker's official website](https://www.docker.com/get-started). Verify the installation by running:
  ```bash
  docker --version

Second Step:
- **Clone Repository**  
  Clone git repository from [here]().
  ```bash
  git clone https://github.com/vasilismoulas/Junior-Web-Developer-Exercise/

Third Step:
 - **Build Docker image**  
  After you open the repo locally build the projects docker image
   ```bash
   docker build -t excersice:v1 .
 
   
  Fourth Step:     
 - **Run Docker container**  
  After you build the docker image run the corresponding container.
   ```bash
   docker run -d -p 80:80 html-server-image:v1
  
  Final Step:
 - **Visit Website**  
  Visit website running localhost on port 80.
   ```bash
   http://localhost:80/
 
