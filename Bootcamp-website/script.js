const people = document.getElementById('people')

getData()

async function getData() {
    const response = await fetch('https://randomuser.me/api?results=4') //random fetch ? users
    const {results} = await response.json()
    results.forEach(user => {
    	const div = document.createElement('div')
    	div.setAttribute("class","col-md-6 col-lg-3");
        div.innerHTML = `
            <div class="card bg-light">
              <div class="card-body text-center">
                <img
                  src="${user.picture.large}"
                  class="rounded-circle mb-3"
                  alt="${user.name.first}"
                />
                <h3 class="card-title mb-3">${user.name.first} ${user.name.last}</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
              </div>
            </div>
          </div>
        `
        people.appendChild(div)
    })
}
