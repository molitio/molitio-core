import { Category, Resource } from '@molitio/molitio-schema';

export const fillResources = () => {
    const tajkepGyujtemeny = new Map<string, Resource>();
    tajkepGyujtemeny.set('kepegy', {
        resourceId: 'mockId01',
        imageTag: '01',
        imageUrl: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/nature1.jpg',
    });
    tajkepGyujtemeny.set('kepketto', {
        resourceId: 'mockId02',
        imageTag: '02',
        imageUrl: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/nature2.jpg',
    });
    tajkepGyujtemeny.set('kepharom', {
        resourceId: 'mockId03',
        imageTag: '03',
        imageUrl: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/nature3.jpg',
    });
    tajkepGyujtemeny.set('kepnegy', {
        resourceId: 'mockId04',
        imageTag: '04',
        imageUrl: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/natura4.jpg',
    });
    tajkepGyujtemeny.set('kepot', {
        resourceId: 'mockId05',
        imageTag: '05',
        imageUrl: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/still_life1.jpg',
    });
    tajkepGyujtemeny.set('kephat', {
        resourceId: 'mockId06',
        imageTag: '06',
        imageUrl: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/still_life2.jpg',
    });

    return tajkepGyujtemeny;
};

export const fillCategories = () => {
    const paintingGallery = new Map<string, Category>();

    paintingGallery.set('tajkep', {
        categoryName: 'Tájkép',
        dataSource: 'mock',
        resources: fillResources(),
    });
    paintingGallery.set('eletkep', {
        categoryName: 'Életkép',
        dataSource: 'mock',
        resources: fillResources(),
    });
    paintingGallery.set('portrait', {
        categoryName: 'Portré',
        dataSource: 'mock',
        resources: fillResources(),
    });

    console.log(`paintingGallery.size: ${paintingGallery.size}`);
    return paintingGallery;
};
