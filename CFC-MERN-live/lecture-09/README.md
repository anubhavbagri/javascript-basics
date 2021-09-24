## HTML

HTML (Hypertext Markup Language) is not a programming language. It is a markup language that tells web browsers how to structure the web pages you visit.
Other markup languages include XML, yaml, mathml

```javascript
let h = document.createElement("h1");
h.innerHTML = "I am happy";
h.setAttribute("id", "something");
document.body.innerHTML = h;
document.body.innerHTML = h.outerText;
document.body.innerHTML = "<h1>Hello Bois</h1>";
```
