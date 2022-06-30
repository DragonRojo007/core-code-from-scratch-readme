# 1. Node.JS Core Understanding

### 1. What is Node.JS?
Node.JS is a cross-platform, open source JavaScript runtime environment that allows you to keep latency low and 
performance high by taking a "non-blocking" approach to serving requests. Node.JS uses a non-blocking, 
event-driven I/O model, making it more lightweight and efficient.

### 2. What problem does Node.JS solve?
Solved the I/O problem 

### 3. What is the V8 Javascript Engine?
Chrome V8 is a JavaScript engine that enables JavaScript to be compiled, allowing JavaScript code to be 
executed inside or outside of a browser. Translate the JavaScript code to "machine code".

### 4. Is Node.JS really necessary in the Development ecosystem?
It is not necessary but it is useful, since it allows the development of applications in a better way, 
allowing JavaScript to be used both in the back-end and in the front-end. In addition to allowing the development 
of applications that run in real time and must process many requests from clients.

### 5. What is the difference between Node.JS and any other browser?
Node executes JavaScript on the server side, while browsers do it on the client side.

### 6. What is NVM and Why is it useful for Node.JS developers?
NVM is a Node Version Manager and is useful because allows to manage multiple versions of Node in a same system


# 2. Node.JS Module System

### 1. What is a Javascript Module?
Is a file that contains functions to realize some task, we create modules to make a 
big application into a multiple files of specific tasks

### 2. Why are Javascript Modules necessary?
It is necessary because it makes it easy to create files that perform specific tasks 
to be able to perform a much larger task by using them together.

### 3. What module standards are available in Node.JS?
The standard modules are ESModules and CommonJS

### 4. What are the differences between ESModules and CommonJS modules?
* CommonJS only allows synchronous loading of modules, while ESM allows both synchronous and asynchronous loading.
* CommonJS requires are not supported directly in the browser, while ESM imports are if the <script type="module"> attribute is indicated in the scripts that use them.
* CommonJS doesn't allow you to load a module directly from a URL or CDN, while with ESM you can do it seamlessly and it works directly from a browser.

### 5. Which types of modules exist in Node.JS?
Node.js includes three types of modules:

* Core Modules
* Local Modules
* Third Party Modules
  
# 3. Node.JS Module System - Practice
* Project Link: https://github.com/OliverosA/Node.JS-Module-System
  
# 4. Client-Server Model - Learning Exercise
  
### 1. What is a Server?
It is a program or device that allows to provide a service to another program (client). The server is responsible for providing the data to the client  
  
### 2. Why is a Client?
Because it receives information from someone else (server) and uses this information in the way it needs

### 3. Is a server just another physical computer?
No, it can be a device made up of many components (machine) or it can also be an application that runs inside a local machine.
  
  * Why do we refer to a certain class of applications as Servers?
  Because they allow to provide information to other applications
  
  * What is the difference?
  A physical server can be a machine that receives requests from many different applications (clients) locally or on the network (internet). While   a software-based server is a program that offers a special service that can be used locally or across a network by other programs called           clients.
  
### 4. Is there any similarity between human communication and the client-server model?
Yes, because in human communication both sides (speaker and listener) must communicate under the same language or under the same communication rules in order to understand and interact with each other.
  
### 5. Is the client-server model applicable only to the Web?
No, because this model can also be used locally on a single machine or through an internal network between machines.
  
  * Can you mention any other example of this model outside the Web?
  A print server is a server that connects a printer within a network, so that any computer can access this printer and print any document.
  
  
