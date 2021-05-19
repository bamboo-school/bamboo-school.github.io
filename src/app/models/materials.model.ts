export interface Material {
    name?: string;
    lectures?: Lecture[];
}

export interface Lecture {
    title?: string;
    subtitle?: string;
    color?: string;
    link?: any[];
}

export interface Presentation {
    id: string;
    fileLink: string;
}

export interface PresentationView {
    title?: string;
    blocks?: PresentationBlock[];
}

export interface PresentationBlock {
    type: string;
    data?: any;
    extra?: any;
    $ref?: string;
}
