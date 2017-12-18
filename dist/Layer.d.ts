export declare class Layer {
    private canvas;
    private context;
    private shapes;
    nextZindex: number;
    private _id;
    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, shapes?: any[]);
    static sortByZindex(shapes?: any[]): any[];
    initValues(): void;
    addShape(shape: any): void;
    assignZIndex(shape: any): void;
    draw(): void;
    update(): void;
}
export declare const execute: (obj: any, fn: any, ...args: any[]) => void;
