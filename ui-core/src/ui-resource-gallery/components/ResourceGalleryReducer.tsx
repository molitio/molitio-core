import { Gallery } from 'ui-core-schema';

export enum ResourceGalleryActionType {
    SELECT_CATEGORY,
    FOCUS_IMAGE,
}

export type TResourceGalleryState = {
    focusedImageTag?: string;
    selectedCategoryTag?: string;
    gallery?: Gallery;
};

export type TResourceGalleryAction = {
    type: ResourceGalleryActionType;
    payload: TResourceGalleryState;
};

export const ResourceGalleryReducer = (state: TResourceGalleryState, action: TResourceGalleryAction) => {
    const { type, payload } = action;
    switch (type) {
        case ResourceGalleryActionType.SELECT_CATEGORY:
            console.log(`payload: ${JSON.stringify(payload)}`);

            return {
                ...state,
                selectedCategoryTag: payload.selectedCategoryTag,
            };
        default:
            return {
                ...state,
            };
    }
};
