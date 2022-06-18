export enum ResourceGalleryActionType  {
    FOCUS_IMAGE,
}

export type ResourceGalleryAction = {
    type: ResourceGalleryActionType,
    payload: {
        image: string,
    }
}