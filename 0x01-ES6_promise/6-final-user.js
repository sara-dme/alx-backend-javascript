import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
    return Promise.allSettled([
        signUpUser(firstName, lastName),
        uploadPhoto(fileName)]).then((results) => {
           const res = [];
           results.forEach((result) => {
            if (result.status === 'fulfilled') {
                res.push({ status: result.status, value: result.value });
            } else {
                res.push({ status: result.status, value: `${result.reason}`});
            }
           });
           return res;
        });
}