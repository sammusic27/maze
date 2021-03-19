import { Point } from '../models/Point';

export function randomInteger(min: number, max: number): number {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

export function randomCurrentPoint(width: number, height: number): Point{
    return {
        x: randomInteger(0, width),
        y: randomInteger(0, height),
    };
}



