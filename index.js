module.exports = {

    getModuleName: function (name) {
        return name.replace(/@.*\//, '');
    }

};