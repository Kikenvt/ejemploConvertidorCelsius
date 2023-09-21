const convertTemperature = () => {

    // Obtenermos la temperatura  en grados Celsius ingreado por el usuario
    const celsius = parseFloat(document.getElementById("celsius").value);

    // Comprobamos que hemos realizado el parseFloat() correctamente
    console.log(typeof(celsius))

    //Verificar si la entrada es valida
    if(isNaN(celsius)){
        alert("Por favro, ingresa una temperatura valida")
        return
    }

    /**Calcular la temperatura en grados Fahrenheit:
     * Multiplica la temperatura en Celsius por 9/5 luego suma 32 al resultado obtenido en el paso anterior, ç
     * el resultado se almacena en la variable fahrenheit
     */
    const fahrenheit = (celsius * 9/5) + 32

    //Mostrar el resultado en la pagina
    document.getElementById("fahrenheit").textContent = fahrenheit.toFixed(2)
}
