// ---- interfaces
export interface Car {
  readonly make: string;
  readonly model: string;
  readonly year: number;
  readonly madeInGermany: boolean;
  damaged: boolean;
}

// ---- interfaces + extend
export interface Button {
  text: string;
  action(): void;
}

// ---- interfaces + extend
export interface IconButton extends Button {
  icon: string;
}
