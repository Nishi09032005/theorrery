document.addEventListener("DOMContentLoaded",()=>{

    const cardsContent=[
        {
            "name": "Astroid-belt",
            "image": "https://media.istockphoto.com/id/174869915/photo/the-solar-system.webp?a=1&b=1&s=612x612&w=0&k=20&c=jlk8bkpH88zK6CYWa26sNoo_i0gm7hI_Ice6NmEeFnU=",
            "info": "The asteroid belt is a region in our solar system located between the orbits of Mars and Jupiter. It contains a vast number of rocky bodies, ranging in size from dust particles to dwarf planets like Ceres.",
            "fact": "although it contains millions of rocky objects, its total mass is estimated to be only about 4% of the Moon's mass.",
            "link": "https://en.wikipedia.org/wiki/Asteroid_belt"
        },
        {
            "name": "Tsuchinshan–ATLAS",
            "image": "https://th.bing.com/th/id/OIP.L3kBGk1X2v3kgJh6Jn5G6AHaEK?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "info": "The nearest comet that will pass by Earth soon is Comet C/2023 A3 (Tsuchinshan–ATLAS). This comet is expected to approach Earth on October 12, 2024, coming as close as 44 million miles (71 million km) from the planet, which is a relatively close pass in astronomical terms. However, it is not likely to fall onto Earth. Instead, it could potentially put on a spectacular display in the sky, becoming as bright as the stars and visible to the naked eye",
            "fact": "Mars is home to the tallest mountain in the solar system, Olympus Mons.",
            "link": "https://en.wikipedia.org/wiki/Asteroid_belt"
        },
        {
            "name": "Jupiter",
            "image": "https://media.istockphoto.com/id/173228030/photo/jupiter-on-star-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=NjysBj23ebC4dT3gMLYA_IZLsN1oQQeCDQDWfO0DFKw=",
            "info": "Largest Planet in the Solar System: Jupiter is the biggest planet in our solar system, with a diameter of about 86,881 miles (139,822 kilometers). It could fit all the other planets inside it and still have room to spare.",
            "fact": "Jupiter has 79 known moons.including the four largest known as the Galilean moons: Io, Europa, Ganymede, and Callisto. Ganymede is the largest moon in the solar system, even larger than the planet Mercury.",
            "link": "https://science.nasa.gov/resource/jupiter-and-io/"
        },
        {
            "name": "Black Holes",
            "image": "https://media.istockphoto.com/id/509689300/photo/black-hole.webp?a=1&b=1&s=612x612&w=0&k=20&c=ItcZoPhN7JzQr6immJJkKG7MnZMjMURXp-blahmk9Yg=",
           
            "info": " Black holes are fascinating astronomical objects with gravitational fields so strong that nothing, not even light, can escape from them. They form when massive stars collapse at the end of their life cycles, leading to a singularity—a point of infinite density—surrounded by an event horizon, which is the boundary beyond which nothing can escape.",
            "link": "https://science.nasa.gov/universe/black-holes/"
        },
        {
            "name": "Exoplanets",
            "image": "https://media.istockphoto.com/id/1298997952/photo/3d-rendered-galaxy-space-scene-with-planets.webp?a=1&b=1&s=612x612&w=0&k=20&c=rrQpY-dlulzMgCa6griFJn1eiBEjLTjUUFgsY34Uy4E=",
            "info": "Exoplanets, or extrasolar planets, are planets that orbit stars outside our solar system. They can vary widely in size, composition, and distance from their host stars. Exoplanets can be gas giants like Jupiter, rocky planets like Earth, or even icy worlds.",
            "fact": "HD 189733b, an exoplanet located about 64 light-years away, is known for its violent winds that can reach speeds of up to 5,400 miles per hour (8,700 kilometers per hour).",
            "link": "https://science.nasa.gov/exoplanets/"
        },
        {
            "name": "Moon",
            "image": "https://plus.unsplash.com/premium_photo-1685959222430-9ab84326847f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHx8MA%3D%3D",
            "info": "A fun fact about the Moon is that it's drifting away from Earth! Each year, the Moon moves about 3.8 centimeters farther from our planet. This happens due to the tidal interactions between Earth and the Moon, which gradually transfer energy from Earth's rotation to the Moon, causing it to slowly spiral outward. ",
            "fact": " Earth's days are getting longer—by about 1.7 milliseconds per century!",
            "link": "https://science.nasa.gov/toolkit/earths-moon/"
        },
        {
            "name": "Milkyway galaxy",
            "image": "https://plus.unsplash.com/premium_photo-1676607444703-92110b5faf7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlsa3klMjB3YXklMjBnYWxheHl8ZW58MHx8MHx8fDA%3D",
            "info": "The Milky Way is a barred spiral galaxy containing an estimated 100 to 400 billion stars, including our Sun. It spans about 100,000 light-years across and is roughly 1,000 light-years thick. The galaxy is home to a diverse range of celestial objects, including star clusters, nebulae, and exoplanets. The Milky Way is part of a group of galaxies known as the Local Group, which includes the Andromeda Galaxy and about 54 other galaxies. Its center features a supermassive black hole named Sagittarius A*, which has a mass equivalent to 4 million Suns. For more details, you can check NASA and Space.com.",
            "link": "https://science.nasa.gov/universe/galaxies/"
        },
        {
            "name": "Sun",
            "image": "https://media.istockphoto.com/id/520222808/photo/the-sun.webp?a=1&b=1&s=612x612&w=0&k=20&c=kbonjU2FUWFoJxbDd2DRThL4S-gnIOjnNg_ph2ydDDo=",
           
            "info": " The Sun is a massive ball of hot plasma, comprising about 99.86% of the total mass of the solar system. It is approximately 4.6 billion years old and is classified as a G-type main-sequence star (G dwarf). The Sun's core reaches temperatures of around 15 million degrees Celsius (27 million degrees Fahrenheit), generating energy through nuclear fusion. Its surface temperature is about 5,500 degrees Celsius (9,932 degrees Fahrenheit). The Sun emits light and heat that support life on Earth and drives our planet's weather systems. Its energy output is equivalent to about 386 billion billion watts.",
            "link": "https://science.nasa.gov/resource/the-sun-poster-version-a/"
        }

        
    ]

    const cardContainer = document.getElementById("card-container");
   cardsContent.forEach(object=>{
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <a href= "${object.link}" target="_blank">
    <img src= "${object.image}" alt= "${object.name}"/>
    </a>
    <div class="card-text">
    <h2>${object.name}</h2>
    <p>${object.info}</p>
    <p>${object.fact}</p>
    <div/>
    `
    cardContainer.append(card);
   }) 
})