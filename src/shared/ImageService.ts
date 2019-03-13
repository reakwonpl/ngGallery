import {Injectable} from '@angular/core';

@Injectable()
export class ImageService
{
    visibleImages = [];
    getImages()
    {
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id:number)
    {
        return IMAGES.slice(0).find(i => i.id == id);
    }
}

const IMAGES = [
    {"id": 1,"category": "cars","caption": "Car01", "url": "assets/img/c01.jpg"},
    {"id": 2,"category": "cars","caption": "Car02", "url": "assets/img/c02.jpg"},
    {"id": 3,"category": "cars","caption": "Car03", "url": "assets/img/c03.jpg"},
    {"id": 4,"category": "cars","caption": "Car04", "url": "assets/img/c04.jpg"},
    {"id": 5,"category": "cars","caption": "Car05", "url": "assets/img/c05.jpg"},

    {"id": 6,"category": "jpn","caption": "View from Japan1", "url": "assets/img/j01.jpg"},
    {"id": 7,"category": "jpn","caption": "View from Japan02", "url": "assets/img/j02.jpg"},
    {"id": 8,"category": "jpn","caption": "View from Japan03", "url": "assets/img/j03.jpg"},
    {"id": 9,"category": "jpn","caption": "View from Japan04", "url": "assets/img/j04.jpg"},
    {"id": 10,"category": "jpn","caption": "View from Japan05", "url": "assets/img/j05.jpg"},

    {"id": 11,"category": "girls","caption": "girl01", "url": "assets/img/g01.jpg"},
    {"id": 12,"category": "girls","caption": "girl02", "url": "assets/img/g02.jpg"},
    {"id": 13,"category": "girls","caption": "girl03", "url": "assets/img/g03.jpg"},
    {"id": 14,"category": "girls","caption": "girl04", "url": "assets/img/g04.jpg"},
    {"id": 15,"category": "girls","caption": "girl05", "url": "assets/img/g05.jpg"},


    
]