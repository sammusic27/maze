import {Point} from "../models/Point";
import {Maze} from "../models/Maze";
import { randomCurrentPoint } from "../utils/index";

export const simpleGenerator = function(width: number, height: number, currentPoint: Point = randomCurrentPoint(width, height)): Array<Array<boolean>>{
    const maze = new Maze(width, height);

    console.log(currentPoint);

    let mazeCount = width * height;

    while(mazeCount > 0){

        const neighbors = maze.checkNeighbors(currentPoint);
        if(neighbors.has){

        }

        mazeCount--;
    }

    return maze.get();
}