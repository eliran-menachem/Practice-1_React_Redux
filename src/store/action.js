export const ADDNEWUSER = 'ADDNEWUSER';
export const GETCOUNTER = 'GETCOUNTER';
var counter = 0;
export const getCounter = () => {
    return counter++;
}