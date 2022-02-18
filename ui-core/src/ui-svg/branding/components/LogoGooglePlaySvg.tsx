import React from 'react';
import { createUseStyles } from 'react-jss';
import { SvgComponentProps } from '../../common/interface/SvgComponentProps';

export const LogoGooglePlaySvg: React.FC<SvgComponentProps> = ({ ...props }) => {
    const style = createUseStyles({
        svg: {
            height: props.dimensions === 'FULLSCREEN' ? '100%' : props.dimensions?.height,
            width: props.dimensions === 'FULLSCREEN' ? '100%' : props.dimensions?.width,
            pointerEvents: 'none',
            opacity: props.opacity,
        },
        st0: { fill: '#FFC82F' },
    }).apply({});

    return (
        <svg className={style.svg} version="1.1" viewBox="0 0 204 64" xmlns="http://www.w3.org/2000/svg">
            <path
                className={style.st0}
                d="m194.27 62.822h-184.54c-4.2701 0-7.731-3.461-7.731-7.731v-45.36c0-4.2692 3.461-7.731 7.731-7.731h184.54c4.2692 0 7.731 3.461 7.731 7.731v45.36c0 4.2692-3.4618 7.731-7.731 7.731zm-128.85-40.734h0.74691l-4.372-9.5042h-0.6922l-4.372 9.5042h0.74691l1.2086-2.6751h5.5127zm-6.4635-3.2587 2.4844-5.4853 2.4985 5.4853zm13.361-3.829-2.8517 6.3408-2.8243-6.3408h-0.71955l3.1907 7.0877h0.6922l3.2048-7.0877zm4.3447-0.05471c-0.54298 0-1.0636 0.08787-1.5618 0.26444-0.49822 0.17657-0.92348 0.42361-1.2766 0.74028l0.33905 0.4891c0.29843-0.2719 0.66318-0.4891 1.0934-0.65158 0.43024-0.16331 0.88037-0.24455 1.3512-0.24455 0.68805 0 1.2103 0.17243 1.5684 0.51562 0.35729 0.34403 0.53635 0.84638 0.53635 1.5071v0.57034h-2.4306c-0.92348 0-1.5958 0.1832-2.0161 0.54961-0.42112 0.36641-0.63168 0.8439-0.63168 1.4325 0 0.60681 0.2288 1.0951 0.68556 1.4665 0.45677 0.37138 1.0793 0.55707 1.8669 0.55707 0.60598 0 1.1274-0.11523 1.5618-0.34651 0.43438-0.23046 0.76514-0.55458 0.99146-0.97073v1.2625h0.65158v-4.4939c0-0.86877-0.23543-1.5278-0.70629-1.9755-0.47003-0.44848-1.1448-0.6723-2.0227-0.6723zm-0.37967 6.6393c-0.62422 0-1.1092-0.13346-1.4532-0.4004-0.34402-0.26693-0.51562-0.63168-0.51562-1.0934 0-0.4435 0.15585-0.79167 0.46837-1.0453 0.31252-0.25367 0.81654-0.3805 1.5137-0.3805h2.4173v1.3305c-0.20807 0.51562-0.51811 0.90939-0.93011 1.1813-0.41283 0.27273-0.9127 0.40786-1.5004 0.40786zm6.2455-8.3097c0.15419 0 0.28517-0.05471 0.39376-0.16331 0.1086-0.1086 0.16331-0.23957 0.16331-0.39376 0-0.15419-0.05471-0.28268-0.16331-0.38713-0.1086-0.10362-0.23957-0.15585-0.39376-0.15585-0.15419 0-0.28517 0.05388-0.39376 0.16331-0.1086 0.1086-0.16331 0.23957-0.16331 0.39376 0 0.15419 0.05471 0.28268 0.16331 0.38713 0.1086 0.10445 0.23957 0.15585 0.39376 0.15585zm-0.33988 8.8128h0.67893v-7.0877h-0.67893zm3.5439 0h0.67893v-10.075h-0.67893zm5.9338-7.1425c-0.54298 0-1.0636 0.08787-1.5618 0.26444-0.49822 0.17657-0.92348 0.42361-1.2766 0.74028l0.33905 0.4891c0.29843-0.2719 0.66318-0.4891 1.0934-0.65158 0.43024-0.16331 0.88037-0.24455 1.3512-0.24455 0.68805 0 1.2103 0.17243 1.5684 0.51562 0.35729 0.34403 0.53635 0.84638 0.53635 1.5071v0.57034h-2.4306c-0.92348 0-1.5958 0.1832-2.0161 0.54961-0.42112 0.36641-0.63168 0.8439-0.63168 1.4325 0 0.60681 0.2288 1.0951 0.68556 1.4665 0.45677 0.37138 1.0793 0.55707 1.8669 0.55707 0.60598 0 1.1274-0.11523 1.5618-0.34651 0.43438-0.23046 0.76514-0.55458 0.99146-0.97073v1.2625h0.65158v-4.4939c0-0.86877-0.23543-1.5278-0.70629-1.9755-0.47086-0.44848-1.1448-0.6723-2.0227-0.6723zm-0.3805 6.6393c-0.62422 0-1.1092-0.13346-1.4532-0.4004-0.34402-0.26693-0.51562-0.63168-0.51562-1.0934 0-0.4435 0.15585-0.79167 0.46837-1.0453 0.31252-0.25367 0.81654-0.3805 1.5137-0.3805h2.4173v1.3305c-0.20807 0.51562-0.51811 0.90939-0.93011 1.1813-0.412 0.27273-0.91187 0.40786-1.5004 0.40786zm9.4636-6.6393c-0.62422 0-1.1904 0.14756-1.6969 0.44102-0.50733 0.29429-0.9011 0.7038-1.1813 1.2285v-4.6033h-0.67893v10.075h0.65158v-1.6704c0.28019 0.54298 0.67644 0.96659 1.1879 1.2692 0.51148 0.30341 1.0843 0.45511 1.7176 0.45511 0.66069 0 1.2584-0.15419 1.7922-0.46174 0.53386-0.30755 0.95249-0.73364 1.2559-1.2766 0.3034-0.54298 0.4551-1.1631 0.4551-1.8602 0-0.69717-0.1517-1.3189-0.4551-1.8669-0.30341-0.54795-0.72204-0.97322-1.2559-1.2766-0.53387-0.30092-1.1316-0.45262-1.7922-0.45262zm-0.0406 6.5854c-0.54298 0-1.0296-0.12683-1.4598-0.3805-0.43024-0.25367-0.76929-0.60598-1.018-1.0594-0.24869-0.45262-0.37304-0.96824-0.37304-1.5477 0-0.57945 0.12435-1.0951 0.37304-1.5477 0.24869-0.45262 0.58857-0.80576 1.018-1.0594 0.43024-0.25367 0.91685-0.3805 1.4598-0.3805s1.0321 0.12683 1.4665 0.3805c0.43439 0.25367 0.77592 0.60681 1.0254 1.0594 0.24869 0.45262 0.37303 0.96907 0.37303 1.5477 0 0.57946-0.12434 1.0951-0.37303 1.5477-0.2487 0.45262-0.59106 0.80576-1.0254 1.0594-0.43439 0.25367-0.92348 0.3805-1.4665 0.3805zm5.6486 0.55707h0.67893v-10.075h-0.67893zm9.5448-3.5712c0-0.68805-0.14756-1.3032-0.44101-1.847-0.29429-0.54298-0.69717-0.96659-1.2086-1.2692-0.51149-0.30341-1.0884-0.45511-1.7309-0.45511-0.64245 0-1.2219 0.15419-1.7375 0.46174-0.51562 0.30755-0.921 0.7353-1.2153 1.2833-0.29429 0.54795-0.44102 1.1655-0.44102 1.8536 0 0.69717 0.15585 1.3172 0.46837 1.8602 0.31253 0.54298 0.74443 0.96907 1.2965 1.2766 0.5521 0.30755 1.1813 0.46174 1.8876 0.46174 0.54298 0 1.0478-0.09948 1.5137-0.29843 0.46588-0.19896 0.85301-0.48412 1.1606-0.8555l-0.39376-0.44848c-0.26278 0.32579-0.59106 0.57282-0.98482 0.74028-0.39377 0.16745-0.82152 0.25118-1.2833 0.25118-0.56122 0-1.0661-0.11772-1.5137-0.35314-0.44847-0.23543-0.80328-0.56785-1.0661-0.99809-0.26279-0.42941-0.40289-0.92099-0.42113-1.4731h6.0963zm-3.3806-2.9735c0.49739 0 0.94586 0.11357 1.3446 0.33905 0.39791 0.22631 0.71955 0.53884 0.9641 0.93674 0.24454 0.39874 0.3805 0.85136 0.40702 1.3579h-5.4315c0.0357-0.5065 0.1741-0.96161 0.4145-1.3645 0.23957-0.40288 0.55873-0.71541 0.95747-0.93674 0.39707-0.22134 0.84555-0.33242 1.3438-0.33242zm11.744 6.5987c0.66981 0 1.2741-0.15419 1.813-0.46174 0.53883-0.30755 0.96161-0.7353 1.27-1.2833 0.30755-0.54795 0.46174-1.1655 0.46174-1.8536 0-0.68805-0.15419-1.3056-0.46174-1.8536-0.30755-0.54795-0.73116-0.9757-1.27-1.2833-0.53884-0.30755-1.1432-0.46174-1.813-0.46174s-1.2741 0.15419-1.813 0.46174c-0.53884 0.30755-0.96162 0.7353-1.2692 1.2833-0.30755 0.54795-0.46174 1.1655-0.46174 1.8536 0 0.68805 0.15419 1.3056 0.46174 1.8536 0.30755 0.54795 0.73116 0.9757 1.2692 1.2833 0.53883 0.30838 1.1432 0.46174 1.813 0.46174zm0-0.61096c-0.54298 0-1.0296-0.12683-1.4598-0.3805-0.43024-0.25367-0.76929-0.60598-1.018-1.0594-0.2487-0.45262-0.37305-0.96824-0.37305-1.5477 0-0.57945 0.12435-1.0951 0.37305-1.5477 0.24869-0.45262 0.58857-0.80576 1.018-1.0594 0.43024-0.25367 0.91684-0.3805 1.4598-0.3805s1.0296 0.12683 1.4598 0.3805c0.4294 0.25367 0.76928 0.60681 1.018 1.0594 0.24869 0.45262 0.37303 0.96907 0.37303 1.5477 0 0.57946-0.12434 1.0951-0.37303 1.5477-0.2487 0.45262-0.58858 0.80576-1.018 1.0594-0.43025 0.25367-0.91686 0.3805-1.4598 0.3805zm9.1113-6.5854c-0.66069 0-1.2335 0.1401-1.7176 0.42112-0.48412 0.28102-0.84887 0.66981-1.0934 1.168v-1.5344h-0.65158v7.0877h0.67893v-3.7743c0-0.84224 0.23958-1.5112 0.71955-2.0094 0.47998-0.49739 1.1357-0.74691 1.9688-0.74691 0.72453 0 1.2874 0.20807 1.6903 0.62422 0.40288 0.41615 0.60432 1.023 0.60432 1.8196v4.0869h0.67893v-4.1416c0-0.96824-0.25781-1.711-0.77426-2.2266-0.51563-0.51645-1.2169-0.77426-2.104-0.77426zm12.397 6.219c-0.29014 0.26279-0.65656 0.39376-1.1001 0.39376-0.43438 0-0.76265-0.1202-0.98482-0.35978s-0.33242-0.59106-0.33242-1.052v-4.5619h2.254v-0.5836h-2.254v-1.5477h-0.67893v1.5477h-1.3032v0.5836h1.3032v4.6298c0 0.60681 0.16745 1.0793 0.50236 1.4192 0.33491 0.33905 0.80991 0.50899 1.4258 0.50899 0.28019 0 0.54961-0.04311 0.80826-0.12932 0.25781-0.08621 0.47334-0.21056 0.64494-0.37304zm5.6346-6.219c-0.65157 0-1.2178 0.13346-1.6969 0.4004-0.47998 0.26693-0.84225 0.64494-1.086 1.134v-4.4674h-0.67893v10.075h0.67893v-3.7743c0-0.84224 0.23958-1.5112 0.71956-2.0094 0.47998-0.49739 1.1357-0.74691 1.9688-0.74691 0.72452 0 1.2874 0.20807 1.6903 0.62422 0.4029 0.41615 0.60434 1.023 0.60434 1.8196v4.0869h0.67893v-4.1416c0-0.96824-0.25781-1.711-0.77427-2.2266s-1.2178-0.77344-2.1048-0.77344zm11.69 3.5712c0-0.68805-0.14755-1.3032-0.44101-1.847-0.29429-0.54298-0.69717-0.96659-1.2086-1.2692-0.51148-0.30341-1.0885-0.45511-1.7309-0.45511-0.64246 0-1.2219 0.15419-1.7375 0.46174-0.51562 0.30755-0.92099 0.7353-1.2153 1.2833-0.29429 0.54795-0.44101 1.1655-0.44101 1.8536 0 0.69717 0.15584 1.3172 0.46837 1.8602 0.31253 0.54298 0.74443 0.96907 1.2965 1.2766 0.5521 0.30755 1.1813 0.46174 1.8876 0.46174 0.54298 0 1.0478-0.09948 1.5137-0.29843 0.46589-0.19896 0.85302-0.48412 1.1606-0.8555l-0.39376-0.44848c-0.26279 0.32579-0.59106 0.57282-0.98483 0.74028s-0.82152 0.25118-1.2833 0.25118c-0.56121 0-1.0661-0.11772-1.5137-0.35314-0.44847-0.23543-0.80327-0.56785-1.0661-0.99809-0.26278-0.42941-0.40288-0.92099-0.42113-1.4731h6.0963zm-3.3806-2.9735c0.49738 0 0.94586 0.11357 1.3446 0.33905 0.39791 0.22631 0.71955 0.53884 0.9641 0.93674 0.24455 0.39874 0.3805 0.85136 0.40703 1.3579h-5.4314c0.0356-0.5065 0.17408-0.96161 0.41448-1.3645 0.23958-0.40288 0.55873-0.71541 0.95747-0.93674 0.39708-0.22134 0.84555-0.33242 1.3438-0.33242zm-92.171 28.14c-0.93757 0.54464-2.026 0.81654-3.2653 0.81654-1.1034 0-2.0898-0.24206-2.9594-0.72536-0.8696-0.48329-1.5502-1.149-2.0409-1.9953-0.49158-0.84638-0.73696-1.7989-0.73696-2.8575 0-1.0884 0.24538-2.0559 0.73696-2.9022 0.49075-0.84638 1.1713-1.5038 2.0409-1.973 0.86877-0.46837 1.8627-0.70297 2.9818-0.70297 1.7085 0 3.1667 0.60515 4.3762 1.8138l1.8594-1.8138c-0.7411-0.84638-1.6555-1.4888-2.7439-1.9274-1.0884-0.43853-2.2979-0.65738-3.6284-0.65738-1.6331 0-3.1029 0.35149-4.411 1.0545-1.3081 0.70297-2.3319 1.6745-3.073 2.9139-0.7411 1.2401-1.1108 2.6386-1.1108 4.1954 0 1.5576 0.37055 2.9561 1.1108 4.1954 0.74028 1.2401 1.7607 2.2109 3.0614 2.9139 1.2998 0.70297 2.7588 1.0545 4.3762 1.0545 1.149 0 2.2673-0.17409 3.3565-0.52143 1.0884-0.34734 2.0409-0.84639 2.8575-1.4963v-6.3284h-2.7895v4.9432zm11.837 3.3333c1.2393 0 2.3501-0.26444 3.3333-0.79333 0.98234-0.52889 1.75-1.2658 2.3021-2.2109 0.55127-0.94503 0.82732-2.0144 0.82732-3.209 0-1.1937-0.27605-2.2598-0.82732-3.1974-0.5521-0.93757-1.3189-1.6704-2.3021-2.1993-0.98317-0.52889-2.094-0.79333-3.3333-0.79333-1.2244 0-2.3286 0.26444-3.3109 0.79333-0.98317 0.52972-1.75 1.2625-2.3021 2.1993-0.5521 0.93757-0.82732 2.0036-0.82732 3.1974 0 1.1946 0.27605 2.2639 0.82732 3.209 0.55127 0.94503 1.3189 1.682 2.3021 2.2109 0.98234 0.52889 2.0857 0.79333 3.3109 0.79333zm0-2.4264c-1.0429 0-1.9017-0.34734-2.574-1.0429-0.67313-0.69551-1.0089-1.6099-1.0089-2.7439 0-1.134 0.33656-2.0484 1.0089-2.7439 0.6723-0.69551 1.5303-1.0429 2.574-1.0429 1.0429 0 1.905 0.34817 2.5847 1.0429 0.68059 0.69551 1.0205 1.6099 1.0205 2.7439 0 1.134-0.33988 2.0484-1.0205 2.7439-0.68059 0.69551-1.5419 1.0429-2.5847 1.0429zm14.626 2.4264c1.2393 0 2.3501-0.26444 3.3333-0.79333 0.98234-0.52889 1.75-1.2658 2.3021-2.2109 0.55126-0.94503 0.82732-2.0144 0.82732-3.209 0-1.1937-0.27605-2.2598-0.82732-3.1974-0.5521-0.93757-1.3189-1.6704-2.3021-2.1993-0.98317-0.52889-2.094-0.79333-3.3333-0.79333-1.2244 0-2.3286 0.26444-3.3109 0.79333-0.98316 0.52972-1.75 1.2625-2.3021 2.1993-0.5521 0.93757-0.82732 2.0036-0.82732 3.1974 0 1.1946 0.27605 2.2639 0.82732 3.209 0.55127 0.94503 1.3189 1.682 2.3021 2.2109 0.98317 0.52889 2.0865 0.79333 3.3109 0.79333zm0-2.4264c-1.0429 0-1.9017-0.34734-2.574-1.0429-0.67313-0.69551-1.0089-1.6099-1.0089-2.7439 0-1.134 0.33656-2.0484 1.0089-2.7439 0.6723-0.69551 1.5303-1.0429 2.574-1.0429 1.0429 0 1.905 0.34817 2.5847 1.0429 0.68059 0.69551 1.0205 1.6099 1.0205 2.7439 0 1.134-0.33988 2.0484-1.0205 2.7439-0.67976 0.69551-1.5411 1.0429-2.5847 1.0429zm18.504-9.8416v1.6099c-0.48412-0.5894-1.0851-1.0279-1.803-1.3156-0.7179-0.28683-1.5162-0.43107-2.3924-0.43107-1.149 0-2.1885 0.24206-3.1178 0.72536-0.92928 0.48412-1.6629 1.168-2.1993 2.0525-0.53634 0.88452-0.80493 1.9017-0.80493 3.0498 0 1.149 0.26859 2.1694 0.80493 3.0614 0.53635 0.89198 1.27 1.5842 2.1993 2.0749 0.93012 0.49158 1.9688 0.73696 3.1178 0.73696 0.83146 0 1.595-0.13595 2.2905-0.40786 0.69551-0.2719 1.2849-0.6723 1.769-1.202v0.635c0 1.2402-0.31003 2.162-0.92928 2.7663-0.62007 0.60432-1.595 0.9069-2.9255 0.9069-0.83146 0-1.6521-0.13264-2.4604-0.39708-0.80909-0.26444-1.4781-0.61593-2.007-1.0545l-1.27 2.1313c0.68059 0.55956 1.5419 0.98648 2.5856 1.2816 1.0429 0.29512 2.1462 0.44184 3.3109 0.44184 4.3538 0 6.5307-2.1313 6.5307-6.3947v-10.271zm-3.7644 9.161c-1.0884 0-1.9771-0.32081-2.6643-0.9641-0.68806-0.64246-1.0321-1.4772-1.0321-2.506 0-1.013 0.34402-1.837 1.0321-2.472 0.68722-0.635 1.5759-0.95249 2.6643-0.95249 1.0735 0 1.9539 0.3175 2.642 0.95249s1.0321 1.459 1.0321 2.472c0 1.0279-0.34403 1.8635-1.0321 2.506-0.68805 0.64329-1.5684 0.9641-2.642 0.9641zm10.181 2.9487h2.8343v-16.827h-2.8343zm17.937-5.9869c0-1.2393-0.26113-2.3319-0.78255-3.2769-0.52143-0.9442-1.2476-1.6778-2.1769-2.1993-0.93012-0.52143-1.9846-0.78255-3.1634-0.78255-1.1946 0-2.2681 0.26444-3.2198 0.79333-0.95249 0.52972-1.6969 1.2667-2.2341 2.2109-0.53634 0.94503-0.80493 2.007-0.80493 3.1858 0 1.1946 0.27605 2.2639 0.82732 3.209 0.5521 0.94503 1.3338 1.682 2.3468 2.2109 1.013 0.52972 2.1844 0.79333 3.5149 0.79333 1.0428 0 1.9804-0.1658 2.8119-0.49904 0.83147-0.33242 1.5195-0.824 2.0633-1.4739l-1.5195-1.7458c-0.86213 0.87706-1.958 1.3156-3.2886 1.3156-1.0428 0-1.9158-0.26113-2.6187-0.78255-0.70297-0.52143-1.1374-1.2277-1.304-2.1205h9.5017c0.0307-0.36226 0.0464-0.64163 0.0464-0.8381zm-6.1228-3.9915c0.92182 0 1.6928 0.2719 2.3128 0.81654 0.62009 0.54464 0.98981 1.2551 1.1108 2.1313h-6.8714c0.13595-0.89198 0.51811-1.6057 1.1448-2.1429 0.62836-0.53635 1.396-0.80494 2.3029-0.80494zm21.905-5.8957h-6.5307v15.873h2.9478v-4.5809h3.5828c1.3753 0 2.574-0.22714 3.5944-0.68059s1.803-1.1075 2.3468-1.9614c0.54464-0.85385 0.81654-1.8552 0.81654-3.005 0-1.1639-0.2719-2.1694-0.81654-3.0158-0.5438-0.84638-1.3264-1.4963-2.3468-1.9498-1.0205-0.45262-2.2192-0.67976-3.5944-0.67976zm-0.13595 8.7988h-3.4469v-6.3044h3.4469c1.2849 0 2.2598 0.2719 2.9255 0.81654 0.66484 0.54381 0.99809 1.323 0.99809 2.3361s-0.33242 1.7914-0.99809 2.3361c-0.66566 0.54381-1.6405 0.81571-2.9255 0.81571zm9.796 7.0753h2.8343v-16.827h-2.8343zm11.18-12.246c-0.9981 0-1.9431 0.12849-2.8343 0.38547-0.89198 0.25698-1.6555 0.62754-2.2905 1.1108l1.1108 2.0633c0.45345-0.37801 1.0089-0.6723 1.6671-0.88452 0.65738-0.21139 1.3264-0.3175 2.007-0.3175 0.99808 0 1.75 0.22714 2.2565 0.68059 0.5065 0.45345 0.75934 1.1034 0.75934 1.9498v0.18154h-3.1294c-1.7384 0-3.0125 0.3291-3.8208 0.98648-0.80909 0.65738-1.2128 1.5303-1.2128 2.6187 0 0.69551 0.18486 1.3189 0.55541 1.871 0.37056 0.5521 0.8953 0.98317 1.5759 1.2924 0.68059 0.31004 1.4739 0.46506 2.3808 0.46506 0.90691 0 1.682-0.1401 2.3245-0.41946 0.64245-0.27936 1.1374-0.68391 1.4855-1.2128v1.4739h2.6759v-7.0977c0-1.7234-0.47252-3.0117-1.4176-3.8663-0.94586-0.85385-2.3095-1.2808-4.0935-1.2808zm-0.38547 10.341c-0.72537 0-1.2924-0.15087-1.7011-0.45345-0.40786-0.30258-0.61261-0.71043-0.61261-1.2244 0-1.0735 0.81654-1.6099 2.4488-1.6099h2.9254v1.4059c-0.22714 0.60515-0.61593 1.0694-1.168 1.3943-0.55126 0.32496-1.1821 0.48744-1.8925 0.48744zm17.914-10.205-3.8324 8.9571-3.81-8.9571h-2.9478l5.2839 12.154-0.20393 0.47583c-0.27191 0.60432-0.57117 1.0354-0.89612 1.2924-0.32497 0.25698-0.73697 0.38547-1.236 0.38547-0.37802 0-0.75188-0.07544-1.1224-0.22714-0.37056-0.1517-0.69137-0.35563-0.9641-0.61261l-1.134 2.0865c0.37801 0.34734 0.86132 0.62008 1.4516 0.81654 0.5894 0.19647 1.1863 0.29512 1.7914 0.29512 1.0735 0 1.9879-0.26859 2.7439-0.80494 0.75603-0.53718 1.3985-1.4623 1.9274-2.7779l5.6694-13.085h-2.7207zm-140.89-3.1145-7.62-4.3969-6.2671 6.0582 5.7274 5.5367 8.1596-4.7094c0.4493-0.25864 0.71789-0.72453 0.71789-1.2435 0-0.51977-0.26859-0.98482-0.71789-1.2451zm-8.9132-5.1438-8.3859-4.8404-18.377-9.4172 20.756 20.064zm-26.458 27.572 18.103-9.9726 7.8148-4.5113-5.4663-5.2847zm-1.5311-41.018-0.01989 40.52 20.969-20.27z"
                stroke-width=".082898"
            />
        </svg>
    );
};
