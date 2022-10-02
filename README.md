# 🚀 Code Guidelines

## 👋 Introduction

This is a complete guide to write clean code. These guidelines will be enforced in almost all of my projects and are applicable to almost every language. Initially, they are based on my code style in Typescript. Please note that this is not the golden standard! This is how I like to write - in my eyes - clean code, and should only function as a reference for both myself and others working on projects with me.

### Intention

Clean code leads to code that is both easier to maintain and easier to understand. This saves time in the long run and results in code that feels like art. All code in the code-base should look like a single person typed it, no matter how many people contributed.

### Factors

There are two factors in play. The **human style** and the **format style**.
These guidelines in text form will focus on the human style. The format style can be ensured by using the attached configs for formatting programs such as Prettier. (→ CLI)

### How to use

To install the guidelines in your project you can use the CLI tool, that comes with them.
They can be installed using the easy to use command `yarn create guide` in your project.

### Lets get started!

---

## 🌓 Casing

To start off, in which casing should variables, constants, classes, functions, files, components, ... be named?

### camelCase

- Functions
- Variables
- Constants
- Typescript Files
- React Hooks (Function, File)
- Folders
- Object- and JSON-Keys

### PascalCase

- Classes
- Interfaces
- Types
- React Components (Function, File, Folder)

### MACRO_CASE

- Config Constants

---

## 💡 Naming Stuff

Naming things correctly is one of the biggest steps to writing clean code.
There are some simple rules you can follow:

### 👍 Rules of Thumb:

- Name variables in English (Everyone else reading your code will thank you!)
- **NEVER** - and I really mean NEVER - use One-Character-Names for variables!
- The name of the variable should reflect exactly what is stored in it.
- Avoid types in the variable name (e.g `userString`)
- Avoid Noise Words such as Info, Data, Variable, Object, Manager, ... They might sound cool, but lead nowhere.

---

## ▶️ Functions

---

## 📗 Comments

Write code, not comments.
The fewer comments you need because you wrote easy to understand code, the better. Code should speak for itself.
On the other hand, you should not completely avoid comments. They can be fully valid, when used in the right way.

> “Don’t comment bad code — rewrite it.” — Brian W. Kernighan and P. J. Plaugher

### 👍 Rules of Thumb:

- When you start writing a comment, think about renaming the variable/function/class first. Only write the comment, if you come to the conclusion, that additional information has to be provided for the reader to understand the code.
  This does not apply when the comment is used as documentation for the IDE, for example JSDoc.

- Avoid paraphrasing the code. Whenever you find yourself paraphrasing, question yourself, whether a comment is really needed or if the code does not already speak for itself. Paraphrasing comments often only mislead.

- Explaining variables is **never** a good idea. Almost always, the solution is to rename the variable.

### Inline comments

- Inline comments deserve a dedicated line. Do not put comments behind your code, but instead place them above the line(s) they describe.

```ts
if (example) { // This is an example for a bad comment
  doSomething();
}

// This is an example for a good comment
if (example) {
  doSomething();
}
```

### JSDoc / Multiline comments

- Multiline comments should be used to describe bigger complexes of code. This includes functions and classes. They should follow the JSDoc style guide.

---

## 🌲 Git

### Commits

### Rebase

## 🏘️ Project Structure

### Folders

### Code splitting

### Components

### Monorepos

## Credits

I took some inspiration from this [article](https://www.freecodecamp.org/news/clean-coding-for-beginners/) and condensed the essentials. Also, I want to give credits to all the horrible code I had to go through, which finally led me to write this guide. Be better than the authors of that code! 😉

## 🌱 Closing Words

A clean code-base is the most satisfying thing to look at for me as a developer. Following these guidelines will bring you as the reader closer to achieving exactly that: A clean code-base.

Thank you for reading!

---

© Copyright 2022 - [@choozn](https://choozn.dev)
