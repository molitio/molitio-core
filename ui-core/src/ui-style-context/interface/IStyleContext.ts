import { ClassNameMap } from '@material-ui/styles';

export interface IStyleContext {
    themeName?: string;
    styleMap: Map<string, ClassNameMap<string>>;
}
