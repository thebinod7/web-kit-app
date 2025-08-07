import { format, compareAsc } from 'date-fns';

export const humanizeDate = (dateInuput: string) => {
    const date = new Date(dateInuput);
    return format(date, 'MMM dd, yyyy');
};
