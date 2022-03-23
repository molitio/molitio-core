export type PlayUrl = {
    sourceUrl: string;
    mediaType: 'audio/mpeg' | 'audio/aac';
};

export type TUniversalRadio = {
    preload: 'none' | 'auto' | 'metadata';
    mediaSource: PlayUrl;
    alternativeMediaSource?: PlayUrl;
};
