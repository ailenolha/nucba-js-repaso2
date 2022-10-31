const productos = [
    {
      categoria: "Computacion",
      condicion: "Nuevo",
      cuotas: false,
      envioInmediato: true,
      envioGratuito: true,
      id: 1,
      marca: "Redragon",
      nombre: "Teclado gamer Shiva K512",
      precio: 6500,
      subcategoria: "Perifericos",
      ubicacion: "GBA",
    },
    {
      categoria: "Computacion",
      condicion: "Usado",
      cuotas: false,
      envioInmediato: false,
      envioGratuito: false,
      id: 2,
      marca: "Asus",
      nombre: "Mother M2n68-am",
      precio: 7000,
      subcategoria: "Componentes",
      ubicacion: "Capital Federal",
    },
    {
      categoria: "Computacion",
      condicion: "Nuevo",
      cuotas: true,
      envioInmediato: true,
      envioGratuito: true,
      id: 3,
      marca: "Kingston",
      nombre: "Memoria RAM Fury Beast 8GB",
      precio: 8500,
      subcategoria: "Componentes",
      ubicacion: "Cordoba",
    },
    {
      categoria: "Computacion",
      condicion: "Nuevo",
      cuotas: false,
      envioInmediato: true,
      envioGratuito: true,
      id: 4,
      marca: "Logitech",
      nombre: "Auriculares gamer inalámbricos G733",
      precio: 29000,
      subcategoria: "Perifericos",
      ubicacion: "GBA",
    },
    {
      categoria: "Computacion",
      condicion: "Nuevo",
      cuotas: true,
      envioInmediato: false,
      envioGratuito: true,
      id: 5,
      marca: "Redragon",
      nombre: "Auriculares gamer Zeus X",
      precio: 13000,
      subcategoria: "Perifericos",
      ubicacion: "Ushuaia",
    },
    {
      categoria: "Celulares",
      condicion: "Nuevo",
      cuotas: true,
      envioInmediato: true,
      envioGratuito: true,
      id: 6,
      marca: "Motorola",
      nombre: "Motorola Edge 30 128 GB",
      precio: 90000,
      subcategoria: "Equipos",
      ubicacion: "Capital Federal",
    },
    {
      categoria: "Celulares",
      condicion: "Usado",
      cuotas: false,
      envioInmediato: false,
      envioGratuito: false,
      id: 7,
      marca: "Nokia",
      nombre: "Nokia 1100",
      precio: 1500,
      subcategoria: "Equipos",
      ubicacion: "GBA",
    },
    {
      categoria: "Celulares",
      condicion: "Nuevo",
      cuotas: false,
      envioInmediato: true,
      envioGratuito: true,
      id: 8,
      marca: "Samsung",
      nombre: "Samsung Galaxy A51 128GB",
      precio: 70000,
      subcategoria: "Equipos",
      ubicacion: "GBA",
    },
    {
      categoria: "Celulares",
      condicion: "Nuevo",
      cuotas: false,
      envioInmediato: true,
      envioGratuito: true,
      id: 9,
      marca: "Samsung",
      nombre: "Samsung Galaxy A12 64GB",
      precio: 4000,
      subcategoria: "Equipos",
      ubicacion: "Capital Federal",
    },
    {
      categoria: "Celulares",
      condicion: "Usado",
      cuotas: false,
      envioInmediato: false,
      envioGratuito: false,
      id: 10,
      marca: "Motorola",
      nombre: "Cargador Motorola",
      precio: 6000,
      subcategoria: "Cargadores",
      ubicacion: "Bariloche",
    },
  ];


//   Ejercicio 1 :
//         Imprimir en consola todos los productos que tengan id par. 
//         El mensaje tiene que ser user Friendly, es decir, que el usuario 
//         entienda que es lo que se está mostrando en consola.

const idPares = productos.filter( (producto) => producto.id % 2 === 0);

idPares.forEach( (producto) => console.log(`El producto ${producto.nombre} tiene id par`));


// Ejercicio 2 :
//         Imprimir en consola todos los productos que tengan envío inmediato. 
//         El mensaje tiene que ser user Friendly, es decir, que el usuario 
//         entienda que es lo que se está mostrando en consola.

const productosConEnvioInmediato = productos.filter( (producto) =>
producto.envioInmediato === true);

productosConEnvioInmediato.forEach( (producto) =>
console.log(`El producto ${producto.nombre} tiene envio inmediato`));


// Ejercicio 3 :
//         Crear un nuevo array con los mismos productos pero con su precio duplicado. 
//         Imprimir en consola el nombre y nuevo precio de cada producto.

const productosConPrecioDuplicado = productos.map( (producto) => {
    // return { 
    // categoria: producto.categoria,
    //   condicion: producto.condicion,
    //   cuotas: producto.cuotas,
    //   envioInmediato: producto.envioInmediato,
    //   envioGratuito: producto.envioGratuito,
    //   id: producto.id,
    //   marca: producto.marca,
    //   nombre: producto.nombre,
    //   precio: producto.precio * 2,
    //   subcategoria: producto.subcategoria,
    //   ubicacion: producto.ubicacion,
    // }

    return {...producto, precio: producto.precio * 2 }
})

