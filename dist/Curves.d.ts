export declare class Curve {
    private c1x;
    private c1y;
    private c2x;
    private c2y;
    private x;
    private y;
    constructor(c1x: any, c1y: any, c2x: any, c2y: any, x: any, y: any);
}
export declare const CurvesFactory: {
    getRandCurves: (x: any, y: any, width: any, height: any, number: any) => any[];
    getRandomPoint: (x: any, y: any, width: any, height: any) => {
        x: any;
        y: any;
    };
    getRandomNumber: (number: any) => number;
    draw: (ctx: any, curves?: any[]) => void;
    getRandomColor: () => string;
    getNext: (width: any, height: any) => {
        x: number;
        y: number;
    };
    move: (curpos: any, nextpos: any, speed: any) => {
        x: any;
        y: any;
    };
};
