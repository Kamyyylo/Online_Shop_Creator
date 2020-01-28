# Online Shop Creator
## This was my thesis so I suggest do not copy the whole code :D

**Frontend:** React, Redux, Bootstrap, React Libraries<br />
**Backend:** Java, Spring, Spring JPA<br />
**Database:** SQL<br />
**Communication:** Rest API<br />
**Design Pattern:** MVC<br />
**Deployed:** https://online-shop-builder.herokuapp.com/ <br />

This website is an online shop that can be customized by its owner. User with "normal" role can view and buy products.<br />
User with admin rights can change name of the shop, picture on the main page and email to contact. <br />
He can also add new categories and products and edit them if its needed.<br />
Logging is secured by **Spring Security** and **JWT token**. <br />
Every user has his own shopping cart with items added that don't disappear after logout.<br />
User without an account **cannot proceed** to the app by direct links. <br />
User logged in **cannot go to administrator windows** like add or edit categories or products by direct links.<br />
All forms has **data validations**. To database you can only send correct informations.<br />

## Database Schema<br />
![alt text](https://i.ibb.co/hVvCTBg/databaseschema.png)
## Views with normal user rights and administrator<br />
![alt text](https://i.ibb.co/7tcKQFh/rejestracja.png)
![alt text](https://i.ibb.co/PzFxxjF/rejestracja-bledy.png)
![alt text](https://i.ibb.co/VTJWXzZ/logowanie.png)
![alt text](https://i.ibb.co/y4MBBwG/logowanie-bledy.png)
![alt text](https://i.ibb.co/YyvKxnF/edycja-glownych-danych.png)
![alt text](https://i.ibb.co/7YVv3hV/zmiana-glownych-danych-bledy.png)
![alt text](https://i.ibb.co/mbdrJ0r/ekran-glowny-uzytkownilk-zwykly.png)
![alt text](https://i.ibb.co/jTv0xxY/ekran-glowny-administrator.png)
![alt text](https://i.ibb.co/YtsBx5c/dodawanie-Kategorii.png)
![alt text](https://i.ibb.co/XD1D4Hw/dodawanie-kategori-bledy.png)
![alt text](https://i.ibb.co/f2Kb3CG/EDYCJA-KATEGORII.png)
![alt text](https://i.ibb.co/4PbgDDk/EDYCJA-KATEGORII-BLEDY.png)
![alt text](https://i.ibb.co/7WMXpBH/dodawanie-produktu.png)
![alt text](https://i.ibb.co/fkpyFJX/dodawanie-produktu-bledy.png)
![alt text](https://i.ibb.co/F63c27R/edycja-produktu.png)
![alt text](https://i.ibb.co/CQbB54Y/edycja-produktu-z-bledami.png)
![alt text](https://i.ibb.co/sHBwR7C/produkty-lista-bez-admina.png)
![alt text](https://i.ibb.co/QmdVbBp/products-admin-mode.png)
![alt text](https://i.ibb.co/F63c27R/edycja-produktu.png)
![alt text](https://i.ibb.co/CQbB54Y/edycja-produktu-z-bledami.png)
![alt text](https://i.ibb.co/QFjk8Rg/opis-produktu-dokladny.png)
![alt text](https://i.ibb.co/CtYFd8F/koszyk-sklepowy-bez-admin-true.png)
![alt text](https://i.ibb.co/b7mhV4p/dane-do-wysylki-zakryte.png)
![alt text](https://i.ibb.co/ZLJSbr9/PLATNOSC.png)