productosConPrecioDuplicado.forEach( (producto) => {
    console.log(`El nuevo precio de ${producto.nombre} es ${producto.precio}`)
    }
);


// Ejercicio 4 :
//          Imprimir en consola si existe algun producto cuyo
//          precio sea mayor a un precio dado. 
//          El mensaje tiene que ser user Friendly, es decir,
//          que el usuario entienda que es lo que se está mostrando en consola.


const hayProductosConPrecioMayorA = (precio) => {

    // let hayProductos = productos.some( (producto) => producto.precio > precio);
    // if (hayProductos) {
    //     return console.log(`Hay productos con precio mayor a $${precio}`);
    // } else if (!hayProductos){
    //     return console.log(`No hay productos con precio mayor a $${precio}`);
    // }

    //con operador ternario:
    productos.some( (producto) => producto.precio > precio) 
    ? console.log(`Hay productos con precio mayor a $${precio}`)
    : console.log(`No hay productos con precio mayor a $${precio}`);

}

hayProductosConPrecioMayorA(90000);


// Ejercicio 5 :
//         Filtrar productos por precio.

const filtrarPorPrecioMenorA = (precio) => {
    const productosFiltrados = productos.filter(
        (producto) => producto.precio < precio
    )
    console.log(productosFiltrados);
}

filtrarPorPrecioMenorA(4000);

const filtrarPorPrecioMayorA = (precio) => {
    const productosFiltrados = productos.filter(
        (producto) => producto.precio > precio
    )
    console.log(productosFiltrados)
}

filtrarPorPrecioMayorA(9000);

const filtrarPorPrecioentre = (precioMin, precioMax) => {
    const productosFiltrados = productos.filter(
        (producto) => producto.precio > precioMin && producto.precio < precioMax
    );
    console.log(productosFiltrados);
}

filtrarPorPrecioentre(4000, 50000)


// Ejercicio 6 :
//         Crear un nuevo array con los mismos productos pero cambiando 
//         la condición de todos los productos a "usado".

const productosUsados = productos.map( (producto) => {
    return {...producto, condicion: "Usado"};
})

console.log(productosUsados);


// Ejercicio 7 :
//         Imprimir en consola el nombre y precio de todos los productos que
//         tengan envío inmediato y envío gratuito. 
//         El mensaje tiene que ser user Friendly, es decir, que el usuario
//         entienda que es lo que se está mostrando en consola.


const productosConEnvioInmediatoYEnvioGratuito = productos.filter( (producto) => 
    producto.envioInmediato && producto.envioGratuito 
)

productosConEnvioInmediatoYEnvioGratuito.forEach( (producto) => {
    console.log(`El producto ${producto.nombre} tiene envio inmediato y envio gratuito`)
})


// Ejercicio 8 :
//         Filtrar productos por categoria y subcategoria . 
//         Traer solo los productos de la categoria Celulares y de la subcategoria Equipos.

const filtrarPorCategoriaYSubtcategoria = (categoria, subcategoria) => {
    const productosFiltrados = productos.filter(
        (producto) => producto.categoria === categoria && producto.subcategoria === subcategoria)
        console.log(productosFiltrados);
}

filtrarPorCategoriaYSubtcategoria("Celulares", "Equipos");
filtrarPorCategoriaYSubtcategoria("Cargadores", "Celulares");


// Ejercicio 9 :
//         Ordenar productos por precio de menor a mayor.

const ordenarPorPrecioMenorAMayor = () => {
    const productosOrdenados = productos.sort( (a,b) => a.precio - b.precio);
    console.log(productosOrdenados);
}

ordenarPorPrecioMenorAMayor();


// Ejercicio 10 :
//         Ordenar productos por precio de mayor a menor.

const ordenarPorPrecioMayorAMenor = () => {
    const productosOrdenados = productos.sort( (a,b) => b.precio - a.precio);
    console.log(productosOrdenados);
}

ordenarPorPrecioMayorAMenor();


// Ejercicio 11 :
//         Ordenar productos por nombre de la A a la Z.

const ordenarPorNombreDeLaAaLaZ = () => {
    const productosOrdenados = productos.sort( (a,b) => {
        if (a.nombre < b.nombre) {
            return -1;
        }
        if (a.nombre > b.nombre) {
            return 1;
        }
        return 0;
    })
    console.log(productosOrdenados);
}

ordenarPorNombreDeLaAaLaZ();


// Ejercicio 12 :
//         Buscar todos los productos que incluyan una palabra en su nombre.

const buscarProductos = (palabra) => {
    const productosEncontrados = productos.filter((producto) => 
        producto.nombre.toLowerCase().includes(palabra.toLowerCase())
    );
    productosEncontrados.forEach((producto) => console.log(producto.nombre));
}

buscarProductos("Samsung");
buscarProductos("Re");

