const labels = document.querySelectorAll('.form-control label')

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split('') //split word to each letter
        .map((letter, index) => `<span style="transition-delay:${index * 60}ms">${letter}</span>`) //higher, slower
        .join('') //array to string
})