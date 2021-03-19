import { Point } from './Point';
import { Neighbor } from './Neighbot';
import { CLEAR_CELL, BORDER_CELL, FILL_CELL  } from './constants';
import { randomInteger } from '../utils/index';

export class Maze {
    private readonly maze: Array<Array<any>>;
    private readonly width: any;
    private readonly height: any;

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.maze = Array.apply(null, Array(width)).map(() => Array.apply(null, Array(height)).map(() => CLEAR_CELL))
    }

    get(){
        return this.maze;
    }

    isExistPoint(point: Point): boolean{
        return !(point.x < 0 || point.y < 0 || this.width < point.x || this.height < point.y);
    }

    isEmptyPoint(point: Point): boolean{
        return this.maze[point.x][point.y] === CLEAR_CELL;
    }

    isBorderPoint(point: Point): boolean{
        return this.maze[point.x][point.y] === BORDER_CELL;
    }

    isFillPoint(point: Point): boolean{
        return this.maze[point.x][point.y] === FILL_CELL;
    }

    checkNeighbors(point: Point): Neighbor{
        // check borders
        if(this.isExistPoint(point)){
            return {
                has: false,
                top: point.y < 0,
                right: point.x > this.width,
                bottom: point.y > this.height,
                left: point.x < 0
            };
        }

        let left = true;
        let right = true;
        let top = true;
        let bottom = true;

        const leftNeibor = {x: point.x - 1, y: point.y};
        const topNeibor = {x: point.x, y: point.y - 1};
        const rightNeibor = {x: point.x + 1, y: point.y};
        const bottomNeibor = {x: point.x, y: point.y + 1};

        if(!this.isExistPoint(leftNeibor) || !this.isEmptyPoint(leftNeibor)){
            left = false;
        }

        if(!this.isExistPoint(topNeibor) || !this.isEmptyPoint(topNeibor)){
            top = false;
        }

        if(!this.isExistPoint(rightNeibor) || !this.isEmptyPoint(rightNeibor)){
            right = false;
        }

        if(!this.isExistPoint(bottomNeibor) || !this.isEmptyPoint(bottomNeibor)){
            bottom = false;
        }

        return {
            has: top || right || bottom || left,
            top,
            right,
            bottom,
            left
        };
    }

    randomNeighbor(data: Neighbor, currentPoint: Point): Point{
        let count = data.top ? 1 : 0;
        count = data.right ? count++ : count;
        count = data.bottom ? count++ : count;
        count = data.left ? count++ : count;

        if(count === 0){
            return currentPoint;
        }


        const direction = randomInteger(0, count);


        switch(direction){
            case 0: currentPoint.y = currentPoint.y - 1; break;
            case 1: currentPoint.x = currentPoint.x + 1; break;
            case 2: currentPoint.y = currentPoint.y + 1; break;
            case 3: currentPoint.x = currentPoint.x - 1; break;
        }
    }
}