let dogs = [
	{
		img: './imagenes/perro1.jpg',
		name: 'Cobu',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: '01'
	},
	{
		img: './imagenes/perro2.jpg',
		name: 'Hachi',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: '02'
	},
	{
		img: './imagenes/perro3.jpg',
		name: 'Manchas',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: '03'
	},
	{
		img: './imagenes/perro4.jpg',
		name: 'Doby',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: '04'
	},
	{
		img: './imagenes/perro5.jpg',
		name: 'Chester',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: '05'
	},
	{
		img: './imagenes/perro6.jpg',
		name: 'Harry',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: '06'
	},
	{
		img: './imagenes/perro7.jpg',
		name: 'Marley',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: '07'
	},
	{
		img: './imagenes/perro8.jpg',
		name: 'Benji',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: '08'
	}
];
  
const main = document.querySelector('.main')

const can = dogs.map((dog) =>   
  
`
  <div class="container-dog">
    <img src="" alt="">
    <h2>${dog.name}</h2> 
    <h3>${dog.telefono}</h3>
    <h3>${dog.pais}</h3>
    <h3>${dog.descripcion}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repellendus consequuntur temporibus quo quia assumenda, blanditiis facilis illum doloremque a! Asperiores iure quod modi eos animi neque aperiam mollitia temporibus.</p>
  </div>
`
)

main.innerHTML=can
console.log(can)