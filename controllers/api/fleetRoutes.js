// Initiate express
const express = require('express');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('car', {
        title: "Car Fleet",
        fleetTitle: "Fleet",
        cars: [
            {
                image: "./fleetImages/lamborghiniHuracan.jpg",
                alt: "car1",
                name: "Lamborghini Huracán",
                price: "$1000"
            },
            {
                image: "./fleetImages/lamborghiniUrus.jpg",
                alt: "car2",
                name: "Lamborghini Urus",
                price: "$1000"
            },
            {
                image: "./fleetImages/lamborghiniRevuelto.jpg",
                alt: "car3",
                name: "Lamborghini Revuelto",
                price: "$1000"
            },
            {
                image: "./fleetImages/lamborghiniGallardo.jpg",
                alt: "car4",
                name: "Lamborghini Gallardo",
                price: "$1000"
            },
            {
                image: "./fleetImages/lamborghiniMurcielago.jpg",
                alt: "car5",
                name: "Lamborghini Murcielago",
                price: "$1000"
            },
            {
                image: "./fleetImages/ferrariSF90.jpg",
                alt: "car6",
                name: "Ferrari SF90",
                price: "$1000"
            },
            {
                image: "./fleetImages/ferrari296GTB.jpg",
                alt: "car7",
                name: "Ferrari 296GTB",
                price: "$1000"
            },
            {
                image: "./fleetImages/ferrari12Cilindri.jpg",
                alt: "car8",
                name: "Ferrari 12Cilindri",
                price: "$1000"
            },
            {
                image: "./fleetImages/ferrariPurosangue.jpg",
                alt: "car9",
                name: "Ferrari Purosangue",
                price: "$1000"
            },
            {
                image: "./fleetImages/bentleyBentayga.jpg",
                alt: "car10",
                name: "Bentley Bentayga",
                price: "$1000"
            },
            {
                image: "./fleetImages/bentleyContinental.jpg",
                alt: "car11",
                name: "Bentley Continental",
                price: "$1000"
            },
            {
                image: "./fleetImages/bentleyFlyingSpur.jpg",
                alt: "car12",
                name: "Bentley Flying Spur",
                price: "$1000"
            },
            {
                image: "./fleetImages/bentleyContinentalGT.jpg",
                alt: "car13",
                name: "Bentley Continental GT Convertible",
                price: "$1000"
            },
            {
                image: "./fleetImages/bentleyGTcoupe.jpg",
                alt: "car14",
                name: "Bentley Continental GT Coupe",
                price: "$1000"
            },
            {
                image: "./fleetImages/roycePhantom.jpg",
                alt: "car15",
                name: "Rolls-Royce Phantom",
                price: "$1000"
            },
            {
                image: "./fleetImages/royceCullinan.jpg",
                alt: "car16",
                name: "Rolls-Royce Cullinan",
                price: "$1000"
            },
            {
                image: "./fleetImages/royceGhost.jpg",
                alt: "car17",
                name: "Rolls-Royce Ghost",
                price: "$1000"
            },
            {
                image: "./fleetImages/royceSpectre.jpg",
                alt: "car18",
                name: "Rolls-Royce Spectre",
                price: "$1000"
            },
            {
                image: "./fleetImages/royceBlackBadge.jpg",
                alt: "car19",
                name: "Rolls-Royce Ghost Black Badge",
                price: "$1000"
            },
            {
                image: "./fleetImages/jaguarFPace.jpg",
                alt: "car20",
                name: "Jaguar F-Pace",
                price: "$1000"
            },
            {
                image: "./fleetImages/jaguarEPace.jpg",
                alt: "car21",
                name: "Jaguar E-Pace",
                price: "$1000"
            },
            {
                image: "./fleetImages/jaguarEPace.jpg",
                alt: "car21",
                name: "Jaguar E-Pace",
                price: "$1000"
            },
            {
                image: "./fleetImages/jaguarFType.jpg",
                alt: "car22",
                name: "Jaguar F-Type",
                price: "$1000"
            },
            {
                image: "./fleetImages/jaguarXF.jpg",
                alt: "car23",
                name: "Jaguar XF",
                price: "$1000"
            },
            {
                image: "./fleetImages/jaguarFTypeConvertible.jpg",
                alt: "car24",
                name: "Jaguar F-Type Convertible",
                price: "$1000"
            },
            {
                image: "./fleetImages/amVantage.jpg",
                alt: "car25",
                name: "Aston Martin Vantage",
                price: "$1000"
            },
            {
                image: "./fleetImages/amDBX.jpg",
                alt: "car26",
                name: "Aston Martin DBX",
                price: "$1000"
            },
            {
                image: "./fleetImages/amDB12.jpg",
                alt: "car27",
                name: "Aston Martin DB12",
                price: "$1000"
            },
            {
                image: "./fleetImages/amDB12.jpg",
                alt: "car28",
                name: "Aston Martin DB12",
                price: "$1000"
            },
            {
                image: "./fleetImages/amDBS.jpg",
                alt: "car29",
                name: "Aston Martin DBS",
                price: "$1000"
            },
            {
                image: "./fleetImages/amValour.jpg",
                alt: "car30",
                name: "Aston Martin Valour",
                price: "$1000"
            },
            {
                image: "./fleetImages/mercedesGClass.jpg",
                alt: "car31",
                name: "Mercedes-Benz G-Class",
                price: "$1000"
            },
            {
                image: "./fleetImages/mercedesMaybach.jpg",
                alt: "car32",
                name: "Mercedes-Benz Maybach",
                price: "$1000"
            },
            {
                image: "./fleetImages/mercedesSClass.jpg",
                alt: "car33",
                name: "Mercedes-Benz S-Class",
                price: "$1000"
            },
            {
                image: "./fleetImages/mercedesAMGGT.jpg",
                alt: "car34",
                name: "Mercedes-Benz AMG GT",
                price: "$1000"
            },
            {
                image: "./fleetImages/bmwX7.jpg",
                alt: "car35",
                name: "BMW X7",
                price: "$1000"
            },
            {
                image: "./fleetImages/bmw750i.jpg",
                alt: "car36",
                name: "BMW 750i",
                price: "$1000"
            },
            {
                image: "./fleetImages/bmwM3.jpg",
                alt: "car37",
                name: "BMW M3",
                price: "$1000"
            },
            {
                image: "./fleetImages/bmwM3.jpg",
                alt: "car38",
                name: "BMW M3",
                price: "$1000"
            },
            {
                image: "./fleetImages/bmwi8.jpg",
                alt: "car39",
                name: "BMW i8 ",
                price: "$1000"
            },
            {
                image: "./fleetImages/bmwM5.jpg",
                alt: "car40",
                name: "BMW M5",
                price: "$1000"
            },
            {
                image: "./fleetImages/bmwZ4.jpg",
                alt: "car41",
                name: "BMW Z4",
                price: "$1000"
            },
            {
                image: "./fleetImages/maseratiGhibli.jpg",
                alt: "car42",
                name: "Maserati Ghibli",
                price: "$1000"
            },
            {
                image: "./fleetImages/maseratiGranTurismo.jpg",
                alt: "car43",
                name: "Maserati GranTurismo",
                price: "$1000"
            },
            {
                image: "./fleetImages/maseratiLevante.jpg",
                alt: "car44",
                name: "Maserati Levante",
                price: "$1000"
            },
            {
                image: "./fleetImages/maseratiMC20.jpg",
                alt: "car45",
                name: "Maserati MC20",
                price: "$1000"
            },
            {
                image: "./fleetImages/teslaModelS.jpg",
                alt: "car46",
                name: "Tesla Model S",
                price: "$1000"
            },
            {
                image: "./fleetImages/teslaModelX.jpg",
                alt: "car47",
                name: "Tesla Model X",
                price: "$1000"
            },
            {
                image: "./fleetImages/teslaCybertruck.jpg",
                alt: "car48",
                name: "Tesla Cybertruck",
                price: "$1000"
            },
            {
                image: "./fleetImages/teslaModelY.jpg",
                alt: "car49",
                name: "Tesla Model Y",
                price: "$1000"
            },
            {
                image: "./fleetImages/teslaRoadster.jpg",
                alt: "car50",
                name: "Tesla Roadster",
                price: "$1000"
            },
            {
                image: "./fleetImages/porscheGT3RS.jpg",
                alt: "car51",
                name: "Porsche GT3 RS",
                price: "$1000"
            },
            {
                image: "./fleetImages/porschePanamera.jpg",
                alt: "car52",
                name: "Porsche Panamera",
                price: "$1000"
            },
            {
                image: "./fleetImages/porscheCayman.jpg",
                alt: "car53",
                name: "Porsche Cayman",
                price: "$1000"
            },
            {
                image: "./fleetImages/porscheCayenne.jpg",
                alt: "car54",
                name: "Porsche Cayenne",
                price: "$1000"
            },
            {
                image: "./fleetImages/porscheMacan.jpg",
                alt: "car55",
                name: "Porsche Macan",
                price: "$1000"
            },
            {
                image: "./fleetImages/audiQ7.jpg",
                alt: "car56",
                name: "Audi Q7",
                price: "$1000"
            },
            {
                image: "./fleetImages/audiA8.jpg",
                alt: "car57",
                name: "Audi A8",
                price: "$1000"
            },
            {
                image: "./fleetImages/audiR8.jpg",
                alt: "car58",
                name: "Audi R8",
                price: "$1000"
            },
            {
                image: "./fleetImages/audiRS6.jpg",
                alt: "car59",
                name: "Audi RS6",
                price: "$1000"
            },
            {
                image: "./fleetImages/audiRS4.jpg",
                alt: "car60",
                name: "Audi RS4",
                price: "$1000"
            },

        ]
    });
});
