export const delay = ms => new Promise(res => setTimeout(res, ms));


export const getFirstname = (name) => {
    const nameSplit = name.split(' ');
    return nameSplit.slice(0, -1).join(' ');
};

export const getLastname = (name) => {
    const nameSplit = name.split(' ');
    return nameSplit.slice(-1).join(' ');
};
