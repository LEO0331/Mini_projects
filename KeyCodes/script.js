const insert = document.getElementById('insert')
window.addEventListener('keydown', e => {
    insert.innerHTML = `
    <div class="key">
    ${e.key === ' ' ? 'Space' : e.key} 
    <small>Key</small>
    </div>

    <div class="key">
    ${e.code}
    <small>Code</small>
    </div>
    `
})