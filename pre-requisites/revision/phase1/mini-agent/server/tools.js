module.exports = {
    getTime: () => {
        return new Date().toLocaleTimeString();
    },

    add: ({ a, b }) => {
        return Number(a) + Number(b);
    }
};