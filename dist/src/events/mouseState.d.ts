export interface MouseState {
    drag?: boolean;
    over?: boolean;
    previous?: {
        x: number;
        y: number;
    };
    offset?: {
        x: number;
        y: number;
    };
}
