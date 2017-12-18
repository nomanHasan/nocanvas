import { MouseState } from "./events/MouseState";
export declare class Rect {
    x: any;
    y: any;
    width: any;
    height: any;
    context: any;
    _zIndex: number;
    fill: any;
    color: any;
    mouseState: MouseState;
    constructor(x: any, y: any, width: any, height: any, context?: any, _zIndex?: number);
    draw(): void;
    isInside(pos: any): boolean;
    onmousemove(event: any): void;
    ondrag(event: any): void;
    dispatchDraw(): void;
    onmousedown(event: any): void;
    onmouseup(evnet: any): void;
    onmouseleave(): void;
}
export declare const RectFactory: {
    generateRandomRect: (x: any, y: any, width: any, height: any, maxWidth: any, maxHeight: any) => Rect;
    draw: (rect: any) => void;
};
