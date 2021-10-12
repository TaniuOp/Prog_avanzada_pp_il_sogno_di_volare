const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages= "civilAircrafts";
        this.militaryImages= "militaryAircrafts";
    }
    
    getRandomCivil() {
        return this.civilAircrafts[Math.floor(Math.random()*civilAircrafts.length)];
    }
    
    getRandomMilitary() {
        return this.militaryAircrafts[Math.floor(Math.random()*militaryAircrafts.length)];
    }
    
    getAll() {
        return this.civilAircrafts + this.militaryAircrafts;
    }
}

class Painter {
    constructor() {
        this.gallery= document.createElement('section');
        this.imageTag
    }

    createGallery() {
        const newSection= this.gallery;
        document.body.appendChild(newSection);
    }

    createImageTag(imageUrl) {
    }


    paintSingleImage(imageUrl) {
    }

    paintMultipleImages(arrayOfImages) {
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();