/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

'use strict'

class Movie {
    constructor (title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
        return this.budget > 100000000
    }
}

const m1 = new Movie("Star Wars", "Patty Jenkins", 200000000);
const m2 = new Movie("Star Wars2", "Patty Jenkins", 99000000);

console.log(m1.wasExpensive());
console.log(m2.wasExpensive());