// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const countWords = () => {
    const text = document.getElementById("input-text").value;
    const words = text.split(" ");
    const wordCount = words.length;
    document.getElementById("word-count").innerHTML = `Word count: ${wordCount}`;
}

document.getElementById("count-words").addEventListener("click", countWords);
