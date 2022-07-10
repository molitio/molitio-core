/**
 * @exports PageTag
 *  page tag to identify individual unique pages
 */
export { PageTag } from './components/PageTag';
export type { PageTagProps } from './interfaces/PageTagProps';

/**
 * @exports AppShell
 *  topmost level component as a shell for internal functionality
 */
export { AppShell } from './components/AppShell';
export type { AppShellProps } from './interfaces/AppShellProps';

/**
 * @exports CenterDisplay
 *  content positioning to the center of the screen
 */
export { CenterDisplay } from './components/CenterDisplay';

/**
 * @exports ComponentGroup
 *  component collection organizer
 */

export { ComponentGroup } from './components/ComponentGroup';
export type { ComponentGroupProps } from './interfaces/ComponentGroupProps';

/**
 * @exports DefaultFooter
 *  a base footer that can be adorned by different variants
 */
export { DefaultFooter } from './components/DefaultFooter';

/**
 * @exports Logo
 *  branding component
 */
export { Logo } from './components/Logo';
export type { LogoProps } from './interfaces/LogoProps';

/**
 * @exports AudioPlayer
 *  media player for audio content
 */
export { AudioPlayer } from './components/AudioPlayer';
export type { AudioPlayerProps } from './interfaces/AudioPlayerProps';

/**
 * @exports SpanBlock
 *  basic text component
 */
export { SpanBlock } from './components/SpanBlock';

/**
 * @exports isClient
 *  provides a feedback regarding the runtime environment
 */
export { isClient } from './services/Platform';
