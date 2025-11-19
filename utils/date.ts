import { format, compareAsc } from 'date-fns';

export const humanizeDate = (dateInuput: string) => {
    const date = new Date(dateInuput);
    return format(date, 'MMM dd, yyyy');
};

export const formatDateToDMY = (input: string) => {
    const [year, month, day] = input.split('-');
    const formatted = `${day}/${month}/${year}`;
    return formatted;
};
