(function() {

    var data = [
        {
          name: 'emmet',
          description: 'Emmet is the number one code snippet tool',
          author: 'emmetio',
          utl:'https//atom.io/packages/emmet',
          downloads: 1662209,
          stars: 2534,
          price: 10.50,
          selector: 'p1'
        },
        {
          name: 'atom-beautify',
          description: 'atom-beautify package will clean up your code, and mak eit more readable.',
          author: 'Glavin001',
          utl:'https//atom.io/packages/atom-beautify',
          downloads: 4228040,
          stars: 4541,
          price: 6.75,
          selector: 'p2'
        }
    ];
    
    function package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    }
    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };
    
    var getEl = function (id) {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package) {
        var selector = package.selector,
        nameEL = getEL(selector + '-name'),
        descEL = getEL(selector + '-description'),
        authEL = getEL(authEL + '-author'),
        downloadEL = getEL(authEL + '-downloads'),
        starsEL = getEL(authEL + '-stars');

        nameEL.textContent = package.name;
        descEL.textContent = package.description;
        authEL.textContent = package.author;
        downloadEL.textContent = package.getFormattedDownloads;
        starsEL.textContent = package.getFormattedStars;
    }

    dateEL = getEl('date');
    dateEL.textContent = getTodaysDate();

    var emmet = new package(data[0]);
    writePackageInfo(emmet);

    var beautify = new package(data[1]);
    writePackageInfo(beautify);

}());