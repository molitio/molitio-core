import React from 'react';
import { createUseStyles } from 'react-jss';
import { SvgComponentProps } from '../../common/interface/SvgComponentProps';

export const LogoNestMediaSvg: React.FC<SvgComponentProps> = ({ ...props }) => {
    const style = createUseStyles({
        svg: {
            /* position: props.dimensions === 'FULLSCREEN' ? 'fixed' : 'absolute', */
            height: props.dimensions === 'FULLSCREEN' ? '100vh' : props.dimensions?.height,
            width: props.dimensions === 'FULLSCREEN' ? '100vw' : props.dimensions?.width,
            pointerEvents: 'none',
        },
        fil0: { fill: '#6D6E72' },
    }).apply({});

    return (
        <svg id="playa" className={style.svg} version="1.0" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <path
                id="playb"
                className={style.fil0}
                d="m185.92 10.545c-32.371 2.8111-64.435 17.833-87.627 41.024-14.231 14.231-25.212 31.844-31.756 50.819-6.281 18.316-8.6968 34.48-8.3015 55.738 0.21962 12.518 1.0542 19.765 3.2064 28.286 3.997 15.944 11.113 27.452 20.468 33.074 4.568 2.7671 11.947 3.8652 18.184 2.7232 10.454-1.8887 21.347-10.805 29.56-24.246 1.713-2.855 14.758-28.286 38.081-74.318 8.6089-17.042 10.937-21.303 11.244-20.644 0.17569 0.48315 3.6017 11.859 7.5548 25.256 3.9531 13.397 11.684 39.487 17.218 57.935 8.9164 29.824 10.19 33.733 11.376 35.007 2.6793 2.855 7.0716 2.855 9.7509 0.0879 0.92239-0.96631 11.156-20.995 29.209-57.232 15.329-30.702 28.77-57.188 29.868-58.857 4.6998-7.1155 9.707-11.859 15.197-14.582 2.2401-1.0981 2.9868-1.2298 6.8959-1.2298 5.0951 0 6.0614 0.3953 9.7948 3.9092 7.423 6.9838 12.43 20.424 14.626 39.135 0.74669 6.1932 0.74669 24.421 0 30.966-1.9765 18.184-6.1932 32.898-13.528 47.613-9.0042 18.008-21.61 33.074-37.774 45.197-18.272 13.704-38.521 22.269-61.8 26.134-6.5006 1.0542-8.0818 1.142-19.37 1.142-10.498 0-13.221-0.13178-18.579-0.96631-26.178-4.0848-49.941-15.241-71.682-33.689l-5.4904-4.6558 4.9194 4.7876c23.543 23.016 52.839 36.764 84.464 39.663 7.2034 0.61492 22.357 0.30746 28.989-0.70277 54.552-7.994 97.773-43.528 114.38-93.995 5.1829-15.724 7.3791-30.658 7.3791-49.633 0-20.644-2.855-35.402-9.3556-48.096-3.997-7.8622-9.2238-13.792-14.89-16.866-5.139-2.8111-12.826-3.6017-19.15-2.0205-7.0277 1.7569-12.606 5.3586-19.15 12.211-7.2034 7.5987-7.994 9.0921-41.2 74.669-9.0482 17.921-16.559 32.591-16.691 32.591s-3.0746-9.6192-6.5445-21.434c-5.9735-20.336-24.509-82.444-27.32-91.58-0.87845-2.855-1.7569-4.7876-2.6354-5.7978-2.4158-2.7232-6.3249-2.9868-9.3556-0.61492-0.83454 0.65885-9.7509 18.052-29.912 58.33-31.141 62.195-30.79 61.536-37.51 67.773-1.8008 1.6691-4.4362 3.5578-6.4567 4.568-3.2503 1.6252-3.5578 1.713-7.5987 1.713-5.2268 0-6.6324-0.61493-10.585-4.6558-9.8827-10.058-14.978-30.527-14.363-57.671 0.30746-14.143 1.4495-22.576 4.6998-34.743 2.284-8.6089 4.7876-15.197 9.0042-23.718 6.4128-13.001 13.221-22.752 22.62-32.459 26.134-26.925 63.864-42.254 100.8-40.98 31.712 1.142 60.175 12.782 87.275 35.753l5.4025 4.568-4.6119-4.4362c-24.465-23.718-52.049-37.159-83.059-40.585-6.1053-0.65885-19.502-0.79062-25.871-0.26354zm133.97 333.02v9.3117l-1.3616-1.4055c-1.8448-1.8448-5.3147-2.855-10.058-2.8989-6.8081-0.0439-10.454 1.9326-12.386 6.6763-0.92238 2.284-0.96631 3.2064-1.0102 11.069 0 9.9705 0.48316 12.123 3.3382 14.978 2.4158 2.4158 5.3586 3.1625 11.332 2.9428 5.139-0.17569 7.4669-1.0102 9.2238-3.2503l0.92239-1.1859v4.0848h4.8315v-49.633h-4.8315zm-4.3923 10.585c2.5915 1.2738 3.426 2.8989 3.9531 7.5108 0.571 4.6998-0.0879 12.43-1.1859 14.714-1.2298 2.4597-3.8213 3.5578-8.4772 3.5578-4.3923 0-7.0277-0.96631-8.0379-2.9428-2.1522-4.0848-2.1522-17.833-0.0439-21.083 0.96631-1.5373 2.5915-2.3718 5.0951-2.7672 3.2064-0.43924 6.3688-0.0879 8.6968 1.0102zm27.232-17.042v2.855h4.8315v-5.71h-4.8315zm-197.3 7.7744-0.13177 4.0848-2.284 0.13178-2.3279 0.13176v3.8652l2.3279 0.13177 2.284 0.13178 0.21962 13.177c0.21961 12.079 0.30745 13.309 1.0981 14.582 1.2298 2.1083 3.3382 2.9428 7.8183 3.1185 7.8183 0.35139 10.849-2.4158 10.849-9.9266v-2.7232h-4.7437l-0.1757 3.3382c-0.21961 4.2605-0.92238 5.0072-4.8315 5.0072-2.1522 0-2.7671-0.17569-3.6456-1.0981l-1.0981-1.0542v-24.641h13.177v-3.9531h-13.177v-8.3454h-5.2268zm-125.97 3.7335c-3.0307 0.35138-5.6661 1.4934-7.0277 3.0307l-1.3177 1.5373v-3.997h-5.2708v34.699h5.1829l0.17569-12.211c0.13177-11.2 0.21962-12.342 1.0981-14.187 1.142-2.5475 3.0746-3.7774 6.7642-4.3045 3.0307-0.39531 7.1595-0.0439 8.7407 0.83454 2.0205 1.0542 2.1962 2.5475 2.1962 16.691v13.177h5.3147l-0.13177-14.626c-0.13177-12.826-0.21962-14.758-0.87846-15.988-0.92238-1.6252-2.7232-2.9868-5.0951-3.8213-1.8887-0.65884-7.3352-1.142-9.7509-0.83453zm43.176 0.13177c-7.994 1.142-10.19 5.0072-10.234 17.921 0 10.41 1.5812 14.626 6.2371 16.603 2.4158 0.9663 13.045 1.4055 16.735 0.61492 4.7437-0.96631 6.9838-3.3382 7.2473-7.6865l0.17569-2.855h-5.3586v1.5373c0 2.4158-1.0542 4.0409-2.9868 4.6558-0.96631 0.26354-3.8213 0.39531-6.9838 0.30747-4.568-0.13177-5.5343-0.26354-6.5885-1.0542-1.8008-1.3177-2.6793-3.4699-3.0307-7.5548l-0.30746-3.6017h25.256l-0.17569-5.6222c-0.21962-6.1931-0.79062-8.1258-3.1185-10.542-0.79062-0.83454-2.284-1.713-3.5138-2.0644-2.6793-0.79061-9.8388-1.142-13.353-0.65884zm11.859 4.8315c1.7569 0.87846 2.5915 2.8111 2.855 6.4567l0.21962 3.2064h-19.985l0.30746-2.9868c0.48315-4.3923 1.6252-6.1492 4.6119-7.0716 2.1083-0.61492 10.454-0.35139 11.991 0.39531zm32.679-4.7876c-4.2605 0.48315-6.6324 1.7569-7.8183 4.1727-0.79062 1.713-0.92239 2.5475-0.7467 6.1053 0.13177 3.2942 0.35139 4.3923 1.0542 5.3586 2.1962 2.8989 4.0849 3.426 14.407 3.997 7.994 0.43922 8.1697 0.571 8.1697 5.5343 0 3.6895-0.571 4.7876-2.9868 5.5782-2.1962 0.79062-11.288 0.79062-13.133 0-1.6252-0.65884-2.7672-2.7672-2.7672-5.0512v-1.5812h-5.2708v2.3279c0 2.8989 1.4055 5.8418 3.426 7.2034 2.284 1.5373 5.71 1.9765 13.001 1.8008 5.8418-0.13176 6.8959-0.26353 8.6968-1.142 2.5475-1.2738 3.7774-3.1625 4.3923-6.8081 0.96631-5.71-1.3616-10.542-5.5782-11.64-0.9663-0.26354-4.6119-0.61493-8.1258-0.74669-3.5138-0.17569-6.9838-0.48316-7.7305-0.70277-1.713-0.52707-2.3718-1.9326-2.3718-5.139 0-3.0746 0.74669-4.2605 2.9868-4.9194 2.4597-0.65885 10.805-0.571 12.606 0.17568 1.4934 0.61493 1.5373 0.7467 2.2401 4.0849 0.17568 0.92238 0.43922 1.0102 2.5914 1.0102h2.4158v-2.1083c0-4.568-2.5036-6.7202-8.7846-7.5108-4.1288-0.52708-6.2371-0.52708-10.673 0zm84.025 0.0879c-2.8989 0.65885-5.3147 2.0644-6.1492 3.6017-0.87846 1.6691-1.3177 1.3177-1.3177-1.0981v-2.1962h-4.8315v34.699h4.7437l0.1757-11.991c0.21961-12.913 0.39531-14.011 2.6354-16.383 1.6252-1.713 4.0409-2.4597 8.0818-2.4597 3.3382 0.0439 5.0072 0.61492 6.5445 2.284 0.83455 0.92238 0.87847 1.713 1.0102 14.758l0.1757 13.792h5.139l0.26354-26.881 1.6252-1.4495c1.9326-1.8008 4.3923-2.5036 8.5211-2.5036 3.5138 0 5.4465 0.74669 6.6324 2.5915 0.70277 1.0542 0.79062 2.6793 0.92239 14.714l0.17569 13.528h4.7876l-0.13178-14.407-0.13176-14.363-1.0981-1.9765c-0.87846-1.5373-1.6691-2.2401-3.6895-3.2503-2.3279-1.1859-3.0307-1.3177-6.8081-1.3177-5.5782 0-8.1258 0.83453-10.629 3.5578-1.142 1.2738-1.9326 1.8448-2.0644 1.4934-0.39531-1.2298-2.8111-3.5138-4.3923-4.1288-2.4158-0.96631-7.3352-1.2738-10.19-0.61493zm67.378-0.13177c-5.0072 0.70276-7.7305 2.8111-9.2678 7.1155-0.65885 1.9765-0.79062 3.6895-0.79062 10.893 0.0439 7.8622 0.0878 8.7846 1.0102 11.069 2.1522 5.3147 5.4904 6.6763 15.681 6.4128 6.1053-0.13176 6.8081-0.26353 9.0482-1.3616 2.8989-1.4055 4.1727-3.3821 4.6119-7.0277l0.30746-2.5036h-5.8418v1.4934c0 4.1727-1.6691 5.0951-8.9603 5.0951-8.565 0-9.8388-1.0981-10.629-9.0921l-0.30747-3.2064 12.694-0.0878 12.694-0.13178-0.13177-4.6119c-0.0878-2.5475-0.43923-5.6661-0.79061-6.9398-0.87846-3.1625-3.1625-5.6222-5.9296-6.4567-2.7672-0.79061-9.8827-1.142-13.397-0.65884zm11.947 4.9633c1.8008 0.92239 2.8111 3.4699 2.8111 6.8959v2.6354h-19.809l0.26354-2.5475c0.79061-6.8081 2.4597-8.0379 10.761-7.8622 3.2942 0.0878 5.0072 0.35139 5.9735 0.87846zm103.83-5.0072c-6.1931 0.87846-7.8183 2.3718-8.565 7.8183l-0.30747 2.3279h2.6793c2.6354 0 2.6793-0.0439 2.6793-1.2298 0.0439-3.6456 2.3279-4.9194 9.0042-4.9194 4.0848 0 5.0512 0.13177 6.281 0.87847 2.0644 1.2738 2.7232 3.2064 2.7232 7.9062v3.997l-1.0542-0.83454c-1.713-1.3177-5.7539-1.9765-11.508-1.8008-6.5885 0.21962-9.0042 1.2298-10.629 4.3923-1.2738 2.5475-1.713 7.3352-0.96631 10.454 1.2299 5.139 4.8315 6.8081 13.968 6.5445 5.8418-0.17569 7.3352-0.57099 9.707-2.7232l1.0542-0.92239-0.30746 1.6252-0.30746 1.6691h5.3147v-13.309c0-14.89-0.21961-16.471-2.7232-19.063-0.83454-0.87847-2.284-1.713-3.5578-2.1083-2.5915-0.79061-10.19-1.1859-13.484-0.70276zm9.7509 18.536c3.0307 0.65885 4.568 2.1962 4.9633 4.9633 0.21961 1.2738 0.13177 2.7672-0.1757 3.8213-0.79061 2.6793-2.9868 3.5578-9.0921 3.8213-5.4904 0.21962-7.5987-0.21961-8.9164-1.9326-1.7569-2.2401-1.5373-7.8622 0.35139-9.5752 1.5812-1.4495 8.4772-2.0205 12.869-1.0981zm-41.376-0.70281v17.35h4.8315v-34.699h-4.8315z"
                strokeWidth=".43923"
            />
        </svg>
    );
};
